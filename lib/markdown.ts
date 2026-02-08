const inlineRegex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttribute(value: string) {
  return value.replace(/"/g, '&quot;');
}

function renderInline(text: string) {
  let result = '';
  let lastIndex = 0;

  for (const match of text.matchAll(inlineRegex)) {
    const start = match.index ?? 0;
    if (start > lastIndex) {
      result += escapeHtml(text.slice(lastIndex, start));
    }

    if (match[2]) {
      result += `<strong>${escapeHtml(match[2])}</strong>`;
    } else if (match[3]) {
      result += `<em>${escapeHtml(match[3])}</em>`;
    } else if (match[4]) {
      result += `<code>${escapeHtml(match[4])}</code>`;
    } else if (match[5] && match[6]) {
      result += `<a href="${escapeAttribute(match[6])}" target="_blank" rel="noreferrer">${escapeHtml(match[5])}</a>`;
    }

    lastIndex = start + match[0].length;
  }

  if (lastIndex < text.length) {
    result += escapeHtml(text.slice(lastIndex));
  }

  return result;
}

function flushParagraph(paragraph: string[], chunks: string[]) {
  if (paragraph.length === 0) return;
  chunks.push(`<p>${renderInline(paragraph.join(' '))}</p>`);
  paragraph.length = 0;
}

function flushList(listType: 'ul' | 'ol' | null, listItems: string[], chunks: string[]) {
  if (!listType || listItems.length === 0) return;
  const content = listItems.map((item) => `<li>${renderInline(item)}</li>`).join('');
  chunks.push(`<${listType}>${content}</${listType}>`);
  listItems.length = 0;
}

function flushBlockquote(lines: string[], chunks: string[]) {
  if (lines.length === 0) return;
  const content = lines.map((line) => renderInline(line)).join('<br/>');
  chunks.push(`<blockquote>${content}</blockquote>`);
  lines.length = 0;
}

function flushCodeBlock(codeLines: string[], chunks: string[]) {
  if (codeLines.length === 0) return;
  chunks.push(`<pre><code>${escapeHtml(codeLines.join('\n'))}</code></pre>`);
  codeLines.length = 0;
}

export function markdownToHtml(source: string) {
  const lines = source.split(/\r?\n/);
  const chunks: string[] = [];
  const paragraph: string[] = [];
  const listItems: string[] = [];
  const blockquoteLines: string[] = [];
  const codeLines: string[] = [];
  let listType: 'ul' | 'ol' | null = null;
  let inCode = false;

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();

    if (inCode) {
      if (line.startsWith('```')) {
        inCode = false;
        flushCodeBlock(codeLines, chunks);
      } else {
        codeLines.push(rawLine);
      }
      continue;
    }

    if (line.startsWith('```')) {
      flushParagraph(paragraph, chunks);
      flushList(listType, listItems, chunks);
      listType = null;
      flushBlockquote(blockquoteLines, chunks);
      inCode = true;
      continue;
    }

    if (!line.trim()) {
      flushParagraph(paragraph, chunks);
      flushList(listType, listItems, chunks);
      listType = null;
      flushBlockquote(blockquoteLines, chunks);
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushParagraph(paragraph, chunks);
      flushList(listType, listItems, chunks);
      listType = null;
      flushBlockquote(blockquoteLines, chunks);
      const level = headingMatch[1].length;
      chunks.push(`<h${level}>${renderInline(headingMatch[2].trim())}</h${level}>`);
      continue;
    }

    if (/^>\s*/.test(line)) {
      flushParagraph(paragraph, chunks);
      flushList(listType, listItems, chunks);
      listType = null;
      blockquoteLines.push(line.replace(/^>\s?/, ''));
      continue;
    }

    const listMatch = line.match(/^(?:[-*]|\d+\.)\s+(.*)$/);
    if (listMatch) {
      flushParagraph(paragraph, chunks);
      flushBlockquote(blockquoteLines, chunks);
      const type = line.trim().match(/\d+\./) ? 'ol' : 'ul';
      if (listType && listType !== type) {
        flushList(listType, listItems, chunks);
      }
      listType = type;
      listItems.push(listMatch[1].trim());
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph(paragraph, chunks);
  flushList(listType, listItems, chunks);
  flushBlockquote(blockquoteLines, chunks);
  if (inCode) {
    flushCodeBlock(codeLines, chunks);
  }

  return chunks.join('\n');
}

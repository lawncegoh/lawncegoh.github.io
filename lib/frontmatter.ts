export type FrontmatterResult = {
  attributes: Record<string, unknown>;
  body: string;
};

export function parseFrontmatter(source: string): FrontmatterResult {
  const frontmatterMatch = source.match(/^---\s*[\r\n]+([\s\S]*?)\r?\n---\s*/);

  if (!frontmatterMatch) {
    return { attributes: {}, body: source.trim() };
  }

  const [, rawAttributes] = frontmatterMatch;
  const body = source.slice(frontmatterMatch[0].length).trimStart();
  const attributes: Record<string, unknown> = {};

  const lines = rawAttributes.split(/\r?\n/);
  let currentKey: string | null = null;

  for (const line of lines) {
    if (!line.trim()) continue;

    if (/^\s*-\s+/.test(line) && currentKey) {
      const arr = (attributes[currentKey] as string[]) ?? [];
      arr.push(line.replace(/^\s*-\s+/, '').trim());
      attributes[currentKey] = arr;
      continue;
    }

    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.slice(0, colonIndex).trim();
    let value = line.slice(colonIndex + 1).trim();

    if (!value) {
      currentKey = key;
      attributes[key] = attributes[key] ?? [];
      continue;
    }

    currentKey = key;
    if (value.startsWith('[') && value.endsWith(']')) {
      const tokens = value
        .slice(1, -1)
        .split(',')
        .map((token) => token.trim())
        .filter(Boolean);
      attributes[key] = tokens;
      continue;
    }

    attributes[key] = value.replace(/^['"]|['"]$/g, '');
  }

  return { attributes, body };
}

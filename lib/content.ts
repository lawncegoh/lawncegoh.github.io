import fs from 'node:fs';
import path from 'node:path';

import { parseFrontmatter } from '@/lib/frontmatter';

export type ContentFrontmatter = {
  title: string;
  tags: string[];
  created: string;
  updated: string;
  summary: string;
};

export type Note = ContentFrontmatter & {
  slug: string;
  body: string;
};

export type MemoryEntry = Note;

const NOTES_DIR = path.join(process.cwd(), 'content', 'notes');
const MEMORY_DIR = path.join(process.cwd(), 'content', 'memory');

function listMdx(dir: string) {
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

function coerceStringArray(input: unknown): string[] {
  if (Array.isArray(input)) {
    return input.map((value) => String(value).trim()).filter(Boolean);
  }
  if (typeof input === 'string') {
    return input
      .split(',')
      .map((token) => token.trim())
      .filter(Boolean);
  }
  return [];
}

function coerceDate(value: unknown, fallback: string) {
  if (typeof value === 'string' && value.trim().length > 0) {
    return value;
  }
  return fallback;
}

function buildSummary(base: unknown, body: string) {
  if (typeof base === 'string' && base.trim().length > 0) {
    return base.trim();
  }
  const snippet = body.replace(/[#>*`-]/g, '').trim();
  return snippet.slice(0, 180) + (snippet.length > 180 ? '…' : '');
}

function parseFile(dir: string, filename: string): Note {
  const slug = filename.replace(/\.mdx$/, '');
  const filePath = path.join(dir, filename);
  const raw = fs.readFileSync(filePath, 'utf8');
  const { attributes, body: content } = parseFrontmatter(raw);
  const data = attributes as Record<string, unknown>;

  const fallbackDate = typeof data.date === 'string' ? data.date : new Date().toISOString();
  const created = coerceDate(data.created, fallbackDate);
  const updated = coerceDate(data.updated, created);

  return {
    slug,
    body: content,
    title: typeof data.title === 'string' ? (data.title as string) : slug,
    tags: coerceStringArray(data.tags),
    created,
    updated,
    summary: buildSummary(data.summary, content)
  };
}

function sortByFreshness(a: Note, b: Note) {
  return new Date(b.updated).getTime() - new Date(a.updated).getTime();
}

export function getNotes() {
  return listMdx(NOTES_DIR).map((file) => parseFile(NOTES_DIR, file)).sort(sortByFreshness);
}

export function getNote(slug: string) {
  const filename = `${slug}.mdx`;
  const filePath = path.join(NOTES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return parseFile(NOTES_DIR, filename);
}

export function getMemoryEntries() {
  return listMdx(MEMORY_DIR)
    .map((file) => parseFile(MEMORY_DIR, file))
    .sort((a, b) => new Date(b.created).getTime() - new Date(a.created).getTime());
}

export function getMemoryEntry(dateSlug: string) {
  const filename = `${dateSlug}.mdx`;
  const filePath = path.join(MEMORY_DIR, filename);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return parseFile(MEMORY_DIR, filename);
}

export type ArticleBlockType = 'TEXT' | 'IMAGE' | 'CODE';

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  code: string;
  type: 'CODE';
}

export interface ArticleImageBlock extends ArticleBlockBase {
  src: string;
  title: string;
  type: 'IMAGE';
}

export interface ArticleTextBlock extends ArticleBlockBase {
  title?: string;
  paragraphs: string[];
  type: 'TEXT';
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export type ArticleType = 'IT' | 'SCIENCE' | 'ECONOMICS';

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

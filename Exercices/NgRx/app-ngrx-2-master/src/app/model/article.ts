export interface Article {
  id: number;
  title: string;
  category: string;
}

export const JAVA_ARTICLES: Article[] = [
  { id: 1, title: 'Java article 1', category: 'Java' },
  { id: 2, title: 'Java article 2', category: 'Java' },
];

export const ANGULAR_ARTICLES: Article[] = [
  { id: 1, title: 'Angular article 1', category: 'Angular' },
  { id: 2, title: 'Angular article 2', category: 'Angular' },
];

export const FAVORITE_ARTICLES: Article[] = [
  { id: 1, title: 'Java article 1', category: 'Java' },
  { id: 2, title: 'Angular article 2', category: 'Angular' },
];

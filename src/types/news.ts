export interface NewsItem {
  _id: string;
  title:string;
  description:string;
  snippet: string;
  url: string;
  imageUrl: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[]
  relevance_score: boolean;
}

export interface NewsCardProps {
    item:NewsItem
}
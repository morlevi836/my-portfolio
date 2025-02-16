import { User } from "./user";

export interface ArticleContent {
  type_of: string;
  id: number;
  title: string;
  description: string;
  readable_publish_date: string;
  slug: string;
  path: string;
  url: string;
  comments_count: number;
  public_reactions_count: number;
  collection_id: number | null;
  published_timestamp: string;
  language: string;
  subforem_id: number;
  positive_reactions_count: number;
  cover_image: string | null;
  social_image: string;
  canonical_url: string;
  created_at: string;
  edited_at: string;
  crossposted_at: string | null;
  published_at: string;
  last_comment_at: string;
  reading_time_minutes: number;
  tag_list: string[];
  tags: string[];
  body_html: string;
  body_markdown: string;
  user: User;
  flare_tag: {
    name: string;
    bg_color_hex: string;
    text_color_hex: string;
  };
}

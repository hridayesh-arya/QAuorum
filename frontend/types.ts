export interface Post {
  id: string | number;
  content: string;
  author?: string;
  createdAt: string;
}

export interface CreatePostPayload {
  content: string;
  author: string;
}
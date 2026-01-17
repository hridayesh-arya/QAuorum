import { Post, CreatePostPayload } from '../frontend/types';

const STORAGE_KEY = 'qauorum_posts_v1';

const INITIAL_DATA: Post[] = [
  {
    id: 'p1',
    content: "The best part about QAuorum is the total lack of ego. Ideas just stand on their own without the weight of a username.",
    author: "Anonymous",
    createdAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'p2',
    content: "Why does it feel like Sunday evenings are actually Monday mornings in disguise? The 'Sunday Scaries' are real.",
    author: "Anonymous",
    createdAt: new Date(Date.now() - 7200000).toISOString()
  },
  {
    id: 'p3',
    content: "Has anyone else tried the 'no coffee for a week' challenge? I'm on day 3 and I think I can smell colors. Everything is vibrating.",
    author: "Anonymous",
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
];

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchPosts = async (): Promise<Post[]> => {
  await delay(600);
  const data = localStorage.getItem(STORAGE_KEY);
  
  if (!data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  
  const parsed = JSON.parse(data);
  return parsed.length === 0 ? INITIAL_DATA : parsed;
};

export const createPost = async (payload: CreatePostPayload): Promise<Post> => {
  await delay(400);
  const posts = await fetchPosts();
  
  const newPost: Post = {
    id: `post-${Date.now()}`,
    content: payload.content,
    author: payload.author || 'Anonymous',
    createdAt: new Date().toISOString(),
  };

  const updatedPosts = [newPost, ...posts];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedPosts));
  
  return newPost;
};
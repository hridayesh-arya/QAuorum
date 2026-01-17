import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import CreatePost from './components/CreatePost';
import PostCard from './components/PostCard';
import Sidebar from './components/Sidebar';
import { FeedSkeleton } from './components/Skeleton';
import { Post } from './types';
import { fetchPosts, createPost } from '../backend/api';
import { AlertCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const initializeApp = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await fetchPosts();
      setPosts([...data].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
    } catch (err) {
      setError("Unable to connect to the QAuorum internal network.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    initializeApp();
  }, [initializeApp]);

  const handleCreatePost = async (content: string) => {
    setIsSubmitting(true);
    try {
        const newPost = await createPost({ content, author: 'Anonymous' });
        setPosts(prev => [newPost, ...prev]);
    } catch (err) {
        alert("Failed to post. Internal storage error.");
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-reddit-canvas dark:bg-reddit-canvasDark transition-colors duration-200">
      <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="max-w-[1024px] mx-auto px-4 py-4 sm:py-6 flex justify-center gap-6">
        <div className="flex-1 max-w-[640px]">
          <CreatePost onSubmit={handleCreatePost} isSubmitting={isSubmitting} />
          <div className="space-y-3">
              {isLoading && <FeedSkeleton />}
              {!isLoading && error && (
                  <div className="bg-white dark:bg-reddit-cardDark border border-reddit-border dark:border-reddit-borderDark rounded p-6 text-center transition-colors">
                      <AlertCircle size={24} className="text-red-500 mx-auto mb-2" />
                      <h3 className="text-sm font-bold mb-1">Platform Error</h3>
                      <p className="text-xs text-reddit-textSecondary mb-4">{error}</p>
                      <button onClick={initializeApp} className="px-6 py-1.5 border dark:border-reddit-borderDark rounded-full text-xs font-bold transition-colors">Reconnect</button>
                  </div>
              )}
              {!isLoading && !error && posts.map((post) => <PostCard key={post.id} post={post} />)}
          </div>
        </div>
        <Sidebar />
      </main>
    </div>
  );
};

export default App;
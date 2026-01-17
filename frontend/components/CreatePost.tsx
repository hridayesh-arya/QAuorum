import React, { useState } from 'react';
import { UserCircle2, ImageIcon, LinkIcon } from 'lucide-react';

interface CreatePostProps {
  onSubmit: (content: string) => Promise<void>;
  isSubmitting: boolean;
}

const CreatePost: React.FC<CreatePostProps> = ({ onSubmit, isSubmitting }) => {
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    await onSubmit(content);
    setContent('');
    setIsFocused(false);
  };

  return (
    <div className="bg-white dark:bg-reddit-cardDark rounded border border-reddit-border dark:border-reddit-borderDark mb-4 overflow-hidden transition-all shadow-sm">
      <div className="p-3">
        {!isFocused ? (
          <div className="flex items-center gap-2">
            <div className="bg-gray-200 dark:bg-gray-800 p-1.5 rounded-full">
               <UserCircle2 size={24} className="text-reddit-textSecondary" />
            </div>
            <input
              type="text"
              className="flex-1 bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-reddit-borderDark rounded px-4 py-2 text-sm text-reddit-textPrimary dark:text-reddit-textPrimaryDark placeholder-gray-500 focus:outline-none focus:bg-white dark:focus:bg-black/60 transition-colors"
              placeholder="Create Post"
              onClick={() => setIsFocused(true)}
              readOnly
            />
            <div className="flex gap-1">
              <button className="p-2 text-reddit-textSecondary hover:bg-gray-100 dark:hover:bg-white/5 rounded transition-colors" title="Post Image">
                <ImageIcon size={20} />
              </button>
              <button className="p-2 text-reddit-textSecondary hover:bg-gray-100 dark:hover:bg-white/5 rounded transition-colors" title="Post Link">
                <LinkIcon size={20} />
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex gap-2 items-center text-[10px] uppercase tracking-wider text-reddit-textSecondary dark:text-reddit-textSecondaryDark font-bold">
                <UserCircle2 size={12} />
                <span>Posting Anonymously</span>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                autoFocus
                className="w-full min-h-[120px] p-3 rounded bg-gray-50 dark:bg-black/40 border border-gray-200 dark:border-reddit-borderDark text-sm text-reddit-textPrimary dark:text-reddit-textPrimaryDark placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none"
                placeholder="What are your thoughts?"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                disabled={isSubmitting}
              />
              <div className="flex justify-between items-center mt-3">
                <button 
                  type="button"
                  onClick={() => setIsFocused(false)}
                  className="px-4 py-1.5 text-xs font-bold text-reddit-textSecondary hover:text-reddit-textPrimary dark:hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <div className="flex gap-2">
                   <button
                    type="submit"
                    disabled={!content.trim() || isSubmitting}
                    className={`
                      flex items-center gap-2 px-6 py-1.5 rounded-full font-bold text-xs transition-all
                      ${!content.trim() || isSubmitting 
                        ? 'bg-gray-200 dark:bg-reddit-borderDark text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-sm'}
                    `}
                  >
                    {isSubmitting ? 'Posting...' : 'Post'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
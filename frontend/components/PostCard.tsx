import React from 'react';
import { Post } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Share2, ArrowBigUp, ArrowBigDown, Bookmark, MoreHorizontal } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const getRelativeTime = (dateString: string) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Just now';
      return formatDistanceToNow(date, { addSuffix: true });
    } catch (e) {
      return 'Just now';
    }
  };

  return (
    <article className="bg-white dark:bg-reddit-cardDark rounded border border-reddit-border dark:border-reddit-borderDark hover:border-gray-400 dark:hover:border-gray-500 transition-colors cursor-pointer flex group">
      <div className="w-10 bg-gray-50/50 dark:bg-black/10 flex flex-col items-center py-2 gap-0.5 border-r border-transparent">
        <button className="text-reddit-textSecondary dark:text-reddit-textSecondaryDark hover:text-blue-500 hover:bg-gray-200 dark:hover:bg-white/10 p-1 rounded transition-colors">
            <ArrowBigUp size={22} strokeWidth={1.5} />
        </button>
        <span className="text-[11px] font-bold text-reddit-textPrimary dark:text-reddit-textPrimaryDark opacity-30 select-none">●</span>
        <button className="text-reddit-textSecondary dark:text-reddit-textSecondaryDark hover:text-gray-600 dark:hover:bg-white/10 p-1 rounded transition-colors">
            <ArrowBigDown size={22} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex-1 p-2 sm:p-3 pb-1">
        <div className="flex items-center text-[11px] text-reddit-textSecondary dark:text-reddit-textSecondaryDark mb-1.5 gap-1.5">
            <div className="w-4 h-4 bg-reddit-orange rounded flex items-center justify-center text-[8px] text-white font-bold select-none">Q</div>
            <span className="font-bold text-reddit-textPrimary dark:text-reddit-textPrimaryDark">QAuorum</span>
            <span className="text-gray-400 opacity-50">•</span>
            <span className="font-medium">{post.author || 'Anonymous'}</span>
            <span className="text-gray-400 opacity-50">•</span>
            <span>{getRelativeTime(post.createdAt)}</span>
        </div>

        <div className="mb-2.5">
            <p className="text-sm sm:text-base text-reddit-textPrimary dark:text-reddit-textPrimaryDark whitespace-pre-wrap leading-relaxed font-normal">
                {post.content}
            </p>
        </div>

        <div className="flex items-center gap-1 text-reddit-textSecondary dark:text-reddit-textSecondaryDark text-[11px] font-bold -ml-1.5">
            <button className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded transition-colors">
                <MessageSquare size={16} />
                <span>Replies</span>
            </button>
            <button className="flex items-center gap-2 px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded transition-colors">
                <Share2 size={16} />
                <span>Share</span>
            </button>
            <button className="hidden sm:flex items-center gap-2 px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded transition-colors">
                <Bookmark size={16} />
                <span>Bookmark</span>
            </button>
            <button className="flex items-center px-2 py-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded transition-colors">
                <MoreHorizontal size={16} />
            </button>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
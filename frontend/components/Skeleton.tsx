import React from 'react';

const PostSkeleton = () => (
  <div className="bg-white dark:bg-reddit-cardDark rounded border border-reddit-border dark:border-reddit-borderDark flex animate-pulse">
    <div className="w-10 bg-gray-50 dark:bg-black/10 flex flex-col items-center py-2 gap-2 border-r border-transparent opacity-50">
      <div className="w-5 h-5 bg-gray-200 dark:bg-gray-800 rounded"></div>
      <div className="w-2 h-2 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
      <div className="w-5 h-5 bg-gray-200 dark:bg-gray-800 rounded"></div>
    </div>
    <div className="flex-1 p-3">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-4 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="w-20 h-3 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="w-12 h-3 bg-gray-100 dark:bg-gray-900 rounded"></div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="w-full h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="w-3/4 h-4 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
      <div className="flex gap-4">
        <div className="w-16 h-4 bg-gray-100 dark:bg-gray-900 rounded"></div>
        <div className="w-16 h-4 bg-gray-100 dark:bg-gray-900 rounded"></div>
      </div>
    </div>
  </div>
);

export const FeedSkeleton = () => (
  <div className="space-y-3">
    {[1, 2, 3, 4].map(i => <PostSkeleton key={i} />)}
  </div>
);
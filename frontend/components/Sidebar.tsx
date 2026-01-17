import React from 'react';
import { Database, ShieldCheck } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden lg:flex flex-col gap-4 w-[312px]">
      <div className="bg-white dark:bg-reddit-cardDark rounded border border-reddit-border dark:border-reddit-borderDark overflow-hidden shadow-sm">
        <div className="h-12 bg-gray-200 dark:bg-gray-800 relative">
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-reddit-orange to-orange-400"></div>
        </div>
        <div className="p-3">
          <div className="flex items-center gap-2 mb-3 -mt-8 relative z-10">
            <div className="bg-white dark:bg-reddit-cardDark p-1 rounded-full shadow-md">
              <div className="bg-reddit-orange h-12 w-12 rounded-full flex items-center justify-center border-2 border-white dark:border-reddit-cardDark">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                    <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.2952 22 14.5303 21.7544 15.6631 21.3093L22 23L20.3243 16.7909C21.3855 15.4215 22 13.7828 22 12C22 6.47715 17.5228 2 12 2Z" fill="white"/>
                    <circle cx="12" cy="12" r="3" fill="#FF4500"/>
                </svg>
              </div>
            </div>
            <span className="font-bold text-sm mt-6">QAuorum</span>
          </div>
          <p className="text-xs text-reddit-textSecondary dark:text-reddit-textSecondaryDark leading-relaxed mb-4">
            The destination for anonymous, community-driven discussions. Speak your thoughts without identity baggage.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-4 border-b border-gray-100 dark:border-gray-800 pb-4">
            <div>
              <div className="text-sm font-bold">14.2k</div>
              <div className="text-[10px] text-reddit-textSecondary uppercase tracking-wider">Participants</div>
            </div>
            <div>
              <div className="text-sm font-bold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> 243
              </div>
              <div className="text-[10px] text-reddit-textSecondary uppercase tracking-wider">Active Now</div>
            </div>
          </div>
          <div className="flex items-center justify-between mb-4 px-1">
             <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase tracking-tighter">
                <Database size={12} />
                <span>Storage: Local</span>
             </div>
             <div className="flex items-center gap-1 text-[10px] font-bold text-blue-500 uppercase tracking-tighter">
                <ShieldCheck size={12} />
                <span>Secure: Ready</span>
             </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-1.5 rounded-full text-xs transition-colors shadow-sm">
            Start Discussion
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
import React from 'react';
import { Moon, Sun, HelpCircle } from 'lucide-react';

interface HeaderProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-reddit-cardDark border-b border-reddit-border dark:border-reddit-borderDark transition-colors">
      <div className="max-w-5xl mx-auto px-4 h-12 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="h-8 w-8 rounded-full flex items-center justify-center bg-reddit-orange transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C13.2952 22 14.5303 21.7544 15.6631 21.3093L22 23L20.3243 16.7909C21.3855 15.4215 22 13.7828 22 12C22 6.47715 17.5228 2 12 2Z" fill="white"/>
                <circle cx="12" cy="12" r="3" fill="#FF4500"/>
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight hidden sm:block">QAuorum</span>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={toggleTheme} className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
            {isDarkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-gray-500" />}
          </button>
          <button className="p-2 rounded hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-reddit-textSecondary">
            <HelpCircle size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
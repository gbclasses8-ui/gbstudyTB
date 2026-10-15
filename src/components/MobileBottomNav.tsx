import React from 'react';
import { Home, BookOpen, Search, Send, Heart } from 'lucide-react';

interface MobileBottomNavProps {
  currentView: 'home' | 'course' | 'saved';
  onHomeClick: () => void;
  onSearchClick: () => void;
  onSavedClick: () => void;
  onTelegramClick: () => void;
  savedCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentView,
  onHomeClick,
  onSearchClick,
  onSavedClick,
  onTelegramClick,
  savedCount
}) => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#120818]/95 backdrop-blur-xl border-t border-pink-500/30 px-2 pt-1.5 pb-[calc(env(safe-area-inset-bottom,0px)+6px)] grid grid-cols-5 items-center justify-items-center shadow-2xl">
      {/* Home */}
      <button
        onClick={onHomeClick}
        className={`w-full flex flex-col items-center justify-center py-1 rounded-xl transition cursor-pointer min-h-[44px] active:scale-95 ${
          currentView === 'home' ? 'text-pink-400 font-bold' : 'text-pink-300/60 hover:text-pink-200'
        }`}
      >
        <Home className={`w-5 h-5 mb-0.5 ${currentView === 'home' ? 'stroke-[2.5]' : ''}`} />
        <span className="text-[10px] tracking-tight">Home</span>
      </button>

      {/* Batches */}
      <button
        onClick={onHomeClick}
        className={`w-full flex flex-col items-center justify-center py-1 rounded-xl transition cursor-pointer min-h-[44px] active:scale-95 ${
          currentView === 'home' ? 'text-pink-400 font-bold' : 'text-pink-300/60 hover:text-pink-200'
        }`}
      >
        <BookOpen className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Batches</span>
      </button>

      {/* Search */}
      <button
        onClick={onSearchClick}
        className="w-full flex flex-col items-center justify-center py-1 rounded-xl text-pink-300/70 hover:text-white transition cursor-pointer min-h-[44px] active:scale-95"
      >
        <Search className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Search</span>
      </button>

      {/* Telegram */}
      <button
        onClick={onTelegramClick}
        className="w-full flex flex-col items-center justify-center py-1 rounded-xl text-pink-300/70 hover:text-white transition cursor-pointer min-h-[44px] active:scale-95"
      >
        <Send className="w-5 h-5 mb-0.5" />
        <span className="text-[10px] tracking-tight">Telegram</span>
      </button>

      {/* Saved */}
      <button
        onClick={onSavedClick}
        className={`w-full relative flex flex-col items-center justify-center py-1 rounded-xl transition cursor-pointer min-h-[44px] active:scale-95 ${
          currentView === 'saved' ? 'text-pink-400 font-bold' : 'text-pink-300/60 hover:text-pink-200'
        }`}
      >
        <div className="relative">
          <Heart className={`w-5 h-5 mb-0.5 ${savedCount > 0 ? 'fill-pink-500 text-pink-500' : ''}`} />
          {savedCount > 0 && (
            <span className="absolute -top-1 -right-2.5 px-1 py-0.2 text-[9px] font-bold bg-pink-600 text-white rounded-full leading-none">
              {savedCount}
            </span>
          )}
        </div>
        <span className="text-[10px] tracking-tight">Saved</span>
      </button>
    </nav>
  );
};

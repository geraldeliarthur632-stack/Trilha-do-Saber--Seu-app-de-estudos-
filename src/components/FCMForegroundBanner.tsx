import React, { useState, useEffect } from 'react';
import { fcmReminderService, ForegroundFCMMessagePayload } from '../services/fcmReminderService';
import { soundEffects } from '../services/soundEffects';
import { SubjectId } from '../types';
import { Bell, Sparkles, X, ChevronRight, Clock } from 'lucide-react';

interface FCMForegroundBannerProps {
  onStartSubject?: (subjectId: SubjectId) => void;
}

export const FCMForegroundBanner: React.FC<FCMForegroundBannerProps> = ({ onStartSubject }) => {
  const [alert, setAlert] = useState<ForegroundFCMMessagePayload | null>(null);

  useEffect(() => {
    // 1. Service listener
    const unsubscribe = fcmReminderService.onForegroundAlert((payload) => {
      setAlert(payload);
      try {
        soundEffects.playStudyReminderChime();
      } catch {}
    });

    // 2. Window event listener
    const handleEvent = (e: Event) => {
      const customEvt = e as CustomEvent<ForegroundFCMMessagePayload>;
      if (customEvt.detail) {
        setAlert(customEvt.detail);
        try {
          soundEffects.playStudyReminderChime();
        } catch {}
      }
    };

    window.addEventListener('estudahud_fcm_foreground_alert', handleEvent);

    return () => {
      unsubscribe();
      window.removeEventListener('estudahud_fcm_foreground_alert', handleEvent);
    };
  }, []);

  if (!alert) return null;

  const handleAction = () => {
    soundEffects.playClick();
    if (alert.subjectId && onStartSubject) {
      onStartSubject(alert.subjectId as SubjectId);
    }
    setAlert(null);
  };

  const handleDismiss = () => {
    soundEffects.playClick();
    setAlert(null);
  };

  return (
    <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-md animate-in slide-in-from-top-4 duration-300">
      <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-900/95 via-purple-900/95 to-slate-900/95 text-white border border-indigo-400/40 shadow-2xl backdrop-blur-md flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse">
          <Bell className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-black uppercase tracking-wider px-1.5 py-0.2 rounded-md bg-indigo-500/30 text-indigo-300 border border-indigo-400/30">
              FCM • Cronograma
            </span>
            {alert.minutesLeft !== undefined && alert.minutesLeft > 0 && (
              <span className="text-[10px] font-bold text-amber-300 flex items-center gap-0.5">
                <Clock className="w-2.5 h-2.5" />
                Em {alert.minutesLeft} min
              </span>
            )}
          </div>
          <h4 className="text-xs font-black text-white truncate mt-0.5">
            {alert.title}
          </h4>
          <p className="text-[11px] text-slate-200 line-clamp-2 leading-tight mt-0.5">
            {alert.body}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={handleAction}
            className="px-2.5 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 font-black text-xs flex items-center gap-1 shadow-sm hover:brightness-110 active:scale-95 transition cursor-pointer"
          >
            <span>Estudar</span>
            <ChevronRight className="w-3 h-3" />
          </button>
          <button
            onClick={handleDismiss}
            className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center transition cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

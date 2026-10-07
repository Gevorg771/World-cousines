import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Bell, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const CookingTimer = ({ initialMinutes, label }) => {
  const { t } = useLanguage();
  const displayLabel = label || t.timerStep || 'Step Timer';
  
  const totalSeconds = initialMinutes * 60;
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  
  useEffect(() => {
    setSecondsRemaining(initialMinutes * 60);
    setIsRunning(false);
    setIsFinished(false);
  }, [initialMinutes]);

  useEffect(() => {
    let intervalId = null;

    if (isRunning && secondsRemaining > 0) {
      intervalId = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsFinished(true);
            playKitchenChime();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isRunning, secondsRemaining]);

  
  const playKitchenChime = () => {
    try {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;

      const audioCtx = new AudioContextClass();
      
      const playBeep = (freq, startDelay, duration) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime + startDelay);
        gain.gain.setValueAtTime(0.2, audioCtx.currentTime + startDelay);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + startDelay + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(audioCtx.currentTime + startDelay);
        osc.stop(audioCtx.currentTime + startDelay + duration);
      };

      playBeep(659, 0, 0.3);
      playBeep(830, 0.25, 0.3);
      playBeep(988, 0.5, 0.6);
    } catch {
     
    }
  };

 
  const handleToggleTimer = () => {
    if (isFinished) {
      setSecondsRemaining(totalSeconds);
      setIsFinished(false);
      setIsRunning(true);
    } else {
      setIsRunning(!isRunning);
    }
  };

  const handleResetTimer = () => {
    setIsRunning(false);
    setIsFinished(false);
    setSecondsRemaining(totalSeconds);
  };

  
  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const progressPercent = totalSeconds > 0 
    ? Math.max(0, Math.min(100, ((totalSeconds - secondsRemaining) / totalSeconds) * 100))
    : 0;

  return (
    <div className={`mt-3 p-3.5 rounded-2xl border transition-all ${
      isFinished 
        ? 'bg-amber-50 border-amber-400 ring-2 ring-amber-300' 
        : isRunning 
          ? 'bg-amber-50/60 border-amber-300' 
          : 'bg-stone-50 border-stone-200'
    }`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        
      
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
            isFinished
              ? 'bg-amber-700 text-white animate-bounce'
              : isRunning
                ? 'bg-amber-700 text-white'
                : 'bg-stone-200 text-stone-600'
          }`}>
            {isFinished ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <Bell className="w-5 h-5" />
            )}
          </div>

          <div>
            <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
              {displayLabel} ({initialMinutes} {t.mins})
            </div>
            <div className="font-mono text-xl font-bold tracking-tight text-stone-900">
              {formattedMinutes}:{formattedSeconds}
            </div>
          </div>
        </div>

   
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleTimer}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl font-bold text-xs shadow-sm transition-all active:scale-95 ${
              isRunning
                ? 'bg-stone-800 text-white hover:bg-stone-900'
                : 'bg-amber-700 text-white hover:bg-amber-800'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-white" />
                <span>{t.timerPause}</span>
              </>
            ) : isFinished ? (
              <>
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{t.timerRestart}</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>{t.timerStart}</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={handleResetTimer}
            disabled={!isRunning && secondsRemaining === totalSeconds}
            className="p-1.5 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200/50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
            title={t.timerReset}
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

      </div>

     
      <div className="w-full bg-stone-200 h-1.5 rounded-full mt-3 overflow-hidden">
        <div
          className={`h-full transition-all duration-300 ${
            isFinished ? 'bg-amber-700' : 'bg-gradient-to-r from-amber-500 to-amber-700'
          }`}
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {isFinished && (
        <p className="text-xs font-semibold text-amber-900 mt-2 flex items-center gap-1">
          <span>{t.timerDoneAlert}</span>
        </p>
      )}
    </div>
  );
};

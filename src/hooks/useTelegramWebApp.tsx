import { useEffect, useState } from 'react';

declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready: () => void;
        expand: () => void;
        close: () => void;
        initData: string;
        initDataUnsafe: {
          user?: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
          };
        };
      };
    };
  }
}

export const useTelegramWebApp = () => {
  const [isReady, setIsReady] = useState(false);
  const [user, setUser] = useState<{
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  } | null>(null);

  useEffect(() => {
    const webApp = window.Telegram?.WebApp;
    
    if (webApp) {
      // Initialize the WebApp
      webApp.ready();
      webApp.expand();
      
      // Set user data if available
      if (webApp.initDataUnsafe.user) {
        setUser(webApp.initDataUnsafe.user);
      }
      
      setIsReady(true);
    }
  }, []);

  return { isReady, user };
};
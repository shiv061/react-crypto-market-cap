import { useEffect, useLayoutEffect, useState } from 'react';

export const useDark = () => {
  const [dark, setDark] = useState(false);

  useLayoutEffect(() => {
    const localStore = localStorage.getItem('react-market-cap');
    if (localStore) {
      setDark(Boolean(localStore));
    }
  }, []);

  useEffect(() => {
    const htmlEl: HTMLElement | null = document.querySelector('html');
    if (htmlEl) {
      if (dark) {
        htmlEl.classList.add('dark');
        localStorage.setItem('react-market-cap', JSON.stringify(dark));
      } else {
        htmlEl.classList.remove('dark');
        localStorage.removeItem('react-market-cap');
      }
    }
  }, [dark]);

  return {
    dark,
    setDark,
  };
};

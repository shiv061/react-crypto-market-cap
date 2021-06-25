import { useEffect, useState } from 'react';

export const useDark = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const htmlEl: HTMLElement | null = document.querySelector('html');
    if (htmlEl) {
      if (dark) {
        htmlEl.classList.add('dark');
      } else {
        htmlEl.classList.remove('dark');
      }
    }
  }, [dark]);

  return {
    dark,
    setDark,
  };
};

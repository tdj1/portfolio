import { useState, useEffect } from 'react';

function offToOnScreen(delay: number) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [delay]);

  return [visible, setVisible] as const;
}

export default offToOnScreen;
import { useEffect, useRef, useState } from 'react';

const useOnScreen = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setVisible(entry.isIntersecting);
    });

    observer.observe(containerRef.current);
  }, [containerRef]);

  return [containerRef, visible];
};

export default useOnScreen;

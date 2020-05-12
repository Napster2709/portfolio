import React, { useEffect, useState } from 'react';

export const Drawing: React.FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  return <div></div>;
};

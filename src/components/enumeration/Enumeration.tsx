import React, { useEffect, useState } from 'react';
import styles from './styles.scss';

interface EnumerationProps {
  items: string[];
}

const Enumeration = ({ items }: EnumerationProps): React.ReactElement => {
  const [height, setHeight] = useState<number>(0);
  const [iter, setIter] = useState<number>(0);
  const itemRef = React.createRef<HTMLDivElement>();

  useEffect(() => {
    const interval = setInterval(() => {
      setIter(iter < items.length - 1 ? iter + 1 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, [iter]);

  useEffect(() => {
    setHeight(itemRef.current.clientHeight / items.length);
  }, [itemRef]);

  return (
    <div className={styles.container}>
      <div
        className={styles.itemBox}
        ref={itemRef}
        style={{ transform: `translateY(-${height * iter}px)` }}
      >
        {items.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Enumeration };

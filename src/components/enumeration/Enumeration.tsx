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
    items.push(items[0]);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIter(iter < items.length - 1 ? iter + 1 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, [iter]);

  useEffect(() => {
    setHeight(itemRef.current.clientHeight / items.length);
  }, [itemRef]);

  const style =
    iter !== 0
      ? {
          transform: `translateY(-${height * iter}px)`,
          transition: 'transform 0.5s cubic-bezier(0.78, 0.2, 0.15, 1.01)',
        }
      : { transform: `translateY(-${height * iter}px)` };

  return (
    <div className={styles.container}>
      <div className={styles.itemBox} ref={itemRef} style={style}>
        {items.map(
          (item, index) =>
            item && (
              <div className={styles.item} key={index}>
                {item}
              </div>
            ),
        )}
      </div>
    </div>
  );
};

export { Enumeration };

import React, { useEffect, useState } from 'react';
import s from './styles.scss';
import cn from 'classnames';
interface EnumerationProps {
  items: React.ReactNode[];
  className?: string;
  activeClassName?: string;
}

const Enumeration = ({
  items,
  className,
  activeClassName,
}: EnumerationProps): React.ReactElement => {
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
    <div className={s.container}>
      <div className={cn(s.itemBox, className)} ref={itemRef} style={style}>
        {items.map((item, index) => (
          <div
            className={cn(s.item, {
              [activeClassName]: index === iter && iter !== 0,
            })}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export { Enumeration };

import React from 'react';
import styles from './styles.scss';

interface EnumerationProps {
  items: string[];
}

const Enumeration = ({ items }: EnumerationProps): React.ReactElement => {
  return (
    <div className={styles.container}>
      <div className={styles.itemBox}>
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

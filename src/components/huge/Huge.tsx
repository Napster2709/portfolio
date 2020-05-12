import * as React from 'react';
import * as styles from './styles.scss';

interface HugeProps {
  children: React.ReactNode;
}

const Huge = ({ children }: HugeProps) => {
  return <div className={styles.hugeFont}>{children}</div>;
};

export { Huge };

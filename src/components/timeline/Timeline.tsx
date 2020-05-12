import React from 'react';
import styles from './styles.scss';

interface TimelineProps {
  children?: React.ReactNode;
}

interface TimelineItemProps {
  children?: React.ReactNode;
  date?: string;
  displayLine?: boolean;
}

const Timeline = ({ children }: TimelineProps): React.ReactElement => {
  return <div className={styles.timeline}>{children}</div>;
};

const TimelineItem = ({
  children,
  date,
  displayLine = true,
}: TimelineItemProps): React.ReactElement => {
  return (
    <div className={styles.row}>
      <div className={styles.dot} />
      {displayLine && <div className={styles.line} />}
      <div className={styles.content}>
        <div className={styles.bubble}>{children}</div>
      </div>
      <div className={styles.date}>{date}</div>
    </div>
  );
};

Timeline.Item = TimelineItem;

export { Timeline };

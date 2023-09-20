import React from 'react';
import s from './styles.scss';

interface TimelineProps {
  children?: React.ReactNode;
}

interface TimelineItemProps {
  children?: React.ReactNode;
  date?: string;
  displayLine?: boolean;
}

const Timeline = ({ children }: TimelineProps): React.ReactElement => {
  return <div className={s.timeline}>{children}</div>;
};

const TimelineItem = ({
  children,
  date,
  displayLine = true,
}: TimelineItemProps): React.ReactElement => {
  return (
    <div className={s.row}>
      <div className={s.dot} />
      {displayLine && <div className={s.line} />}
      <div className={s.content}>
        <div className={s.bubble}>{children}</div>
      </div>
      <div className={s.date}>{date}</div>
    </div>
  );
};

Timeline.Item = TimelineItem;

export { Timeline };

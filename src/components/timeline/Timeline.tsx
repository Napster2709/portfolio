import React from 'react';
import styles from './styles.scss';

interface TimelineProps {
  children?: React.ReactNode;
}

interface TimelineItemProps {
  children?: React.ReactNode;
  label?: string;
}

const Timeline = ({ children }: TimelineProps): React.ReactElement => {
  return <ul className={styles.timeline}>{children}</ul>;
};

const TimelineItem = ({
  children,
  label,
}: TimelineItemProps): React.ReactElement => {
  return <li className={styles.item}>{children}</li>;
};

Timeline.Item = TimelineItem;

export { Timeline };

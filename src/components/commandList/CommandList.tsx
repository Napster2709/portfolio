import React from 'react';
import { List } from 'components';
import styles from './styles.scss';

export interface Command {
  display: React.ReactNode;
  action?: () => void;
}

interface CommandListProps {
  commands: Command[];
}

const CommandList = ({ commands }: CommandListProps) => {
  return (
    <List>
      {commands.map((command, index: number) => (
        <List.Item
          key={index}
          className={styles.listItem}
          onClick={command.action}
        >
          {command.display}
        </List.Item>
      ))}
    </List>
  );
};

export { CommandList };

import React from 'react';
import s from './styles.scss';
import { Indecator } from './indecator';

interface StatusProps {
  status: 'Employed' | 'Looking' | 'Done';
  company: string;
  role: string;
}

const Status = ({ status, company, role }: StatusProps) => {
  return (
    <div className={s.wrapper}>
      <div className={s.textbox}>
        <div className={s.label}>Status:</div>
        <Indecator status={status} />
        {status}
      </div>
      <div className={s.textbox}>
        <div className={s.label}>Company:</div> {company}
      </div>
      <div className={s.textbox}>
        <div className={s.label}>Role:</div> {role}
      </div>
    </div>
  );
};

export { Status };

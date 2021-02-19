import React, { useState } from 'react';
import styles from './styles.scss';
import cn from 'classnames';

const DarkModeToggle: React.FC = () => {
  const [clicked, setclicked] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);
  const onClickHandler = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    setDone(false);
    setclicked(!clicked);
  };

  const onAnimationEndHandler = (
    event: React.AnimationEvent<SVGPathElement>,
  ) => {
    setDone(true);
    // event.currentTarget.classList.add(styles.done);
  };

  return (
    <>
      <svg
        className={cn(styles.sun, { [styles.animate]: clicked })}
        viewBox="0 0 100 100"
        onClick={onClickHandler}
      >
        <circle
          className={styles.circle}
          cx="50"
          cy="50"
          r="18"
          fill="rgb(255,255,255)"
        />
        <circle className={styles.shadow} cx="50" cy="50" r="20" />
        <path
          className={cn(styles._1, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 50 75 L 50 75 C 51.38 75 52.5 76.12 52.5 77.5 L 52.5 89.5 C 52.5 90.88 51.38 92 50 92 L 50 92 C 48.62 92 47.5 90.88 47.5 89.5 L 47.5 77.5 C 47.5 76.12 48.62 75 50 75 Z"
        />
        <path
          className={cn(styles._2, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 67.678 67.678 L 67.678 67.678 C 68.653 66.702 70.238 66.702 71.213 67.678 L 79.698 76.163 C 80.674 77.139 80.674 78.723 79.698 79.698 L 79.698 79.698 C 78.723 80.674 77.139 80.674 76.163 79.698 L 67.678 71.213 C 66.702 70.238 66.702 68.653 67.678 67.678 Z"
        />
        <path
          className={cn(styles._3, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 75 50 L 75 50 C 75 48.62 76.12 47.5 77.5 47.5 L 89.5 47.5 C 90.88 47.5 92 48.62 92 50 L 92 50 C 92 51.38 90.88 52.5 89.5 52.5 L 77.5 52.5 C 76.12 52.5 75 51.38 75 50 Z"
        />
        <path
          className={cn(styles._4, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 67.678 32.322 L 67.678 32.322 C 66.702 31.347 66.702 29.762 67.678 28.787 L 76.163 20.302 C 77.139 19.326 78.723 19.326 79.698 20.302 L 79.698 20.302 C 80.674 21.277 80.674 22.861 79.698 23.837 L 71.213 32.322 C 70.238 33.298 68.653 33.298 67.678 32.322 Z"
        />
        <path
          className={cn(styles._5, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 50 8 L 50 8 C 51.38 8 52.5 9.12 52.5 10.5 L 52.5 22.5 C 52.5 23.88 51.38 25 50 25 L 50 25 C 48.62 25 47.5 23.88 47.5 22.5 L 47.5 10.5 C 47.5 9.12 48.62 8 50 8 Z"
        />
        <path
          className={cn(styles._6, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 20.302 20.302 L 20.302 20.302 C 21.277 19.326 22.861 19.326 23.837 20.302 L 32.322 28.787 C 33.298 29.762 33.298 31.347 32.322 32.322 L 32.322 32.322 C 31.347 33.298 29.762 33.298 28.787 32.322 L 20.302 23.837 C 19.326 22.861 19.326 21.277 20.302 20.302 Z"
        />
        <path
          className={cn(styles._7, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 8 50 L 8 50 C 8 48.62 9.12 47.5 10.5 47.5 L 22.5 47.5 C 23.88 47.5 25 48.62 25 50 L 25 50 C 25 51.38 23.88 52.5 22.5 52.5 L 10.5 52.5 C 9.12 52.5 8 51.38 8 50 Z"
        />
        <path
          className={cn(styles._8, {
            [styles.done]: done,
          })}
          onAnimationEndCapture={onAnimationEndHandler}
          d="M 20.302 79.698 L 20.302 79.698 C 19.326 78.723 19.326 77.139 20.302 76.163 L 28.787 67.678 C 29.762 66.702 31.347 66.702 32.322 67.678 L 32.322 67.678 C 33.298 68.653 33.298 70.238 32.322 71.213 L 23.837 79.698 C 22.861 80.674 21.277 80.674 20.302 79.698 Z"
        />
      </svg>
    </>
  );
};

export { DarkModeToggle };

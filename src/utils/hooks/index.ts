export const useScroll = (): void => {
  window.addEventListener('scroll', () => console.log('scroll'));

  return window.removeEventListener('scroll', () => console.log('scroll'));
};

export const useKeybordInput = (func: (ev: KeyboardEvent) => any): void => {
  document.addEventListener('keypress', (ev: KeyboardEvent) => func(ev));

  return document.removeEventListener('keypress', func);
};

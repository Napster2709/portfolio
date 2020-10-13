export const useScroll = () => {
  window.addEventListener('scroll', () => console.log('scroll'))

  return window.removeEventListener('scroll', () => console.log('scroll'));
}
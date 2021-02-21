interface detectColorSchemeProps {
  overwrite?: boolean;
}

export const detectColorScheme = ({
  overwrite = false,
}: detectColorSchemeProps): void => {
  const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const savedColorScheme = localStorage.getItem('theme');

  console.log(systemColorScheme);

  if (overwrite || !localStorage.getItem('theme')) {
    localStorage.setItem('theme', `${systemColorScheme}`);
    return document.documentElement.setAttribute(
      'data-theme',
      `${systemColorScheme}`,
    );
  }

  if (localStorage.getItem('theme')) {
    return document.documentElement.setAttribute(
      'data-theme',
      `${savedColorScheme}`,
    );
  }
};

export const toggleColorScheme = (): void => {
  const storedColorScheme = localStorage.getItem('theme');
  if (storedColorScheme === 'dark') {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  }
  if (storedColorScheme === 'light') {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  }
};

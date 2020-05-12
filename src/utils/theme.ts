interface detectColorSchemeProps {
  overwrite?: boolean;
}

export const detectColorScheme = ({
  overwrite = false,
}: detectColorSchemeProps): string => {
  const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    .matches
    ? 'dark'
    : 'light';
  const savedColorScheme = localStorage.getItem('theme');

  if (overwrite || !savedColorScheme) {
    localStorage.setItem('theme', `${systemColorScheme}`);

    document.documentElement.setAttribute('data-theme', `${systemColorScheme}`);

    return systemColorScheme;
  }

  document.documentElement.setAttribute('data-theme', `${savedColorScheme}`);

  return savedColorScheme;
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

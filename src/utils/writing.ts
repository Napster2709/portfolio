import { sleep } from 'utils';

interface WriteTextProps {
  text: string;
  setNewText: (newString: string) => void;
  delay?: number;
}

export const writeText = async ({
  text,
  setNewText,
  delay = 50,
}: WriteTextProps) => {
  let newText: string = '';

  return new Promise(async (resolve, reject) => {
    let i = 0;
    for (i; i < text.length; i++) {
      newText = newText + text[i];
      setNewText(newText);
      await sleep(delay);
    }

    if (i === text.length) {
      resolve();
    }
  });
};

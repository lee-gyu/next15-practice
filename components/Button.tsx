import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text?: string;
};

export function Button(props: ButtonProps) {
  const { text, ...restProps } = props;

  return <button {...restProps}>{text}</button>;
}

import { ButtonHTMLAttributes } from "react";

type params = { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export const SecondaryButton = ({ children, className, ...props }: params) => {
  return (
    <button
      className={`rounded-[4px] py-2 px-3 font-semibold dark:bg-transparent dark:text-color-dark-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

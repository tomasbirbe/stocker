import { ButtonHTMLAttributes } from "react";

type params = { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = ({ children, ...props }: params) => {
  return (
    <button
      className="rounded-[4px] py-2 px-3 font-semibold dark:bg-primary-dark-500 dark:text-color-dark-inverted"
      {...props}
    >
      {children}
    </button>
  );
};

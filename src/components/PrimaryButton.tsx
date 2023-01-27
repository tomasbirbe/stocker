import { ButtonHTMLAttributes } from "react";

type params = { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export const PrimaryButton = ({ children, ...props }: params) => {
  return (
    <button
      className="dark:bg-primary-dark-500 py-2 px-3 font-semibold rounded-[4px] dark:text-text-color-light"
      {...props}
    >
      {children}
    </button>
  );
};

import { ButtonHTMLAttributes } from "react";

type params = { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>;

export const SecondaryButton = ({ children, ...props }: params) => {
  return (
    <button
      className="dark:bg-transparent py-2 px-3 font-semibold rounded-[4px]  dark:text-color-dark-base"
      {...props}
    >
      {children}
    </button>
  );
};

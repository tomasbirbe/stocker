import { InputHTMLAttributes } from "react";

type params = { label?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: params) => {
  return (
    <label htmlFor={props.id}>
      <p>{label}</p>
      <input
        className="dark:bg-backfill-dark-400 w-full rounded-[4px] h-[40px]"
        type="text"
        {...props}
      />
    </label>
  );
};

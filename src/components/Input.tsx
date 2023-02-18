import { InputHTMLAttributes } from "react";

type params = { label?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: params) => {
  return (
    <label className="w-full" htmlFor={props.id}>
      <p className="mb-2 text-[14px]">{label}</p>
      <input
        autoComplete="off"
        className="h-[40px] w-full rounded-[4px] px-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-backfill-dark-200 dark:bg-backfill-dark-400"
        type="text"
        {...props}
      />
    </label>
  );
};

import { InputHTMLAttributes } from "react";

type params = { label?: string } & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ label, ...props }: params) => {
  return (
    <label className="w-full" htmlFor={props.id}>
      <p className="text-[14px] mb-2">{label}</p>
      <input
        autoComplete="off"
        className="dark:bg-backfill-dark-400 w-full rounded-[4px] h-[40px] px-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-backfill-dark-200"
        type="text"
        {...props}
      />
    </label>
  );
};

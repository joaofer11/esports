import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: Props) => (
  <input
    {...props}
    className="w-[100%] bg-zinc-900 px-4 py-3 rounded text-sm placeholder:text-zinc-500"
  />
);

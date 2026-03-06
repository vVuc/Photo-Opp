import type { InputHTMLAttributes, ReactNode } from "react";

export function EnvelopeIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

export function LockIcon() {
  return (
    <svg
      className="h-5 w-5 flex-shrink-0 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
      />
    </svg>
  );
}

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "className"> {
  /** Ícone exibido à direita do campo (ex.: EnvelopeIcon, LockIcon) */
  rightIcon?: ReactNode;
}

export function Input({ rightIcon, ...inputProps }: InputProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-gray-700/80 bg-[#242424] px-4 py-3 focus-within:border-gray-500">
      <input
        {...inputProps}
        className="min-w-0 flex-1 bg-transparent text-white placeholder:text-[#AAAAAA] focus:outline-none"
      />
      {rightIcon ? <span className="flex-shrink-0">{rightIcon}</span> : null}
    </div>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#565656] text-white font-semibold border-0 hover:bg-[#4a4a4a] disabled:opacity-50 disabled:cursor-not-allowed",
  secondary:
    "bg-black text-[#666666] font-semibold border border-[#666666] hover:bg-gray-900 hover:text-gray-500 hover:border-gray-500 disabled:opacity-50 disabled:cursor-not-allowed",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`rounded-none font-bold px-6 py-3 ${variantStyles[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </button>
  );
}

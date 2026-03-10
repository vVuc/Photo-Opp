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
  label: string;
}

export function Input({label, rightIcon, ...inputProps }: InputProps) {
  return (
<label className="block w-full cursor-text">
      
      {/* Contêiner principal: Flex em linha (Row), com fundo e borda */}
      <div className="flex items-center justify-between gap-3 border border-gray-700/80 bg-[#242424] px-4 py-2 focus-within:border-gray-500 transition-colors">
        
        {/* Lado Esquerdo: Flex em coluna (Col) ocupando o máximo de espaço (flex-1) */}
        <div className="flex flex-col flex-1 min-w-0">
          
          {/* Label no topo */}
          {label && (
            <span className="text-xs font-semibold text-gray-300 mb-0.5 select-none">
              {label}
            </span>
          )}
          
          {/* Input logo abaixo da label */}
          <input
            {...inputProps}
            className="w-full bg-transparent text-white focus:outline-none"
          />
        </div>

        {/* Lado Direito: Ícone fixo */}
        {rightIcon && (
          <span className="flex-shrink-0 text-white flex items-center justify-center">
            {rightIcon}
          </span>
        )}
        
      </div>
    </label>
  );
}

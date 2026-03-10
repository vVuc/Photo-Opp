import type { InputHTMLAttributes } from "react";

// Estendemos as propriedades padrão de um input HTML
// e adicionamos a propriedade 'label' obrigatória
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
}

export function Checkbox({ label, checked, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        {...props}
        className="
          w-4 h-4 rounded shadow-sm cursor-pointer relative
          appearance-none bg-transparent border border-gray-500
          focus:outline-none focus:ring focus:ring-gray-200 focus:ring-opacity-50
          checked:after:content-[''] checked:after:absolute checked:after:left-[5px] checked:after:top-[1px]
          checked:after:w-[5px] checked:after:h-[10px] checked:after:border-black 
          checked:after:border-b-2 checked:after:border-r-2 checked:after:rotate-45
          checked:border-black
        "
      />
      {/* Aqui fazemos a verificação do checked */}
      <span className={`text-sm select-none font-semibold ${checked ? 'text-black font-medium' : 'text-gray-500'}`}>
        {label}
      </span>
    </label>
  );
}
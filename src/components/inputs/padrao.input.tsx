import { HTMLInputTypeAttribute } from "react";

export default function PadraoInput({ texto, tipo, id, nome }: { texto: string, tipo: HTMLInputTypeAttribute | undefined, id: string, nome: string }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">{texto}</label>
      <div className="mt-2">
        <input id={id} name={nome} type={tipo} autoComplete={tipo} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"></input>
      </div>
    </div>
  )
}
import { HTMLInputTypeAttribute } from "react";
import InputLabel, { InputLabelProps } from "../labels/input.label";


export class PadraoInputProps {
  constructor(
    public id: string,
    public nome: string,
    public tipo: string,
    public isAutoComplete: boolean,
    public autoComplete?: string) { }
}

export default function PadraoInput({ tipo, id, nome, isAutoComplete, autoComplete }: PadraoInputProps) {
  if (isAutoComplete) {
    return (
      <input
        id={id}
        name={nome}
        type={tipo}
        autoComplete={autoComplete}
        required
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6">
      </input>
    )
  }
  return (
    <input
      id={id}
      name={nome}
      type={tipo}
      required
      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6">
    </input>
  )
}
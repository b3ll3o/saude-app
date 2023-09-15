import { HTMLInputTypeAttribute } from "react";
import MarginTopContainer from "../containers/margin.top.container";

export default function TextoInput({ tipo, id, nome }: { tipo: HTMLInputTypeAttribute | undefined, id: string, nome: string }) {
  return (
    <MarginTopContainer>
      <input id={id} name={nome} type={tipo} autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"></input>
    </MarginTopContainer>
  )
}
export class TextoAcaoProps {
  constructor(public texto: string) { }
}

export default function TextoAcao({ texto }: TextoAcaoProps) {
  return (
    <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-500 text-sm">{texto}</a>
  )
}


export class TituloCampoProps {
  constructor(public texto: string) { }
}

export default function TituloCampo({ texto }: TituloCampoProps) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{texto}</h2>
    </div>
  )
}
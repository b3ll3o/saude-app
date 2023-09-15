import TextoAcao from "@/components/acoes/texto.acao";

export class TextoAcaoCampoProps {
  constructor(public textoAcao: string, public texto: string) { }
}

export default function TextoAcaoCampo({ textoAcao, texto }: TextoAcaoCampoProps) {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      {texto}
      <TextoAcao texto={textoAcao} />
    </p>
  )
}
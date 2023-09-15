import InputLabel, { InputLabelProps } from "../labels/input.label";
import PadraoInput from "./padrao.input";
import MarginTopContainer from "../containers/margin.top.container";


export class PadraoLabelInputProps {
  constructor(
    public labelProps: InputLabelProps,
    public id: string,
    public nome: string,
    public tipo: string, public isAutoComplete: boolean, public autoComplete?: string) { }
}

export default function PadraoLabelInput({ labelProps, id, nome, tipo, autoComplete, isAutoComplete }: PadraoLabelInputProps) {
  return (
    <div>
      <InputLabel
        {...labelProps}
      />
      <MarginTopContainer>
        <PadraoInput id={id}
          nome={nome}
          tipo={tipo}
          isAutoComplete={isAutoComplete}
          autoComplete={autoComplete} />
      </MarginTopContainer>
    </div>
  )
}
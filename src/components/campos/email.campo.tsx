import PadraoLabelInput from "../inputs/padrao.label.input";
import { InputLabelProps } from "../labels/input.label";

export default function EmailCampo() {
  return (
    <PadraoLabelInput isAutoComplete={false} id="email" nome="email" tipo="email" labelProps={new InputLabelProps('input-email', 'E-mail', 'email')} />
  )
}
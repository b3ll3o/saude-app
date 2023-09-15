import TextoAcao from "../acoes/texto.acao";
import FlexCenterBetweenContainer from "../containers/flex.center.between.container.";
import LinhaForm from "../containers/margin.top.container";
import SenhaInput from "../inputs/senha.input";
import InputLabel from "../labels/input.label";

export default function SenhaCampo() {
  return (
    <div>
      <FlexCenterBetweenContainer>
        <InputLabel id="label-senha" htmlFor="senha" texto="Senha" />
        <TextoAcao texto="Esqueceu a senha?" />
      </FlexCenterBetweenContainer>

      <LinhaForm>
        <SenhaInput id="input-senha" nome="senha" />
      </LinhaForm>
    </div>
  )
}
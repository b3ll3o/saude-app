import SubmitBtn from "@/components/btn/submit.btn";
import TextoAcaoCampo from "@/components/campos/acoes/texto.acao.campo";
import EmailCampo from "@/components/campos/email.campo";
import SenhaCampo from "@/components/campos/senha.campo";
import TituloCampo from "@/components/campos/titulo.campo";
import LoginCard from "@/components/cards/login.card";
import MarginTopContainer from "@/components/containers/margin.top.container";
import Form from "@/components/form/form";


export default function Login() {
  return (
    <LoginCard>
      <TituloCampo texto="Login" />

      <MarginTopContainer margin="10">
        <Form>
          <EmailCampo />
          <SenhaCampo />
          <SubmitBtn texto="Entrar" />
        </Form>

        <TextoAcaoCampo textoAcao="Cadastre-se de graça" texto="Não esta cadastrado?" />
      </MarginTopContainer>
    </LoginCard>
  );
}

import PadraoInput from "@/components/btn/inputs/padrao.input";
import SubmitBtn from "@/components/btn/submit.btn";

export default function Login() {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Login</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <PadraoInput id="email" nome="email" texto="E-mail" tipo="email" />

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Senha</label>
              <div className="text-sm">
                <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-500">Esqueceu a senha?</a>
              </div>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"></input>
            </div>
          </div>

          <SubmitBtn texto="Entrar" />
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não esta cadastrado?
          <a href="#" className="font-semibold leading-6 text-emerald-600 hover:text-emerald-500">Cadastre-se de graça</a>
        </p>
      </div>
    </div>
  );
}

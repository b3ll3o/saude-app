export default function SenhaInput({ id, nome }: { texto: string, id: string, nome: string }) {
  return (
    <div className="mt-2">
      <input id={id} name={nome} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-emerald-600 sm:text-sm sm:leading-6"></input>
    </div>
  )
}
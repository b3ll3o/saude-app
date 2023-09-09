export default function PrimarioBtn({ texto, tipo }: { texto: string, tipo: 'submit' | 'reset' | 'button' | undefined }) {
  return (
    <div>
      <button type={tipo} className="flex w-full justify-center rounded-md bg-emerald-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600">{texto}</button>
    </div>
  )
}
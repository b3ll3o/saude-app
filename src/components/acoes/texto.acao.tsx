export default function TextoAcao({ texto }: { texto: string}) {
  return (
    <div className="text-sm">
      <a href="#" className="font-semibold text-emerald-600 hover:text-emerald-500">{texto}</a>
    </div>
  )
}
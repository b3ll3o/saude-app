
export class InputLabelProps {
  constructor(public id: string, public texto: string, public htmlFor: string) { }
}

export default function InputLabel({ texto, id, htmlFor }: InputLabelProps) {
  return (
    <label
      id={id}
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900">
      {texto}
    </label>
  )
}
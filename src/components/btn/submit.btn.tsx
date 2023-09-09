import PrimarioBtn from "./primario.btn";

export default function SubmitBtn({texto}: {texto: string}){
  return <PrimarioBtn texto={texto} tipo="submit" />
}
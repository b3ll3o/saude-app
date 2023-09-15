import { ReactNode } from "react";
import MarginTopContainer from "../containers/margin.top.container";

export default function Form({ children }: { children?: ReactNode[] }) {
  return (
    <form className="space-y-6" action="#" method="POST">
      {children && children.map(c =>
        <MarginTopContainer key={Math.floor(Math.random() * 10)}>
          {c}
        </MarginTopContainer>)}
    </form>
  )
}
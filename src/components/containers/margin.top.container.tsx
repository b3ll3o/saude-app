import { ReactNode } from "react";

export default function MarginTopContainer({ children, margin }: { children?: ReactNode, margin?: string }) {
  return (
    <div className={margin ? `mt-${margin}` : "mt-2"}>
      {children && children}
    </div>
  )
}
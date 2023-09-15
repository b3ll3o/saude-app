import { ReactNode } from "react";

export default function FlexCenterBetweenContainer({ children }: { children?: ReactNode[] }) {
  return (
    <div className="flex items-center justify-between">
      {children && children}
    </div>
  )
}
import { ReactNode } from "react";

export default function LoginCard({ children }: { children?: ReactNode[] }) {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      {children && children}
    </div>
  )
}
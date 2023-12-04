import { Fragment, ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function AuthLayout({ children, ...props }: LayoutProps) {
  return (
    <Fragment>
      <div
        className="grid h-screen items-center justify-items-center bg-gray-200"
        {...props}
      >
        {children}
      </div>
    </Fragment>
  )
}

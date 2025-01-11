const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      {children}
    </div>
  )
}

export default AuthLayout

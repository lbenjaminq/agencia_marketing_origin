interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="pt-28">
      {children}
    </div>
  )
}
export default Layout;
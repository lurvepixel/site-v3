import 'twin.macro'

const SimpleLayout: React.FC = ({ children }) => {
  return (
    <div tw="min-h-screen font-sans antialiased break-words text-sky-black bg-sky-gray-100">
      <main>{children}</main>
    </div>
  )
}

export default SimpleLayout

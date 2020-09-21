import 'twin.macro'

import { FC, WC } from '@/common/types'

const SimpleLayout: FC<WC> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

export default SimpleLayout

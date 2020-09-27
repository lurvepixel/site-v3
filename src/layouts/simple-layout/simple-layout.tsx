import 'twin.macro'

import { FC, WC } from '~/common/types'

export const SimpleLayout: FC<WC> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

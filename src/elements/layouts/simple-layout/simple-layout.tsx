import 'twin.macro'

import { FC, WC } from '~/shared/types'

export const SimpleLayout: FC<WC> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

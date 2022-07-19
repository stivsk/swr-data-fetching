import { PropsWithChildren } from 'react'
import { SWRConfig } from 'swr'
import { fetcher } from '../../utils/utils'

const SwrGlobalConfig = ({ children }: PropsWithChildren) => {
  const swrConfig = {
    suspense: true,
    fetcher,
  }

  return <SWRConfig value={swrConfig}>{children}</SWRConfig>
}

export default SwrGlobalConfig

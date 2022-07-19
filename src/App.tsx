import { Suspense, lazy } from 'react'

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import SwrGlobalConfig from './components/Swr/SwrGlobalConfig'

const Home = lazy(() => import('./containers/Home/Home'))

const App = () => {
  return (
    <ErrorBoundary fallback={<h1>Global Error</h1>}>
      <SwrGlobalConfig>
        <Suspense fallback={<h1>Loading Container...</h1>}>
          <Home />
        </Suspense>
      </SwrGlobalConfig>
    </ErrorBoundary>
  )
}

export default App

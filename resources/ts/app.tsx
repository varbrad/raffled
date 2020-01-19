import React, { Suspense } from 'react'
import { render } from 'react-dom'

const Index = React.lazy(() => import('./pages/index'))

const App = ({ children }) => (
  <div>
    <p>APP</p>
    <Suspense fallback={<p>Loading</p>}>
      <Index />
    </Suspense>
  </div>
)

render(<App />, document.getElementById('app'))

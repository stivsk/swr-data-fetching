import { render } from '@testing-library/react'
import App from './App'

test('renders app container', async () => {
  const { container } = render(<App />)

  expect(container).toBeInTheDocument()
})

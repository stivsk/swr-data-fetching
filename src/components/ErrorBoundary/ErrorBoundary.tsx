import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
  fallback: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  public state = { hasError: false }

  public static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    const { fallback, children } = this.props
    const { hasError } = this.state

    return hasError ? fallback : children
  }
}

export default ErrorBoundary

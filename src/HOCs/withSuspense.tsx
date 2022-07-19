import { Component, FunctionComponent, Suspense } from 'react'

function withSuspense(Fallback: FunctionComponent) {
  return (WrappedComponent: FunctionComponent) =>
    class DataSuspenseLoader extends Component {
      constructor(props: any) {
        super(props)
      }

      render() {
        return (
          <Suspense fallback={<Fallback />}>
            <WrappedComponent {...this.props} />
          </Suspense>
        )
      }
    }
}

export default withSuspense

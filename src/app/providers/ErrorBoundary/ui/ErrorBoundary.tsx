import {Component, ErrorInfo, ReactNode} from 'react';

interface ErrorBoundaryProps {
  children: ReactNode
}

interface State {
  hasError: boolean,
  errorInfo: string
}

class ErrorBoundary extends Component<ErrorBoundaryProps, State> {
  public state: State = {
      hasError: false,
      errorInfo: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return {hasError: true, errorInfo: error.message};
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const {hasError, errorInfo} = this.state;
    if (hasError) {
      return <div>
        <h1>Something went wrong.</h1>
        <p>Error info: {errorInfo}</p>
      </div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

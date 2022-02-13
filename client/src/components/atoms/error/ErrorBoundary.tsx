import React from "react";
import ShowCase from "./ShowCase";

class ErrorBoundary extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    //  @ts-ignore
    if (this.state.errorInfo) {
      return (
        <div>
          <ShowCase />
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

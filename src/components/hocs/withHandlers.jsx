import { Component } from "react";

function withHandlers(WrappedComponent) {
  return class Test extends Component {
    constructor(props) {
      super(props);
      this.state = {
        firstName: "",
      };
      this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(e) {
      this.setState({ [e.target.name]: e.target.value });
    }

    render() {
      const { changeHandler } = this;
      const { firstName } = this.state;
      console.log(this);
      const props = {
        firstName,
        changeHandler,
      };
      return <WrappedComponent {...this.props} {...props} />;
    }
  };
}

export default withHandlers;

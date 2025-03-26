import { Component } from "react";

class ClComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  // mount => single
  componentDidMount() {
    // logic => call an api
    console.log("mounting");
  }
  // update => multiple
  componentDidUpdate() {
    // on delete a data call api of server
    console.log("comp is updated");
  }
  // unmounting => single
  componentWillUnmount() {
    // reset a comp data
  }

  render() {
    return (
      <>
        <h1>Class Comp {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          INC
        </button>
      </>
    );
  }
}

export default ClComponent;

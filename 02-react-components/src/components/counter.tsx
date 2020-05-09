import * as React from 'react';

interface Props {}
interface State {
  count: number;
};

export default class Counter extends React.Component<Props, State> {
  static defaultProps: Props = {
    count: 10
  }; 

  state: State = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: (this.state.count + 1)
    });
  };

  decrement = () => {
    this.setState({
      count: (this.state.count - 1)
    });
  };

  render () {
    return (
      <div className="ts-counter">
        <h3>Counter</h3>
        <h3>{this.state.count}</h3>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
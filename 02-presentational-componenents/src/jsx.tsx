interface Props {
    foo: string;
}
  
class MyComponent extends React.Component<Props, {}> {
    render() {
      return <span>{this.props.foo}</span>
    }
}

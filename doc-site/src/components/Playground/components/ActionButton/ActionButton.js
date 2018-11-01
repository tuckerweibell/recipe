import React, {Component} from 'react';
import styled from 'react-emotion';

const ActionButton = styled.button`
  background-color: #fff;
  border-radius: 0.25em;
  font-size: 0.75rem;
  text-transform: uppercase;
`;

export default class extends Component {
  state = {
    executing: false,
  };

  onClick = () => {
    const {onClick, delay} = this.props;
    this.setState({executing: true});
    if (onClick) onClick();
    setTimeout(() => this.setState({executing: false}), delay || 5000);
  };

  render() {
    return <ActionButton onClick={this.onClick}>{this.props.children(this.state)}</ActionButton>;
  }
}

import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
  static propTypes = {
    initialText: PropTypes.string.isRequired
  }

  constructor(props) {
    super(props);
    this.state = { text: this.props.initialText };
  }

  onButtonClick(event) {
    event.preventDefault();

    this.setState({ text: 'changed in the browser!' });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <p>{this.state.text}</p>
        <button onClick={this.onButtonClick.bind(this)}>change text!</button>
      </div>
    );
  }
}

export default Home;

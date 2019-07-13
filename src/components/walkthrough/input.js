
import React from 'react';
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
    this.updateInputValue = this.updateInputValue.bind(this)
  }

  render() {
    return (
      //...
      <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
      //...
    );
  }; 

  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
    if (evt.target.value === this.props.answer) {
        this.props.onanswerselected()
    }
  }
};

export default Input;
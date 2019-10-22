import React, {Component} from 'react';

export default class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  };

  render() {
    return (
      <div>
        <form onSubmit={() => this.props.onSubmit(this.state.input)}>
          <input type="text" name="input" value={this.state.input} onChange={this.handleChange}/>
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  };

};

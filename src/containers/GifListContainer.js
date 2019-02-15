import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends Component {
  constructor(){
    super();
    this.state = {
      gifLists: [],
      type: 'YOUR QUERY HERE'
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  handleChange = (event) => {
    this.setState({type: event.target.value})
  }

  handleSubmit =(event) => {
    event.preventDefault();
    const type = this.state.type;
    fetch("http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&rating=g")
    .then(resp => resp.json())
    // .then(resp => this)
    .then(resp => this.setState({gifLists: resp.data.slice(0,3)}))
  }

  componentDidMount(){
    
  }

  render(){
    return (
      <div>
        <GifSearch handleSubmit={this.handleSubmit} value={this.state.type} handleChange={this.handleChange}/>
        <GifList gifLists={this.state.gifLists}/>
      </div>
    )
  }
}
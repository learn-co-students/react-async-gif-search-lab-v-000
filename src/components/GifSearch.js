import React from 'react';

class GifSearch extends React.Component {
    state = {
        query: ''
      }
      handleChange(e){
          this.setState({
              query: e.target.value
          })
        console.log(this.state.query);
        
      }

      handleSubmit(e){
        e.preventDefault()
        this.props.gifSearch(this.state.query)
        
      }

      

    render() {
        return (
            <div>
                 <form onSubmit={this.handleSubmit.bind(this)}>
                    <input onChange={this.handleChange.bind(this)} type="text"/>
                    <input type="submit"/>
                </form>
            </div>
            
        );
    }
}

export default GifSearch;
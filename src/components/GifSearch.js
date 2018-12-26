
export default class GifSearch extends Component {
    render (){
        return (
            <form onSubmit={this.props.submitFn} >
                Search for Gif's here<input type="text" name="query" value={this.state.query} />
                
            </form>
        )
    }
}
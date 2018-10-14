import 'react', {Component} from 'react'
import '../containers/GifListContainer'

export default class GifList extends Component {
    constructor(props){
        super(props)
        this.state ={
            images: props.images
        }
    }
    render(){
        return(
            <div>
                {this.state.images.map(<ul>image)}
            </div>
        )
    }
}
import React,{Component} from 'react'

class Welcome extends Component{
constructor(){
    super()
    this.state={
        message:'welcome to web page '
    }
}
changeMessage(){
    this.setState({
        message:'Thank you for watching '
    })
}

render(){
    return(
        <div>
             <h1>{this.state.message}</h1>
             <button onClick={() => this.changeMessage()}>Clickme</button>
        </div>
    )
}

}
export default Welcome
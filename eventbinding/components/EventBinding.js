import React, { Component } from 'react'

 class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message : 'Hello'
      }
      
    }
    clickHandler()
    {
        this.setState({
            message:'Good bye'
        })
        
        console.log(this)

    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler.bind(this)}>Click</button>
      </div>
    )
  }
}

export default EventBinding

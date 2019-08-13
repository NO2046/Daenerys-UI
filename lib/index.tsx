import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import Icon from './icon'

class App extends React.Component{
  render(){
    return (
      <div>
        <Icon name="smile"/>
        <Icon name="cake"/>
      </div>
    )
  }
}
export { Button }
ReactDOM.render(<App />, document.getElementById('root'))
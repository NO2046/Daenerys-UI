import React from 'react'
import ReactDOM from 'react-dom'
import Button from './button'
import Icon from './icon'



const fn: React.MouseEventHandler = (e) => {
  console.log((e.target as HTMLDivElement).style);
}

class App extends React.Component{
  render(){
    return (
      <div>
        <Icon name="smile" onClick={fn}/>
        <Icon name="cake"/>
      </div>
    )
  }
}
export { Button }
ReactDOM.render(<App />, document.getElementById('root'))
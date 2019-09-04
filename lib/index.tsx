import React from 'react'
import ReactDOM from 'react-dom'
import Icon from './components/icon/icon'
class App extends React.Component{
  render(){
    return (
      <div>
        <Icon name="smile" className="xxx yyy"/>
        <Icon name="cake"/>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
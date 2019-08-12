import React from 'react'
import ReactDOM from 'react-dom'
import { Routes } from './Routes/Routes'

const title = "New York Times - Giftano"
class App extends React.Component {
  render() {
    return (
      <div>
        <div className="col-lg-6 offset-md-3">
          <h1 style={{ fontWeight: 'bold', textAlign: 'center', padding: '20px' }}>{title}</h1>
        </div>
        <Routes />
      </div>
    )
  }
}

ReactDOM.render(<App />, app)
module.hot.accept();
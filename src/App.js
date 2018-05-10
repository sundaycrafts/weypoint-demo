import React, {Component, Fragment} from 'react'
import Waypoint from 'react-waypoint'

const Content = ({innerRef}) => (
  <div
    ref={innerRef}
    style={{
      backgroundColor: 'grey',
      border: 'solid 1px',
      height: '500px',
      width: '50%',
    }}
  >Contents</div>
)

const Dialog = ({msg, i}) => (
  <div style={{
    position: 'fixed',
    top: `${20 * i + 1}px`,
    right: '10px',
  }}>{msg}</div>
)

const Spacer = () => (
  <div style={{
    background: 'linear-gradient(#e66465, #9198e5)',
    height: '100vh',
  }} />
)

class App extends Component {
  state = {messages: {
    a: '',
    b: '',
    c: '',
    d: '',
  }}

  _setMessage(msg, key) {
    this.setState(({messages}) => ({messages: {...messages, [key]: msg}}));
  }

  render () {
    const contents = ['a', 'b', 'c', 'd']

    return (
      <div style={{overflowX: 'hidden'}}>
        {contents.map((el, i) => (
          <Fragment key={el}>
            <Dialog msg={this.state.messages[el]} i={i} />

            <Spacer />

            <Waypoint
              onEnter={this._setMessage.bind(this, 'Waypoint entered', el)}
              onLeave={this._setMessage.bind(this, 'Waypoint left', el)}
            >
              <Content />
            </Waypoint>

            <Spacer />
          </Fragment>
        ))}
      </div>
    )
  }
}

export default App;

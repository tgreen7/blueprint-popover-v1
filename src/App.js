import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { Dialog, Button, Intent, Popover } from '@blueprintjs/core'

class DialogTest extends React.Component {
  state = {
    isOpen: true
  }

  toggleDialog = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })

  render() {
    return (
      <React.Fragment>
        <Button text="Toggle Dialog" onClick={this.toggleDialog} />
        <Dialog
          icon="inbox"
          isOpen={this.state.isOpen}
          onClose={this.toggleDialog}
          title="Dialog header"
        >
          <div className="pt-dialog-body">
            <Popover>
              <Button intent={Intent.PRIMARY}>Popover target</Button>
              <div>
                <h5>Popover title</h5>
                <p>...</p>
                <Button className="pt-popover-dismiss">Dismiss</Button>
              </div>
            </Popover>
          </div>
          <div className="pt-dialog-footer">
            <div className="pt-dialog-footer-actions">
              <Button text="Secondary" />
              <Button
                intent={Intent.PRIMARY}
                onClick={this.toggleDialog}
                text="Primary"
              />
            </div>
          </div>
        </Dialog>
      </React.Fragment>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <DialogTest />
      </div>
    )
  }
}

export default App

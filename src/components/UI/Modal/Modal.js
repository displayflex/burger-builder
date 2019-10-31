import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'

import classes from './Modal.module.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  render() {
    return (
      <Aux>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <CSSTransition
          in={this.props.show}
          timeout={{
            enter: 600,
            exit: 400,
          }}
          mountOnEnter
          unmountOnExit
          classNames={{
            enterActive: classes.ModalOpen,
            exitActive: classes.ModalClosed,
          }}
        >
          <div className={classes.Modal}>{this.props.children}</div>
        </CSSTransition>
      </Aux>
    )
  }
}

export default Modal

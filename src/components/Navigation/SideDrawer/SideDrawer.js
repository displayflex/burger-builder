import React from 'react'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../../UI/Backdrop/Backdrop'

import classes from './SideDrawer.module.css'

const SideDrawer = props => {
  let attachedClasses = [classes.SideDrawer, classes.Close]

  if (props.open) {
    attachedClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(` `)} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
      </div>
    </Aux>
  )
}

export default SideDrawer

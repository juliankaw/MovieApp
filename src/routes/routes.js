/* eslint-disable no-unused-vars */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from 'pages/Home/Home'
import SingleMovie from 'pages/SingleMovie/SingleMovie'
import Error from 'pages/Error/Error'

const Routes = () => {
  return (
    <Switch>
      <Route component={() => <Home />} exact path='/' />
      <Route component={() => <SingleMovie />} exact path='/movie/:id' />
      <Route component={() => <Error />} path='*' />
    </Switch>
  )
}

export default Routes

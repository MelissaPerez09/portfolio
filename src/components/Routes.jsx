import React, { useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header/Header'
import Intro from './Intro/Intro'
import About from './About/About'
import Experience from './Experience/Experience'
import Projects from './Projects/Projects'

const Routes = () => {

  return (
    <Switch>
      <Route path="/">
        <Header />
        <Intro />
        <About />
        <Experience />
        <Projects />
      </Route>
    </Switch>
  )
}

export default Routes
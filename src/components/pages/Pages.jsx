import React from "react"
import Header from "../common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "../home/Home"
import Footer from "../common/footer/Footer"
import ApplicationCreate from "../home/ApplicationCreate"


const Pages = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/applications' component={ApplicationCreate} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default Pages

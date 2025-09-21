import React,{useEffect, lazy, Suspense, useState} from 'react'
import { BrowserRouter, Switch, Route , Router, Redirect } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import {createBrowserHistory} from 'history'
import Header from "./components/Header"
import ProgressBar from "./components/Progress"

const LazyMarketingApp = lazy( () =>  import("./components/MarketingApp"))
const LazyAuthApp = lazy( () =>  import("./components/AuthApp"))
const LazyDashboardApp = lazy( () =>  import("./components/DashboardApp"))

const generateClassName = createGenerateClassName({
  productionPrefix: 'co'
})


const history = createBrowserHistory()

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(()=>{
    if(isSignedIn){
      history.push('/dashboard')
    }
  },[isSignedIn])

  return (
    <Router history={history} >
      <>
        <StylesProvider generateClassName={generateClassName}>
            <Header isSignedIn={isSignedIn}  onSignOut={()=>{
                    setIsSignedIn(false)
                  }}/>
            <Suspense fallback={<ProgressBar/>}>
              <Switch>
                <Route path={"/auth"} >
                  <LazyAuthApp onSignIn={()=>{
                    setIsSignedIn(true)
                  }}/>
                </Route>

                 <Route path={"/dashboard"} >
                 {isSignedIn? <LazyDashboardApp />:<Redirect to={'/'}/>}
                </Route>
               
                <Route path={"/"} >
                  <LazyMarketingApp />
                </Route>
              </Switch>
            </Suspense>
        </StylesProvider>
      </>
    </Router>
  )
}

export default App
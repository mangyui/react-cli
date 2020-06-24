import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'

import LoginView from '@/views/Login'
import HomeView from './views/Home'

class DefaultLayout extends React.Component {
  render () {
    return (
      <div>默认</div>
    )
  }
}

function App() {
  return (
    <HashRouter>
        <Switch>
            <Route path='/' exact render={() => <Redirect to='/home' />} />
            <Route path='/home' component={HomeView} />
            <Route path='/login' component={LoginView} />
            <Route component={DefaultLayout} />
        </Switch>
    </HashRouter>
  );
}

export default App;

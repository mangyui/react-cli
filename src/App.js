import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import routes from '@/router'
import { connect } from 'react-redux'
import '@/styles/base.less'
import '@/styles/app.less'

const DefaultLayout = () => (
  <div>默1认</div>
)

function App(props) {
  let { rootState, user } = props
  return (
    <div>
      <p id="rootStateBox">{rootState}</p>
      <HashRouter>
          <Switch>
              <Route path='/' exact render={() => <Redirect to='/home' />} />
              {routes.map(item => (
                  <Route
                      key={item.path}
                      path={item.path}
                      exact={item.exact}
                      // react路由守卫可以在这里做
                      render={props => user.id ? (<item.component {...props} />) :
                          <Redirect to='/404' {...props} /> }>
                  </Route>
              ))}
              <Route component={DefaultLayout} />
          </Switch>
      </HashRouter>
    </div>
  );
}

const stateToProp = state => ({
  rootState: state.rootState,
  user: state.user
})


export default connect(
  stateToProp,
)(App);

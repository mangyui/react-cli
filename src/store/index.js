import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer,
  // （可省略）Redux DevTools是Chrome浏览器中的一款调试插件，它可以用于调试redux中的状态更改，我们可以清晰的看到当前store仓库中的state是怎么样的
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import StatsPage from './pages/StatsPage'
import './App.scss'

const App = () => (
  <Router>
    <Switch>
      <Route path="/stats" component={ StatsPage } />
      <Route path="/" component={ MainPage } />
    </Switch>
  </Router>
)

export default App
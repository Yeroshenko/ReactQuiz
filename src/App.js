import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { Auth, Quiz, QuizCreator, QuizList} from './containers'
import Layout from './hoc/Layout/Layout'


const App = () => {
  return (
    <Layout>
        <Switch>
            <Route path = '/auth' component = {Auth} />
            <Route path = '/quiz-creator' component = {QuizCreator} />
            <Route path = '/quiz/:id' component = {Quiz} />
            <Route path = '/' component = {QuizList} />
        </Switch>
    </Layout>
  )
}

export default App;

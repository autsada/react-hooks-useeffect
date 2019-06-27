import React from 'react'
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'

import Todos from './Todos'
import Blog from './Blog'

const Div = styled.div`
  width: 60%;
  height: auto;
  margin: 4rem auto;
  font-size: 1.5rem;

  p {
    font-size: 1rem;
    text-decoration: none;
  }
`

function App() {
  return (
    <Div>
      <BrowserRouter>
        <Route>
          <div>
            <Link to='/'>
              <p>TODOS</p>
            </Link>
            <Link to='/blog'>
              <p>BLOG</p>
            </Link>
          </div>
          <Switch>
            <Route exact path='/' component={Todos} />
            <Route path='/blog' component={Blog} />
          </Switch>
        </Route>
      </BrowserRouter>
    </Div>
  )
}

export default App

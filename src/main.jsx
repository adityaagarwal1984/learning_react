import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import {App} from './App.jsx'
//import {Greeting} from './App.jsx'
//import { Card } from './netflixcard.jsx'
// import {Eventclick} from './events'
// import { Increment } from './increment'
// import {Toggle} from './toogle.jsx'
// import InsaneTodo from './todo.jsx'
import {TodoApp} from './todoapp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Card />  */}
    {/* <Eventclick/> */}
    {/* <Increment /> */}
    {/* <Toggle/> */}
    {/* <InsaneTodo /> */}
    <TodoApp />
  </StrictMode>,
)

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Layout from './Layout'
import User from './User'
import Error from './Error'
export default function App() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path='/' Component = {() => <About name = "About"/>}/>
        <Route path='Contact'  Component = {() => <Contact name = "Contact"/>}/>
        <Route path='user/:firstName' element = {<User />}/>
        <Route path='*' element = {<Error />}/>
      </Routes>
    </div>
  )
}

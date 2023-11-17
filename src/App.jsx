import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import Register from './sample/Register';

const App = () => {
  const value = useSelector((state) => {
    return state.value;
  })

  const loading = useSelector((state) => {
    return state.loading;
  })
  const dispatch = useDispatch()

  return (
    <>
      <Register />
    </>
  )
}

export default App;
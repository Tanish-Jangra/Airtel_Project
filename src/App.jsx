import React, { useState } from 'react';
import Sidebar from './layout/Sidebar/Sidebar.jsx';
import Content from './layout/Content/Content.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App

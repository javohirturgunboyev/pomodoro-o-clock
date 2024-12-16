import React from 'react';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Pomodoro from './pages/Pomodoro';
import ShortBreak from './pages/ShortBreak';
import LongBreak from './pages/LongBreak';

function App() {

  return (
    <div className=' bg-red-400'>
      <header className='bg-pink-400 shadow-2xl p-8 flex justify-between text-white text-2xl'>
       <Link to='/'>Pomodoro</Link>
       <Link to='/short-break'>short break</Link>
       <Link to='/long-break'>long break</Link>
      </header>
      <Routes>
      
        <Route path="/" element={<Pomodoro />} index />
        
        
        <Route path="/short-break" element={<ShortBreak />} />
        
       
        <Route path="/long-break" element={<LongBreak />} />
      </Routes>
    </div>
  );
}

export default App;

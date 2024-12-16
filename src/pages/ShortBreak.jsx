import React, { useEffect, useRef, useState } from 'react';

function ShortBreak() {
  const [timer, setTimer] = useState("00:00:00");
  const [isPaused, setIsPaused] = useState(false);
  const Ref = useRef();

  function getTimeRemaining(e) {
    const total = Date.parse(e) - Date.parse(new Date());
    const hour = Math.floor((total / (1000 * 60 * 60)) % 24);
    const seconds = Math.floor((total / 1000) % 60);
    const minute = Math.floor((total / 1000 / 60) % 60);

    return { total, hour, minute, seconds };
  }

  function startTimer(e) {
    let { total, hour, minute, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      setTimer(
        (hour > 9 ? hour : '0' + hour) + ':' +
        (minute > 9 ? minute : '0' + minute) + ':' +
        (seconds > 9 ? seconds : '0' + seconds)
      );
    } else {
      clearInterval(Ref.current);
    }
  }

  function clearTimer(e) {
    setTimer("00:05:00");
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      if (!isPaused) {
        startTimer(e);
      }
    }, 1000);
    Ref.current = id;
  }

  function getDeadTime() {
    let deadline = new Date();
    deadline.setMinutes(deadline.getMinutes() + 5);
    return deadline;
  }

  function Reset() {
    clearTimer(getDeadTime());
    setIsPaused(false); 
  }

  function Pause() {
    if (isPaused) {
      setIsPaused(false);
      clearTimer(getDeadTime()); 
    } else {
      setIsPaused(true); 
    }
  }

  useEffect(() => {
    setTimer("00:05:00");
  }, []);

  return (
    <div className='p-[375px] bg-blue-400'>
      <h3 className='text-white text-4xl ml-[425px]'>{timer}</h3>
      <div className='flex justify-between gap-6 mx-auto'>
      <button onClick={Reset} className='btn btn-primary   mt-10 mx-auto '>Start Timer</button>
      <button onClick={Pause} className='btn btn-secondary mt-10 mx-auto '>
        {isPaused ? "Resume" : "Pause"}
      </button>
      </div>
    </div>
  );
}

export default ShortBreak;

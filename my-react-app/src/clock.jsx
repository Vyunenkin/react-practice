import { useState, useEffect } from 'react'

export default function Clock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <p>Текущая дата: {date.toLocaleDateString()}</p>
      <p>Текущее время: {date.toLocaleTimeString()}</p>
      {date.getMinutes() % 5 == 0 && <p>Время делится на 5</p>}    
    </div>
  )
}

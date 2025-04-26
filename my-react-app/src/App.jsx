import { useEffect, useState } from 'react'
import Greeting from './greeting.jsx'
import Clock from './clock.jsx'
import Header from './header.jsx'

export default function Container() {
  const getRandomName = () => {
    const randomNames = ['Иван', 'Дмитрий', 'Алексей', 'Андрей', 'Владимир', 'Мария', 'Вероника', 'Екатерина', 'Анастасия', 'Валерия'];
    const randomIndex = Math.floor(Math.random() * randomNames.length);
    return randomNames[randomIndex];
  }
  
  const[name, setName] = useState(getRandomName());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setName(getRandomName());
    }, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="container">
      <Header/>
      <Greeting name={name}/>
      <Clock/>
    </div>
  )
}

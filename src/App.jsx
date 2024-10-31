import { useState } from 'react'
import './App.css';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [user, setUser] = useState({
    firstName: 'Sara',
    lastName: 'Searson',
    hasPets: true,
    age: 27
  })

  const handleDarkMode = () => {
    //TODO:
    console.log('Dark Mode!')
  }

  const handleLightMode = () => {
    //TODO:
    console.log('Light Mode!')
  }

  console.log('Our isDarkMode state value is: ', isDarkMode)
  console.log(user)
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <h1>Hello world!</h1>
      <p>Hello, my name is {user.firstName} {user.lastName}, I am {user.age} years old, and I {user.hasPets ? 'have a pet' : 'do not have any pets'}.</p>
    </div>
  );
};

export default App;

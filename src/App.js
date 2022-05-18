// import logo from './logo.svg';
// import './App.css';
import styles from './app.module.css'
// import bettyPic from './Betty_White.jpeg'
import {useState} from 'react'
import Fruits from './components/fruits'
import DogInABox from './components/dogInABox'
import TabularView from './components/tabularView'
import SecretView from './components/SecretView'

function App() {

  const betty = {
    name: 'Betty White',
    job: 'Actress',
    life: 'January 17, 1922 – December 31, 2021',
    imgFile: '/Betty_White.jpeg',
    quote: 'My mother always used to say, “The older you get, the better you get. Unless you’re a banana.”'
  }
  const [counter, setCounter] = useState(0)
  const [counterDown, setCounterDown] = useState(100)
  const [outputText, setOutputText] = useState()
  const [toogle, setToogle] = useState(true)

  const onOff = () => {
    setToogle(!toogle)
  }
  const dontSubmit = (event) => {
    console.log(event);
    if (event.key !== "Enter") {
      event.preventDefault()
  }
}
  const getValue = (event) => {
    setOutputText(event.target.value)
  }

  const increase = () => {
    if (counter === 5) {
      setCounter(counter +2)
  } else {
      setCounter(counter + 1)
  }
  }
  const decrese = () => {
    if (counterDown === 0) {
      setCounterDown(0)
  } else {
      setCounterDown(counterDown - 1)
  }
  }
  return (
    <div className={styles.app}>
      <button onClick={() => alert('never use alert!')}></button>
     <h1 onClick={increase}> {counter}</h1>
     <h1 onClick={decrese}> {counterDown}</h1>
      <img src={betty.imgFile} alt="BettyW" height="300" width="450"></img>
      <h1>{betty.name}</h1>
      <h3>{betty.job}</h3>
      <h3>{betty.life}</h3>
      <h3>{betty.quote}</h3>
      <input onChange={getValue} type="text"></input>
      <p>{outputText}</p>
      <form onKeyUp={dontSubmit}>
        <input type="text"></input>
        <button onClick={e => e.preventDefault()}>Submit</button>
      </form>
      <DogInABox/>
      <Fruits/>
      <TabularView/>
      <SecretView/>
      <button onClick={onOff}>{toogle ? 'on' : 'off'}</button>
    </div>
  );
}

export default App;

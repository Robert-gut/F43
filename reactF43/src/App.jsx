import './App.css'
import {Element1} from './components/Element1/Element1'
import Element2 from './components/Element2/Element2'
import Element3 from './components/Element3/Element3'
import SearchInput from './components/SearchInput/SearchInput'
import SuperButton from './components/SuperButton/SuperButton'

function App() {

  return (
    <>
      <h1>React</h1>
      <h2>Elements</h2>
      <Element1/>
      <Element2/>
      <Element3/>

      <SuperButton title='OK' color='green' bg='blue'/>
      <SuperButton title='dfgsdf' color='green' bg='blue'/>
      <SuperButton title='Odfgsdfg' color='green' bg='blue'/>
      <SuperButton title='Osdfgsd' color='green' bg='blue'/>
      <SuperButton title='OK' color='green' bg='blue'/>
      <SuperButton title='OK' color='green' bg='blue'/>
      <SearchInput labelName='Search person' nameBtn='Search user' placeholder='Enter name'/>
    </>
  )
}

export default App

import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'

import ContactList from './pages/ContactList/ContactList'
import AddContact from './pages/AddContact/AddContact'
import EditContact from './pages/EditContact/EditContact'
import NotFound from './pages/NotFound/NotFound'
import Header from './components/Header/Header'
import ContactStatuss from './pages/ContactStatuss/ContactStatuss'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<ContactList/>}/>
          <Route path='/contact-statuss' element={<ContactStatuss/>}/>
          <Route path='/add-contact' element={<AddContact/>}/>
          <Route path='/edit-contact/:id' element={<EditContact/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}
export default App

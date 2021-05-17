import Container from 'react-bootstrap/Container'
import StuffPage from './components/StuffPage'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navigation from './components/Navigation'
import AddItem from './components/AddItem'
import './App.css';



function App() {

  const [stuff, setStuff] = useState([])

  useEffect(() => {
    const getItems = async () => {
      const itemsFromServer = await fetchItems()
      setStuff(itemsFromServer)
    }
    getItems()
  }, []);

  //Fetching Items
  const  fetchItems = async () => {
    const res = await fetch('http://localhost:5000/items')
    const data = await res.json()
    return data
  }
  const  fetchItem = async (id) => {
    const res = await fetch(`http://localhost:5000/items/${id}`)
    const data = await res.json()
    return data
  }

  const addItem = async (item) => {
    const res = await fetch('http://localhost:5000/items', {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(item)
    })
    const data = await res.json()

    setStuff([...stuff, data])

    alert ('Congrats!!! You just added Item')
  }

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/items/${id}`, {
      method: 'DELETE'
    })
    setStuff(stuff.filter((item) => item.id !== id))

  }
  const toggleFavourites = async (id) => {
    console.log('labas');
    const itemToToggle = await fetchItem(id)
    const updItem = {...itemToToggle, favourites: !itemToToggle.favourites}

    const res = await fetch(`http://localhost:5000/items/${id}`, {
      method:'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updItem)
    })
    const data = await res.json()
    console.log(data);
    setStuff(stuff.map((item) => item.id === id ? { ...item, favourites: data.favourites } : item))
  }

  const updateItem = async (props) => {
    const itemToUpdate = await fetchItem(props.id)
    const updItem = {...itemToUpdate, price: props.price, quantity: props.quantity}
    const res = await fetch(`http://localhost:5000/items/${props.id}`, {
      method:'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updItem)
    })
    const data = await res.json()
    setStuff(stuff.map((item) => item.id === props.id ? { ...item, quantity: data.quantity, price: data.price } : item))
  }

  return (
    <Router>
      <div>
        <Navigation />
        <Container className="App ">
          <Route path='/' exact render={(props) => (
            <>
              {stuff.length > 0 ? (<StuffPage items={stuff} favs={false} onUpdate={updateItem} onDelete={deleteItem} favourites={toggleFavourites} />) : ('No Items To Display')}
            </>
          )} />
          <Route path='/favs' exact render={(props) => (
            <>
              {stuff.length > 0 ? (<StuffPage items={stuff} favs={true} onUpdate={updateItem} onDelete={deleteItem} favourites={toggleFavourites} />) : ('No Items To Display')}
            </>
          )} />
          <Route path='/add' render={(props) => (
            <>
              <AddItem onAdd={addItem} />
            </>
          )} />
        </Container>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import './App.css';
import contacts from './contacts.json';


class App extends React.Component {

  state = {
  contacts : contacts.splice(0, 5),
}

addRandomContact = () => {
  let randomContact = contacts[Math.floor(Math.random() * contacts.length)] 
  this.setState(() => {
   return {contacts : [...this.state.contacts, randomContact]}
  })
}
sortByName = () => {
  let sortName = [...this.state.contacts].sort((a, b) => a.name.localeCompare(b.name))
  this.setState(() => {
    return {contacts: sortName}
  })
}
sortByPopularity = () => {
  let mostPopular = [...this.state.contacts].sort((a, b) => b.popularity - a.popularity)
  this.setState(() => {
    return {contacts: mostPopular}
  })
}
removeContact = (index) => {
  const deletez = [...this.state.contacts];
  deletez.splice(index, 1);
  this.setState({
    contacts: deletez,
  });
}
render() {
  return (
    <div className ="App">
      <h3>IronContacts</h3>
      <button onClick={() => this.addRandomContact()}>Add Random actor</button>
      <button onClick={() => this.sortByPopularity()} >Sort by popularity</button>
      <button onClick={() => this.sortByName()}>Sort by name</button>


      <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        { this.state.contacts.map((contact) => {

      return (
        <tr key={contact.id}>
          <td><img src={contact.pictureUrl}/></td>
          <td>{contact.name}</td>
          <td>{contact.popularity.toFixed(2)}</td>
          <button onClick={() => this.removeContact()}>Delete Fool</button>
        </tr>
      )
  }
  )}
  </tbody>
  </table>
  </div>
  );
}
}


export default App; 

 
import React, { Component } from 'react'
import './App.css';
import {CardList} from './Components/card-list/card-list'
import { Search } from './Components/SearchBar/search';

class App extends Component 
{

  constructor()
  {
    super();

    this.state = {
      monsters:[],
      enterName:""  
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response=>Response.json())
    .then(user=>this.setState({monsters:user}))
  }
  
  handleChange = (e) =>
  {
    this.setState({enterName:e.target.value})
  }

  render ()
  {
    const {monsters,enterName} = this.state;
    const filterSearch = monsters.filter(monster => monster.name.toLowerCase().includes(enterName.toLowerCase()))
    return(
    <div className="App">
      <Search
      placeholder = "enter name"
      handleChange = {this.handleChange}
      />
      <CardList monsters = {filterSearch}/>
    </div>
    )
  
  }
}
  

export default App;

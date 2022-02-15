import React, {Component} from 'react';
import './App.css';
import { CardList } from './Componets/Card-List/card-list.component';


class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: []
    }

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters : users}));

  }


  render() {
    
      return (
        <div className="App">
        <CardList name="Vilius">           
          {
            this.state.monsters.map(monster => <h3 key={monster.id}> {monster.name}</h3>)
          } 
        </CardList> 
        </div>
      );
    }
}

export default App;


const myPromise = new Promise ((reseolve, reject) =>{
  
})

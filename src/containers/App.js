import React, {Component} from 'react';
import SearchBox from '../components/SearchBox';
import './App.css';

const state = {
   
}


class App extends Component {
    constructor (){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})

    }
    render () {
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className = 'tc'>
            <h1 className = 'f1'> Pesquisar </h1>
            <SearchBox searchChange={this.onSearchChange} />
            
            </div>
        );
    }

    }
 
export default App;
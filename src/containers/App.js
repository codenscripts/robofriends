import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll';
// import { robots } from './robots';  using only for robots



class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => { 
        this.setState({searchfield: event.target.value})
        }
       
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield);
        })
        if (!robots.length){
            return <h1>No robots to show 🤦🏻</h1>
        }
        return (
            <div>
                <h1>RoboFriend</h1>
                <SearchBox  searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>    
            </div>
        )
    }
}

export default App;
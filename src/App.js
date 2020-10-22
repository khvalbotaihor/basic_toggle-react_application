import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

class App extends Component {

    state = {
        persons: [
            {name: "Max", age: 28},
            {name: "Manu", age: 29},
            {name: "Stephanie", age: 26},
        ],
        otherState: "some other value"

    }

    switchNameHandler = (newName) => {
        //console.log("Was clicked")
        // dont' do this this.state.persons[0].name = 'Maximilian'
        this.setState({
            persons: [
                {name: newName, age: 28},
                {name: "Manu", age: 29},
                {name: "Stephanie", age: 27},
            ]
        })
    }

    nameChangedHandler = (event) =>{
        this.setState({
            persons: [
                {name: "Max", age: 28},
                {name: event.target.value, age: 29},
                {name: "Stephanie", age: 27},
            ]
        })
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointor',

        }

        return (
            <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p>This is realyy working!</p>
                <button
                    style={style}
                    onClick={() => this.switchNameHandler('Maximilian!!')}
                >SwitchName</button>
                <Person
                    name={this.state.persons[0].name}
                    age={this.state.persons[0].age}/>
                <Person
                    name={this.state.persons[1].name}
                    age={this.state.persons[1].age}
                    click={this.switchNameHandler.bind(this, 'Max')}
                    changed = {this.nameChangedHandler}

                >My Hobbies are: Rating</Person>
                <Person
                    name={this.state.persons[2].name}
                    age={this.state.persons[2].age}/>
            </div>
        );
    }
}

export default App;

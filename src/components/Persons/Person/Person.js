import React, {Component, Fragment} from 'react';
import classes from './Person.css'
import Auxiliary from "../../../hoc/Auxiliary";
import withClass from '../../../hoc/withClass';

class Person extends Component {


    render() {
        const rnd = Math.random();
        console.log('[Person.js] rendering')
        /*    if(rnd > 0.7){
                throw new Error('Something went wrong')
            }*/

        return (
/*
            <WithClass classes={classes.Person}>
*/

               <Auxiliary>

                    <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                    <p>{this.props.children}</p>
                    <input type="text" onChange={this.props.changed} value={this.props.name}/>

                </Auxiliary>

/*
            </WithClass>
*/
        )
    }

}

export default withClass(Person,classes.Person);
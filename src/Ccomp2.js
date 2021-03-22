import React, { Component } from 'react'
import Menu from './Menu'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        };

        this.eve ={
            input: ""
        };

        this.increment = this.increment.bind(this);
        this.decriment = this.decriment.bind(this);
        this.reset = this.reset.bind(this);

        this.handL = this.handL.bind(this);
    }
    increment(){
        this.setState(state => ({
            count: state.count + 1
        }))
    }

    decriment(){
        this.setState(state => ({
            count: state.count - 1
        }))
    }

    reset(){
        this.setState({
            count: 0
        })
    }
    
    handL(event){
        this.setState({
            input: event.target.value
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decriment}>-</button>
                <button onClick={this.reset}>reset</button>
                <h1>Тупо кликай:{this.state.count}</h1>

                <input onChange={this.handL}></input>
                <h3>Контролируемый заголовок:{this.eve.input}</h3>

            </div>
        )
    }
}
Ccomponent.defaultProps = {name: 'Ola'}
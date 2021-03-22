import React, { Component } from 'react'
import Menu from './Menu'
import './st.css';
import Button from '@material-ui/core/Button';

export default class Ccomponent extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            input: "",
            submit: "",
            items: []
        };

        this.handL = this.handL.bind(this);
        this.handlS = this.handlS.bind(this);
    }
    
    handL(event){
        this.setState({
            input: event.target.value
        })
    }

    handlS(event){
        event.preventDefault();
        this.setState({
            submit: this.state.input,
            items: [...this.state.items, this.state.input]
        });
    }

    render() {
        return(
            <div>
                <h1 className="hello">Hello world</h1>
                <Button variant="contained" color="primary">
                Primary
                </Button>
                <Button variant="contained" color="secondary">
                Secondary
                </Button>
                <form onSubmit={this.handlS}>
                    <input value={this.state.input} onChange={this.handL}></input>
                    <button type="submit">Submit</button>
                </form>
                <h3>Контролируемый заголовок:{this.state.submit}</h3>
                <ul>
                    {this.state.items.map((item, index) =>(
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}
Ccomponent.defaultProps = {name: 'Ola'}
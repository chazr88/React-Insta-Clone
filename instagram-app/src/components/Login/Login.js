import React, { Component } from 'react'
import "./Login.css"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        } 
    }

    login = (e) => {
        localStorage.setItem('username', this.state.username)
        localStorage.setItem('password', this.state.password)
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className="Login">
                <form>
                    <input 
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Username" 
                    value={this.state.username}
                    name="username"
                    />
                    <input 
                    type="text"
                    onChange={this.changeHandler}
                    placeholder="Password" 
                    value={this.state.password}
                    name="password"
                    />
                    <button onClick={this.login}>Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login

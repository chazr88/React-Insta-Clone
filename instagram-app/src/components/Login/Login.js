import React, { Component } from 'react'

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        } 
    }

    login = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div>
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
                    <button onclick={this.props.login}>Login</button>
                </form>
                
            </div>
        )
    }
}

export default Login

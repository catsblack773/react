import React, { Component } from 'react';
import axios from 'axios';
import ProfileUser from '../components/User';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        }
    }

    render() {
        return (
            <div>
                {this.state.user ? <ProfileUser {...this.state.user}/> : null}
            </div>
        );
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
        .then(response => {
            this.setState({user: response.data});
        });
    }
}

export default User;

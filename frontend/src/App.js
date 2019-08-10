import React, {Component} from 'react';

import './App.css';
import 'antd/dist/antd.css';

import { Button, Input } from 'antd';

import handleLogin from './handleLogin';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      submitted: false
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onSubmit = () => {
    this.setState({ submitted: true });
    const { email, password } = this.state;
    if (email && password) {
        handleLogin({ email, password });
    }
  }

  render() {
    return (
      <div>
        <Input
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email}
          style={style} />
        <Input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password}
          style={style} />
        <br />
        <Button
          onClick={() => this.onSubmit()}
          type="primary"
          style={style} >
          Login
        </Button>
      </div>
    );
  }
}

const style = {
  margin: '8px'
}

export default App;

import React from 'react';

class LoginForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      userWantsSignUp: false
    }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUserWantsHome = this.handleUserWantsHome.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({username: event.target.value})
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value})
  }

  handleSubmit(event){
    //make post request to server with username and password
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.validate(this.state.username, this.state.password);
      this.setState({
        username: '',
        password: ''
      })
    }
    event.preventDefault()
  }

  handleUserWantsHome(event) {
    console.log('insidehandlerwants home');
    this.props.handleUserWantsHome();
  }

  render() {

    return (
      <div className='container'>
        <span className='loginButton'>
          <button onClick={this.handleUserWantsHome}>Home</button>
        </span>
        <div className="loginFormWrapper">
          <form onSubmit={this.handleSubmit}>
            <label>
              <h4>Username:</h4>
              <input placeholder='username' type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
            </label>
            <label><br/><br/>
              <h4>Password:</h4>
              <input placeholder='password' type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </label><br/>
            <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm;

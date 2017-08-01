import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getFriends } from './actions';
import { friendInput } from './actions';
import { bindActionCreators } from 'redux';
import Friend from './Friend';


class FriendsList extends Component {
  constructor(props) {
    super()
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getFriends();
    this.setState({input :''});
  }
  handleChange(event) {
    this.setState({input: event.target.value})
  }
  handleSubmit(event) {
    event.preventDefault();
    const arr = this.state.input.split(' ');
    this.props.friendInput({
      name: arr[0],
      age: arr[1],
      email: arr[2]
    })
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.friends.map((friend, i) => {
            return (
              <Friend name={this.props.friends[i].name} age={this.props.friends[i].age} email={this.props.friends[i].email} />
            );
          })}
        </ul>
        <form onSubmit = { this.handleSubmit }>
          <input value = {this.state.input }
           onChange = {this.handleChange}
           placeholder = 'name age email' />
          </form>
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    friends: state.friends
  };
};

function mapDispatchToProps(dispatch) {
  return {
    getFriends: bindActionCreators(getFriends, dispatch),
    friendInput: bindActionCreators(friendInput, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FriendsList);
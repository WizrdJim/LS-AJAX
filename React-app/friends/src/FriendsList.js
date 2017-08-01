import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class FriendsList extends Component {
  constructor(props) {
    super()
    this.state = {
      input: ''
    };
  }
  componentDidMount() {

  }
  onChange() {

  }
  onSubmit() {

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
        <form>
          <input />
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

export default connect(mapStateToProps)(FriendsList);
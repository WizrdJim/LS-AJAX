const friendsReducer = (friendsList = [], action) => {
  console.log(friendsList.concat(action.payload));
  switch(action.type) {
    case 'GET_FRIENDS':
    return action.payload.data
    case 'FRIEND_INPUT':
    return friendsList.concat(action.payload)
    default:
    return friendsList
  }
}

export default friendsReducer;
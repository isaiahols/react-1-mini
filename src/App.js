import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      pictureInput: 'Add a URL...',
      nameInput: 'Add a Name...',
      friendsList: [],
    }

    this.onPictureChange=this.onPictureChange.bind(this);
  }

onPictureChange(e){
  this.setState({
    pictureInput: e.target.value,
  })
}

onNameChange(e){
  console.log(e);
  
  this.setState({
    nameInput: e.target.value,
  })
}

addFriend(){
  let friendObj = { 
    picture: this.state.pictureInput, 
    name: this.state.nameInput, 
  }
  this.setState({
    friendsList: [...this.state.friendsList,friendObj],
    pictureInput: 'Add a URL...',
    nameInput: 'Add a Name...',
  })
}

clearNameInputs(){
  let checkingStuff = this.state.nameInput==='Add a Name...'?'':this.state.nameInput;
  this.setState({
    nameInput: checkingStuff,
  })
}

clearPictureInputs() {
  let checkingStuff = this.state.pictureInput === 'Add a URL...' ? '' : this.state.pictureInput;
  this.setState({
    pictureInput: checkingStuff,
  })
}

  render() {
  
    let friendsJSX = this.state.friendsList.map((friend,i)=>{
      return (
        <div key={i}>
          <img src={friend.picture} alt=""/>
          <p>{friend.name}</p>
        </div>
      )
    })

    return (
      <div>
        <label>Picture (URL):</label>
        <input onChange={this.onPictureChange} value={this.state.pictureInput} onClick={()=>this.clearPictureInputs()}/>
        
        <label>Name:</label>
        <input onChange={(e) => this.onNameChange(e)} value={this.state.nameInput} onClick={() => this.clearNameInputs()}/>
        <button onClick={()=> this.addFriend()}>Add Friend</button>
        <br/>
        <hr />
        {friendsJSX}
      </div>
    );
  }
}

export default App;


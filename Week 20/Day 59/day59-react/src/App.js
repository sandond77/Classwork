import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

// const App = () => (
//   <Wrapper>
//     <h1 className="title">Friends List</h1>
//     <FriendCard
//       name={friends[0].name}
//       image={friends[0].image}
//       occupation={friends[0].occupation}
//       location={friends[0].location}
//     />
//     <FriendCard
//       name={friends[1].name}
//       image={friends[1].image}
//       occupation={friends[1].occupation}
//       location={friends[1].location}
//     />
//     <FriendCard
//       name={friends[2].name}
//       image={friends[2].image}
//       occupation={friends[2].occupation}
//       location={friends[2].location}
//     />

//   </Wrapper>
// );

// export default App;


  // <ul className="list-group">
  //   {props.groceries.map(item => (
  //     <li className="list-group-item" key={item.id}>
  //       {item.name}
  //     </li>
  //   ))}
  // </ul>

class App extends Component{
  state = {
    friends
  };

  render(){
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
          {this.state.friends.map(friend =>(
            <FriendCard 
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
        ))} 
      </Wrapper>
    );
  }
}
  

export default App;
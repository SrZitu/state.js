//named and default import/exports
//only one default export module
//think of module as file
import React from "react";
import BookList from "./mycomponent/BookList";
import "./App.css";
const App = () => (
  <div>
    <BookList />
  </div>
);

export default App;


//import Wellcome from "./mycomponent/Wellcome";
/*import { name, age, person } from "./mycomponent/data";


const App = () => {
  return (
    <div>
      <Banner />
      <p>this is my content</p>
      <p>{name}</p>
      <p>{age}</p>
      <p>{person.name}</p>
      <p>{person.age}</p>
      <hr />
    </div>
  );
};*/
//this is another category*/

/***class base component*/

/*class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <p>this is my content</p>
        <p>{name}</p>
        <p>{age}</p>
        <p>{person.name}</p>
        <p>{person.age}</p>
        <hr />
      </div>
    );
  }
}
*/
export default App;

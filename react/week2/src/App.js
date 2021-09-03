import './App.css';
import React from "react";
import LinkFormType from "./Components/LinkFormType";
//import SearchBar from "./Components/SearchBar";
import LoadLinks from './Components/LoadLink';
import { AddLink } from './Redux/links/actions';

function App() {
  //trying to use search
//search function
// const filteredLinks = (search) => {
//   const lowerSearch = search.toLowerCase();
//   return(links.filter((link) => {
//     return ( 
//       link.url.toLowerCase().indexOf(lowerSearch) > -1
//     );
//   }))
// };

//function onSearchBarChange(search){
//  setSearch(search);
//};
  return (
<div className="App">
  <header className="App-header">
    <div className="App"></div>
    <p> Arthur Links</p>
    <LinkFormType addLink={AddLink} />
    <LoadLinks LoadLinks={LoadLinks}/>
  </header>
</div>
)
}
export default App;
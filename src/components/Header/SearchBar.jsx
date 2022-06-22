import React, { useState } from 'react';

import { Link,useLocation} from "react-router-dom";

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id: 1, name: 'Agents'},
  { id: 2, name: 'Weapons' },
  { id: 3, name: 'Maps'},

];

function SearchBar() {
  // the value of the search field 
  const [name, setName] = useState('');

  // the search result
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);

    } else {
   console.log('kimseye yararım yok')
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers !== " " && foundUsers.length > 0 ? (
          foundUsers.map((user) => {
           return( <li key={user.id} className="user">
             <Link to={user.name}>
             <span >{user.name} </span>
             
             </Link> 
              
            </li> )
            
}




)
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
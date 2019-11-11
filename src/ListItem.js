
import React, { useState } from 'react';

const ListItem = ({ item }) => {
  const [active, setActiveState] = useState(false);
  return (
   
    <li key={item.name} className="house__item">
      <a
        href="#"
        className="house__link"
        onClick={() => {
          setActiveState(!active);
        }}
      >
        Name: {item.name}
      </a>
      <ul className={'house__details' + (active ? ' house__details--active' : '')}>
        <h2 className="house__details-headline">House Details</h2>
        <li className="house__details-item">Url: {item.url}</li>
        <li className="house__details-item">Region: {item.region}</li>
        <li className="house__details-item">CoatOfArms: {item.coatOfArms}</li>
        <li className="house__details-item">Titles: {item.titles}</li> 
      </ul>
    </li>
  );
};

export default ListItem;
import React, { Component } from 'react';
import ListItem from './ListItem';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch('https://anapioficeandfire.com/api/houses')
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    var { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading..</div>;
    } else {
      return (
        <div className="house">
          <h1 className="house__headline">List of Houses from game of Thrones</h1>
          <ul className="house__list">
            {items.map((item) => (
              <ListItem item={item} key={item.name} />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
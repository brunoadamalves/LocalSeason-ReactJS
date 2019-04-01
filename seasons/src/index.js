import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // Constructor is a specially named function that is particular to the javascript
  // not specific to React.
  // In a javascript class, the constructor is the very first function 
  // that is going to be called 
  constructor(props) {
    super(props);
    
    this.state = { lat: null };
  }

  // React says we have to define render method  >:V
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position.coords.latitude),
      (err) => console.log(err)
    )

    return <div>Latitude: </div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

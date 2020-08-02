import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

//class based components borrow fuctionality into the App class
class App extends React.Component {
  //very first function that will be called any time an instance of this class is created
  // constructor(props) {
  //   // whenever you define a constructor function, you have to ceremoniously include the super function
  //   super(props);

  //   // this is the state object
  //   //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
  //   this.state = {
  //     // since the latitude will be a number later on, we initialize it as null, not an empty string
  //     latitude: null,
  //     errorMessage: '',
  //   };
  // }

  //since this is an alternate method of initializing state, we dont need to use the constructor method
  state = { latitude: null, errorMessage: '' };

  //lifecycle method used outside of the constructor
  //Best practice to keep API calls outside of constructor function
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) =>
        //here we edit the state of latitude
        this.setState({ latitude: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    //work for getting location was here, but since render gets called extremely often, it should be put outside of the render method

    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.latitude) {
      //we take a property from the state on the App component and pass it as a prop down into the SeasonDisplay
      //we can take state and pass it down as a prop
      //now the SeasonDisplay is closely linked with the App component *****
      //when setState is called, this component will rerender as well
      return <SeasonDisplay latitude={this.state.latitude} />;
    }
    return (
      <div>
        {/* defaultProps would be used if message was empty */}
        <Spinner message="Please accept location request" />
      </div>
    );
  }

  //React says we have to define render
  //The render method is only about returning JSX
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));

// RULES OF STATE
// Only usable with class Component
// 'State' is a JS object that contains data relevant to a Component
// Updating 'state' on a component causes the component to (almost) instantly rerender
//State must be initialized when a component is created
//State can only be updated using the function 'setState' !important

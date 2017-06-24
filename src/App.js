import React, { Component } from 'react';
import { connect } from 'react-redux'; //step 1 synced up to our store, listening to each change in the state that occurs.
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.store.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

//step 2. calls a function that we write called mapStateToProps(), and in mapStateToProps() we specify exactly which slice of the state we want to provide to our component. Here, we want to provide state.items, and allow our component to have access to them through a prop called items.
const mapStateToProps = (state) => {
  return { items: state.items }
};

//step 3. Then we have to say which component in our application we are providing this data to: you can see that we write connect(mapStateToProps)(App) to specify that we are connecting this state to the App component.

// Finally this entire connect() method returns a new component, it looks like the App component we wrote, but now it also receives the correct data. This is the component we wish to export
export default connect(mapStateToProps)(App);

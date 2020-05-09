import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from '../Home/Home'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Review from '../_Review/Review'



class App extends Component {
  state = { //Create an state to store all of data that user input
    feedback: {
      feeling: '',
      understanding: '',
      support: '',
      comment: '',
    },
    review: [],
  }

  componentDidMount() {
    console.log('in componentDidMount', this.props)
  };

  handleChangefor = () => {
    console.log('in handleChangefor');
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>

        </header>
        <nav>
          <HashRouter>{/* I use HashRouter to be able to move back and forth components */}
            {/*I create each link address for each component */}
            <Link to='/'>Home</Link> / {/*I have an Home component to start the app feedback */}
            <Link to='/feeling'>Feeling</Link> /
            <Link to='/understanding'>Understanding</Link> /
            <Link to='/support'>Support</Link> /
            <Link to='/comments'>Comments</Link> /
            <Link to='/review'>Review</Link>



            <Route exact path='/' component={Home} />
            <Route path='/feeling'
              render={(props) => <Feeling {...props} feeling={this.state.feedback.feeling} />}//sending data from state down component child
            />
            <Route path='/understanding'
              render={(props) => <Feeling {...props} understanding={this.state.feedback.understanding} />}
            />
            <Route path='/support'
              render={(props) => <Feeling {...props} support={this.state.feedback.support} />}
            />
            <Route path='/comments'
              render={(props) => <Feeling {...props} comment={this.state.feedback.comment} />}
            />
            <Route path='/review'
              render={(props) => <Feeling {...props} review={this.state.review} />}
            />


          </HashRouter>
        </nav>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);

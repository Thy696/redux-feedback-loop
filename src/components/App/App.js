import React from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter, Route, Link } from 'react-router-dom'

import Home from '../Home/Home'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Rev1ew from '../Rev1ew/Rev1ew'
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import Header from '../Header/Header'
import Admin from '../Admin/Admin'




class App extends React.Component {
  state = { //Create an state to store all of data that user input
    feedback: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
    },
    review: [''],
  }

  componentDidMount() {
    console.log('in componentDidMount', this.props);
    console.log('in componentDidMount getData', this.getData);
  };



  handleChangefor = (event, property) => {
    console.log('handle change for', property, event.target.value)
    this.setState({
      feedback: {
        ...this.state.feedback, //set currentPicture object is what it is
        [property]: event.target.value
      }
    })
  }
  

  render() {
    return (
      <div className="App">
        <Header />
        {/* <nav> */}
          <HashRouter>{/* I use HashRouter to be able to move back and forth components */}
            {/*I create each link address for each component */}
            {/* <Link to='/'>Home</Link>  I have an Home component to start the app feedback */}
            {/* <Link to='/feeling'>Feeling</Link> /
            <Link to='/understanding'>Understanding</Link> /
            <Link to='/support'>Support</Link> /
            <Link to='/comments'>comments</Link> /
            <Link to='/review'>Review</Link> */}



            <Route exact path='/' component={Home} />
            <Route path='/feeling'
              render={(props) => <Feeling {...props}

                feedback={this.state.feedback}
                handleChangefor={this.handleChangefor}
                dispatch={this.props.dispatch}
              />}//sending data from state down component child
            />
            <Route path='/understanding'
              render={(props) => <Understanding {...props}
                feedback={this.state.feedback}
                handleChangefor={this.handleChangefor}
                dispatch={this.props.dispatch}

              />}
            />
            <Route path='/support'
              render={(props) => <Support {...props}
                feedback={this.state.feedback}
                handleChangefor={this.handleChangefor}
                dispatch={this.props.dispatch}

              />}
            />
            <Route path='/comments'
              render={(props) => <Comments {...props}
                feedback={this.state.feedback}
                handleChangefor={this.handleChangefor}
                dispatch={this.props.dispatch}

              />}
            />
            <Route path='/review'
              render={(props) => <Rev1ew {...props}
                feedback={this.state.feedback}
                dispatch={this.props.dispatch}
                handleSubmitButton={this.handleSubmitButton}
                review={this.state.review}
                addFeedback = {this.addFeedback}
                state = {this.state}
                reduxState= {this.props.reduxState}
              />}
            />
            <Route path='/success'
              render={(props) => <SubmissionSuccess {...props}
              />}
            />
            <Route path='/admin'
              render={(props) => <Admin {...props}
                dispatch={this.props.dispatch}
                reduxState = {this.props.reduxState}
              />}//sending data from state down component child
            />


          </HashRouter>
        {/* </nav> */}

      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);

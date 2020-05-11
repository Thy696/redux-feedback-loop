import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter, Route } from 'react-router-dom'

import Home from '../Home/Home'
import Feeling from '../Feeling/Feeling'
import Understanding from '../Understanding/Understanding'
import Support from '../Support/Support'
import Comments from '../Comments/Comments'
import Rev1ew from '../Rev1ew/Rev1ew'
import SubmissionSuccess from '../SubmissionSuccess/SubmissionSuccess';
import Header from '../Header/Header'
import Admin from '../Admin/Admin'




class App extends Component {
  state = { //Create an state to store all of data that user input
    feedback: {
      feeling: '',
      understanding: '',
      support: '',
      comments: '',
    },
    feedbacks: [],
  }

  componentDidMount() {
    console.log('in componentDidMount', this.props);
    console.log('in component did mount GET:', this.getFeedback())
  };

  // Get data from database
  getFeedback = () => {
    axios({
      url: '/:id',
      method: 'GET'
    })
      .then(response => {
        console.log('back from GET:', response.data)
        this.setState({
          feedbacks: response.data // set the state obj equal the datas from database
        })
        console.log('in feedbacks', this.state.feedbacks)
      }).catch(err => {
        console.log('Error in GET:', err)
        alert('Error in get request')
      })
  }

  //Delete feedback in database by id
  deleteFeedback = (id) => { //when delete button is clicked, it will delete it's feedback row by id
    axios({
      url: `/feedback/${id}`,
      method: 'DELETE'
    })
      .then(response => {
        console.log('in DELTE request', response);
        this.getFeedback(); //refesh the DOM after delete
      }).catch(err => {
        console.log('Error in DELETE request', err)
      })
  }

  //handle change for input field
  handleChangefor = (event, property) => { //handle change for inputs
    console.log('handle change for', property, event.target.value)
    this.setState({
      feedback: {
        ...this.state.feedback,
        [property]: event.target.value
      }
    })
  }

  handleClearInput= () => {
    this.setState({
      feedback: {
        feeling: '',
        understanding: '',
        support: '',
        comments: '',
      }
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        <HashRouter>{/* I use HashRouter to be able to move back and forth components */}

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
              addFeedback={this.addFeedback}
              state={this.state}
              handleClearInput = {this.handleClearInput}
            />}
          />
          <Route path='/success'
            render={(props) => <SubmissionSuccess {...props}
            />}
          />
          <Route path='/admin'
            render={(props) => <Admin {...props}
              dispatch={this.props.dispatch}
              reduxState={this.props.reduxState}
              feedbacks={this.state.feedbacks}
              deleteFeedback={this.deleteFeedback}
            />}//sending data from state down component child
          />
        </HashRouter>
        {/* {JSON.stringify(this.props.reduxState)}
        {JSON.stringify(this.props.feedbacks)} */}


      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);

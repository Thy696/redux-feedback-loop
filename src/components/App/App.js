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



class App extends React.Component {
  state = { //Create an state to store all of data that user input
    feedback: {
      feeling: '',
      understanding: '',
      support: '',
      comment: '',
    },
    review: [''],
  }

  componentDidMount() {
    console.log('in componentDidMount', this.props);
    console.log('in componentDidMount getData', this.getData);
  };

  getData = () => {
    axios({
      url: '/api/review',
      method: 'GET',
    })
      .then((response) => {
        console.log('in GET request', response.data);
        this.setState({
          review: response.data
        })
      }).catch(err => {
        alert('Error in getting data')
        console.log('Error in GET request', err)
      })
  }

  // addFeedback = () =>{
  //   axios({
  //     url: '/',
  //     method: 'POST',
  //     data: this.state.feedback, // send the data of properties in currentPicture object

  //   })
  //     .then((response) => {
  //       console.log('in POST request');
  //       this.getData();
       
  //     }).catch(err => {
  //       alert('Error in posting data')
  //       console.log('Error in POST request', err)
  //     })
  //   }


  handleChangefor = (event, property) => {
    console.log('handle change for', property, event.target.value)
    this.setState({
      feedback: {
        ...this.state.feedback, //set currentPicture object is what it is
        [property]: event.target.value
      }
    })
  }

  // handleSubmitButton = (event) => { // called when the submit button is pressed
  //   console.log('submit clicked!');
  //     event.preventDefault();
  //     this.addFeedback();
  // }

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
            <Link to='/'>Home</Link>  {/*I have an Home component to start the app feedback */}
            {/* <Link to='/feeling'>Feeling</Link> /
            <Link to='/understanding'>Understanding</Link> /
            <Link to='/support'>Support</Link> /
            <Link to='/comments'>Comments</Link> /
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
                state = {this.state.feedback}
              />}
            />
            <Route path='/success'
              render={(props) => <SubmissionSuccess {...props}
              />}
            />


          </HashRouter>
        </nav>



      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({ reduxState });
export default connect(putReduxStateOnProps)(App);

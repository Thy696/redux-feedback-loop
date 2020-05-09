import React, { Component } from 'react';

class Understanding extends Component {
  
componentDidMount(){
    console.log('in understanding',this.props);
}
    handleNextButton = ()=>{ // condition for the input field is not been empty
        // let this.props.feeling = 
        if(this.props.understanding === ""){
            alert('This field is requied');
        }else {
                console.log('Next clicked!')
                // handle next button to moving to understanding component
                this.props.history.push('/support');
        } 
    }

    handleChangefor =() =>{
        console.log('felling input changing')
    }

    render() {
            return (
                <div>
                    <h1>How well are you understanding the content?</h1>
                    <input type="text" 
                    onChange={this.handleChangefor}
                    value = {this.props.understanding}
                    />

                    <button onClick={this.handleNextButton} >Next</button>{/*when the next button is clicked, it will switch to the support component*/}

                </div>
            )
        }
    }
    export default Understanding;
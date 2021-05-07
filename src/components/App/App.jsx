import React, { Component } from 'react';
import './App.css';
import Header from './../Header/Header.jsx'
import SearchBox from '../SearchBox/SearchBox';
import ResultsContainer from '../ResultsContainer/ResultsContainer';

const name = require('@rstacruz/startup-name-generator');

// Class based Component -> a component which is built using javascript classes
class App extends React.Component {

    state = {
        headerText:"Name Hint",
        headerExpanded:true,
        suggestedNames:[]
    }

    handleInputChange = (inputText) => {
        this.setState({
            headerExpanded:!inputText,
            suggestedNames:inputText?name(inputText):[]
        });
    };

    render(){
        return (
            <div>
                <Header headerExpanded={this.state.headerExpanded} headTitle={this.state.headerText} />
                {/* <h3>{this.state.headerText}</h3>
                <button onClick={()=>this.setState({
                    headerText:"Now change happened"
                })
                }>Click to see what happens</button> */}
                <SearchBox onInputChange={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        )
    }
}
// Functional Component -> a function which returns some HTML
// function App() {
//     return <h1>This is my functional component</h1>
// }
export default App







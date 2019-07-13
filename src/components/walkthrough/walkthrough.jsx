import React, {Component} from 'react';
// import './App.css';
import quizQuestions from './api/quizQuestions';
import Quiz from './Quiz';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answer: '',
      result: '',
      
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
  
  handleAnswerSelected(event) {
    
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
      } else {
        this.setState({
          result: true
        }); 
      }
  }

  

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answer: quizQuestions[counter].answer,
    });
  }

  componentDidMount() {
      
  
    this.setState({
      question: quizQuestions[0].question,
      answer: quizQuestions[0].answer
    });
  }

  renderQuiz() {
    return (<Quiz
      answer={this.state.answer}
      questionId={this.state.questionId}
      question={this.state.question}
      questionTotal={quizQuestions.length}
      onanswerselected={this.handleAnswerSelected}
    />);
  }

  renderResult() {
    return (
      <h2> Congratulations! You have now completed the walkthrough</h2>
    )
  }
// <img src={logo} className="App-logo" alt="logo" />
  render() {
    return (
      <div className="App">
        <div className="App-header">
          
          <h2>CTF Walkthrough</h2>
        </div>
        {this.state.result ? this.renderResult() : this.renderQuiz()}
        
      </div>
    )
  }
}
export default App;

import React from 'react';

class Main extends React.Component 
{
    constructor(props) {
        super(props)
        this.state = { 
            number1: '', 
            number2: ''
        }            
      }
      changeHandler1 = (event) => {
        this.setState({number1: event.target.value});
      }
      changeHandler2 = (event) => {
        this.setState({number2: event.target.value});
      }

      clickHandler = (event) => {
        this.setState({ total: parseInt(this.state.number1) + parseInt(this.state.number2) })
      }
      render() {
    return (
    <div className="mainpage">
            <h2> Main Page</h2>
            <h4>Number1 : {this.state.number1}</h4>
            <input type="number"  value={this.state.number1} onChange={this.changeHandler1} />
            <br/>
            <h4>Number2 : {this.state.number2}</h4>
            <input type="number"  value={this.state.number2} onChange={this.changeHandler2} />
            <br/>
            <br/>     
            <input type="submit"  value="Submit" onClick={this.clickHandler} />  
            <br/>
            <div>total : {this.state.total}</div>
    </div>
    );
}
}
export default Main;
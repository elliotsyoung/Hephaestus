import React from "react";
import './QuickCommands.css';

class myForm extends React.Component
{
  constructor(props)
  {
    super(props);

  }

  render()
  {
    return (

      <div className="quick-wrapper">
            <button onClick={this.props.buttonOneClick} type="submit" className="">~Introduction~</button>
            <button onClick={this.props.buttonTwoClick} type="submit" className="">~They doubt you're actually a computer~</button>
            <button onClick={this.props.buttonThreeClick} type="submit" className="">~Apology for typo or error~</button>
            <button onClick={this.props.buttonFourClick} type="submit" className="">~It was nice meeting you!~</button>
            <button onClick={this.props.buttonFiveClick} type="submit" className="">Fifth Macro</button>
            <br/>
            <br/>
            <button onClick={ this.props.toggleQuickCommandsListVisibility }>Toggle Help </button>
            </div>

    )
  }
}

export default myForm;

import React from "react";
import './QuickCommands.css';

class myForm extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props);
  }

  render()
  {
    return (

      <div className="quick-wrapper">
            <button onClick={this.props.buttonOneClick} type="submit" className="">First Macro</button>
            <button onClick={this.props.buttonTwoClick} type="submit" className="">Second Macro</button>
            <button onClick={this.props.buttonThreeClick} type="submit" className="">Third Macro</button>
            <button onClick={this.props.buttonFourClick} type="submit" className="">Fourth Macro</button>
            <button onClick={this.props.buttonFiveClick} type="submit" className="">Fifth Macro</button>
            <br/>
            <br/>
            <button className="toggle" onClick={ this.props.toggleQuickCommandsListVisibility }>Toggle Help </button>
            </div>

    )
  }
}

export default myForm;

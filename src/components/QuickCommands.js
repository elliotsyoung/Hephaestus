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

            <button onClick={this.props.buttonOneClick} type="submit" className="">First Macro</button>

            <button type="submit" className="">Second Macro</button>
            <button type="submit" className="">Third Macro</button>
            <button type="submit" className="">Fourth Macro</button>
            <button type="submit" className="">Fifth Macro</button>

            <br/>
            <br/>
            <button onClick={ this.props.toggleQuickCommandsListVisibility }>Toggle things</button>

      </div>

    )
  }
}

export default myForm;

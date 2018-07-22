import React from "react";
import './QuickCommandsList.css';
class myFormList extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = { show: false };
    console.log(props);
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  render()
  {
    return (
      <div className="quick-wrapper-list">
        <div className="quick-input-box">
          <p>[Button One]&nbsp; : &nbsp;</p>
          <p>Hello [NAME]! Welcome to class</p>
          </div>

      </div>
    )
  }
}

export default myFormList;

import React from "react";
import './QuickCommandsList.css';
class myFormList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    console.log(props);
  }
  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    return (<div className="quick-wrapper-list">
      <div className="quick-input-box">
        <p>[Button One]&nbsp; : &nbsp;</p>
        <p>This is test message one</p>
        </div>
      <div className="quick-input-box">
        <br/>
        <p>[Button Two]&nbsp; : &nbsp;</p>
        <p>This is test message Two</p>
        <br/>
      </div>
      <div className="quick-input-box">
        <br/>
        <p>[Button Three]&nbsp; : &nbsp;</p>
        <p>This is test message Three</p>
        <br/>
      </div>
      <div className="quick-input-box">
        <br/>
        <p>[Button Four]&nbsp; : &nbsp;</p>
        <p>This is test message Four</p>
        <br/>
      </div>
      <div className="quick-input-box">
        <br/>
        <p>[Button Five]&nbsp; : &nbsp;</p>
        <p>This is test message Five</p>
        <br/>
      </div>
    </div>)
  }
}

export default myFormList;

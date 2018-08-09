import React from "react";
import './QuickCommandsList.css';
class myFormList extends React.Component
{
  constructor(props)
  {
    super(props);
    console.log(props);
  }

  generatePreviewText()
  {
    return (
      <p>{this.props.previewText}</p>
    )
  }
  render()
  {
    return (
      <div className="quick-wrapper-list">
        {this.generatePreviewText()}

      </div>
    )
  }
}

export default myFormList;

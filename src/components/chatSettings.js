import React,
{
  Component
}
from "react";
import './chatSettings.css';

class chatSettings extends Component
{
  constructor(props)
  {
    super(props);
    console.log(this.props);
  }
  render()
  {
    return (

      <div className="chatSettings">
        <select id="pet-select">
        <option value="">--Please choose an option--</option>
        <option value="dog">Salli</option>
        <option value="cat">Kimberly</option>
        <option value="hamster">Kendra</option>
        <option value="parrot">Ivy</option>
        <option value="spider">Matthew</option>
        <option value="goldfish">Justin</option>
        <option value="goldfish">Joey</option>

        </select>

      </div>

    )
  }
}

export default chatSettings;

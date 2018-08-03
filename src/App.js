import React,
{
  Component
}
from 'react';
import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import
{
  Responsive,
  WidthProvider
}
from 'react-grid-layout';
import ChatComponent from './components/ChatComponent.js';
import QuickCommands from './components/QuickCommands.js';
import QuickCommandsList from './components/QuickCommandsList.js';
import ChatSettings from './components/chatSettings.js';
import openSocket from 'socket.io-client';
const socket = openSocket('https://fusionpaloalto.elliotsyoung.com');
const ResponsiveGridLayout = WidthProvider(Responsive);
class App extends Component
{
  constructor(props)
  {
    super(props)
    this.sendChat = this.sendChat.bind(this);
    this.handleChatInputChange = this.handleChatInputChange.bind(this);
    this.onStart = this.onStart.bind(this);
    this.onStop = this.onStop.bind(this);
    this.toggleQuickCommandsListVisibility = this.toggleQuickCommandsListVisibility.bind(this);
    this.buttonOneClick = this.buttonOneClick.bind(this);
    this.buttonTwoClick = this.buttonTwoClick.bind(this);
    this.buttonThreeClick = this.buttonThreeClick.bind(this);
    this.buttonFourClick = this.buttonFourClick.bind(this);
    this.buttonFiveClick = this.buttonFiveClick.bind(this);
    this.state = {
      messages: [
        "Hello There", "Welcome to the app!"
      ],
      inputText: "",
      activeDrags: 0,
      shouldShowQuickCommandsList: true,
    }
    // Socket Setup
    socket.emit("subscribe",
    {
      room: "pi-client"
    });
    socket.on("pi room chat message", (message) =>
    {
      const updatedMessages = this.state.messages.slice();
      updatedMessages.push(message);
      this.setState(
      {
        messages: updatedMessages
      }, () =>
      {
        var ChatBox = document.getElementById("chat-messages-box");
        ChatBox.scrollTop = ChatBox.scrollHeight;
      })
    })

  } // end of constructor

  // macro buttons
  buttonOneClick(event)
  {
    this.setState({inputText:"Hello there! My name is Brian and I'm the teaching assistant for this classroom. Elliot has programmed me to assist in our lessons together."})
  }

  buttonTwoClick(event)
  {
    this.setState({inputText:"A lot of people often wonder whether or not I'm real. Well, I am. And it's not nice for you to say I'm fake. It hurts my feelings."})
  }

  buttonThreeClick(event)
  {
    this.setState({inputText:"Sorry about the computational error, Sometimes my machine kind makes errors too!"})
  }

  buttonFourClick(event)
  {
    this.setState({inputText:"It was very nice meeting you, and I hope you enjoyed today's class. I hope to see you again!"})
  }

  buttonFiveClick(event)
  {
    this.setState({inputText:"Math is important because it teaches you how to solve problems. Honestly speaking, I don't know if you'll use most of the equations we learn in here but I do expect you to develop your sense of intuition."})
  }

// end macro buttons

  sendChat(event)
  {
    event.preventDefault();

    socket.emit("pi room chat message", this.state.inputText);
    this.setState(
    {
      inputText: ""
    })
  }
  handleChatInputChange(event)
  {
    console.log("changing input");
    console.log("text changed");
    if(event.target.value === '')
    {
      socket.emit('to room', {
      room: "pi-client",
      type: "typing",
      data: "not typing"
    });
    } else
    {
      socket.emit('to room', {
        room: "pi-client",
        type: "typing",
        data: "typing"
      });
    }

    this.setState(
    {
      [event.target.name]: event.target.value
    })
  }

  // DRAG HANDLERS
  onStart()
  {
    var aDrag = this.state.activeDrags;
    aDrag++;
    this.setState(
    {
      activeDrags: aDrag
    });
  }

  onStop()
  {
    var aDrag = this.state.activeDrags;
    aDrag--;
    this.setState(
    {
      activeDrags: aDrag
    });
  }

  shouldRenderQuickCommandsList()
  {
    if (this.state.shouldShowQuickCommandsList)
    {
      return <QuickCommandsList />
    }
    return
  }
  toggleQuickCommandsListVisibility()
  {
    //this toggles the visibility of the quick commands list
    this.state.shouldShowQuickCommandsList ?
      this.setState(
      {
        shouldShowQuickCommandsList: false
      }) :
      this.setState(
      {
        shouldShowQuickCommandsList: true
      })
  }
  render()
  {
    return (<div className="App">
      <header className="App-header">
        <h1 className="App-title">Teaching Assistant App</h1>
      </header>
      <p className="App-intro"></p>
      <ResponsiveGridLayout className="layout" draggableCancel="input,textarea">
        <div key="a" data-grid={{x: 0, y: 0, w: 7, h: 2}}>
          <ChatComponent inputText={this.state.inputText} handleChatInputChange={this.handleChatInputChange} sendChat={this.sendChat} messages={this.state.messages}/>
        </div>
        <div key="b" data-grid={{x: 15, y: 0, w: 5, h: 2.030}}>
          {this.shouldRenderQuickCommandsList()}
          <br/>
          <QuickCommands
            buttonOneClick={this.buttonOneClick}
            buttonTwoClick={this.buttonTwoClick}
            buttonThreeClick={this.buttonThreeClick}
            buttonFourClick={this.buttonFourClick}
            buttonFiveClick={this.buttonFiveClick}
            toggleQuickCommandsListVisibility={this.toggleQuickCommandsListVisibility}/>
        </div>
        <div key="c" data-grid={{x: 0, y: 20, w: 7, h: 2}}>
          <ChatSettings/>
        </div>
      </ResponsiveGridLayout>
    </div>);
  }
}

export default App;

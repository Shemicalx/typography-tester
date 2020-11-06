import React from "react";
import './App.css';
//Google Fonts API Link With Personal Key
//https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAgP9ZKkGmBu8yKCIRZXbyMKd1GNOibyWk

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, usu ea quis wisi. Pri ex justo soluta numquam, inani invidunt expetendis eu per. Te meis assueverit adversarium sea, ex illum blandit adolescens mel, ea mel graeco meliore scripserit. Nam fugit appareat ut, ad utamur senserit iudicabit vim, dico hendrerit ne vix.",
      fontSizeRange: {
        min: 12,
        max: 24,
        intervals: (24 - 12) / 5
      }
    }
  }

  handleTextAreaChange = (event) => {
    this.setState({
      text: event.target.value
    })
  };

  handleFontSizeInputChange = (event) => {
    let {min, max, intervals} = this.state.fontSizeRange;
    if(event.target.className === "SideBar__FontSizeMin"){
      min = Number(event.target.value);
      if(min > max){
        max = min;
      }
    } else {
      max = Number(event.target.value);
    }
    if(min >= max){
      intervals = 0;
    } else{
      intervals = ((max - min) / 5);
    }
    this.setState({
      fontSizeRange: { min, max, intervals}
    });
  };

  render() {
    return (
      <div className="App">
        <TestingSideBar 
          handleTextAreaChange={this.handleTextAreaChange}
          handleFontSizeInputChange={this.handleFontSizeInputChange}
          fontSizeRange={this.state.fontSizeRange}
        />
        <main className="App__Display">
          <section className="App__DisplayGrid">
            {
              [...Array(6)].map( (_ , index) => {
                return (
                  <DisplayBlock 
                    content={this.state.text} 
                    fontSize={
                      this.state.fontSizeRange.min + this.state.fontSizeRange.intervals * (index)
                    }
                  />
                )
              })
            }
          </section>
        </main>
      </div>
    );
  }
}

const DisplayBlock = (props) => {
  return (
  <div 
    className="DisplayBlock" 
    //TEMPORARY FONT SIZE TEST
    style={{'fontSize': props.fontSize}}
  >
    {props.content}
  </div>
  )
}

const TestingSideBar = (props) => {
  return (
    <div className="SideBar">
      <h1 className="SideBar__Title">
        Typography Grid Tester
      </h1>
      <textarea 
        className="SideBar__TextArea"
        rows="10"
        cols="35"
        placeholder="Write something!"
        onChange={props.handleTextAreaChange} 
      />
      {/* Change the size of the font by setting a range */}
      <div className="SideBar__FontSizeRange">
        <h3>
          Font Size Range
        </h3>
        <input
          className="SideBar__FontSizeMin" 
          min="0" 
          type="number" 
          title="Set minimum font size" 
          value={props.fontSizeRange.min}
          onChange={props.handleFontSizeInputChange}
        />
        <input 
          className="SideBar__FontSizeMax"
          // min={props.fontSizeRange.min} 
          min="0"
          type="number" 
          title="Set maximum font size" 
          value={props.fontSizeRange.max}
          onChange={props.handleFontSizeInputChange}
        />
      </div>

    </div>
  )
}

export default App;

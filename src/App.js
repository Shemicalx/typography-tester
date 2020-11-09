import React from "react";
import './App.css';
//Google Fonts API Link With Personal Key
//https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAgP9ZKkGmBu8yKCIRZXbyMKd1GNOibyWk

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, usu ea quis wisi. Pri ex justo soluta numquam, inani invidunt expetendis eu per. Te meis assueverit adversarium sea, ex illum blandit adolescens mel, ea mel graeco meliore scripserit. Nam fugit appareat ut, ad utamur senserit iudicabit vim, dico hendrerit ne vix.",
      fontProperties: {
        fontSize: {
          range: {
            min: 12,
            max: 24,
            // intervals = (max - min) / (number of grids - 1)
            intervals: (24 - 12) / 5,
            step: 1,
          }
        },
        lineHeight: {
          range: {
            min: 1.2,
            max: 1.2,
            intervals: (1.2 - 1.2) / 5,
            step: 0.05,
          }
        },
        letterSpacing: {
          range: {
            min: 0,
            max: 0,
            intervals: 0,
            step: 0.1,
          }
        },
        wordSpacing: {
          range: {
            min: 0,
            max: 0,
            intervals: 0,
            step: 0.1,
          }
        },
      }
    }
  }

  handleTextAreaChange = (event) => {
    this.setState({
      text: event.target.value
    })
  };

  handleFontPropertyChange = (propertyToUpdate, minOrMax, event) => {
    //Update min/max range properties based on minOrMax
    let properties = this.state.fontProperties;
    properties[propertyToUpdate].range[minOrMax] = Number(event.target.value);
    //Calculate new intervals and make sure max and min stay together
    let {min, max, intervals, step} = properties[propertyToUpdate].range;
    if(max < min) {
      max = min;
    }
    intervals = (max - min) / 5;
    properties[propertyToUpdate].range = {min, max, intervals, step};
    this.setState({
      fontProperties: properties,
    });
  };

  handleDisplayBlockClick = (event) => {
    //NEED TO RESET PROPERTIES TO MATCH CLICKED BLOCK
  };

  render() {

    return (
      <div className="App">
        <TestingSideBar 
          handleTextAreaChange={this.handleTextAreaChange}
          handleFontPropertyChange={this.handleFontPropertyChange}
          fontSizeRange={this.state.fontSizeRange}
          fontProperties={this.state.fontProperties}
        />
        <main className="App__Display">
          <section className="App__DisplayGrid">
            {
              [...Array(6)].map( (_ , index) => {
                return (
                  <DisplayBlock 
                    content={this.state.text} 
                    fontSize={
                      this.state.fontProperties.fontSize.range.min + this.state.fontProperties.fontSize.range.intervals * (index)
                    }
                    lineHeight={
                      this.state.fontProperties.lineHeight.range.min + this.state.fontProperties.lineHeight.range.intervals * (index)
                    }
                    letterSpacing={
                      this.state.fontProperties.letterSpacing.range.min + this.state.fontProperties.letterSpacing.range.intervals * (index)
                    }
                    wordSpacing={
                      this.state.fontProperties.wordSpacing.range.min + this.state.fontProperties.wordSpacing.range.intervals * (index)
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
    //TEMPORARY 
    style={{
      'fontSize': `${props.fontSize}px`,
      'lineHeight': `${props.lineHeight}`,
      'letterSpacing': `${props.letterSpacing}px`,
      'wordSpacing': `${props.wordSpacing}px`,
    }}
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
      {
        Object.entries(props.fontProperties).map(([propertyName, propertyObj]) => {
          return (
            <FontPropertyControls 
              property={propertyName} 
              range={propertyObj.range}
              fontPropertyChangeHandler={props.handleFontPropertyChange}
            />      
          )    
        })
      }
    </div>
  )
}

const FontPropertyControls = (props) => {

  const property = props.property;
  const propertyNameCapitalized = property.replace(/[a-z]{1}/i, char => char.toUpperCase());
  const {min, max, step} = props.range;

  return (
    <div className={`SideBar__${propertyNameCapitalized}Range`}>
      <label className="SideBar__InputsLabel">
        {propertyNameCapitalized.replace(/([a-z])([A-Z])/g, '$1 $2')}
        <span>{property === 'lineHeight' ? 'relative' : 'pixels' }</span>
      </label>
      <div className="SideBar__Inputs">
        <input
          className={`SideBar__${propertyNameCapitalized}Min`}
          min="0" 
          type="number" 
          step={step}
          title={`Set minimum ${property}`}
          value={min}
          onChange={(e)=>props.fontPropertyChangeHandler(property, 'min' , e)}
        />
        <input 
          className={`SideBar__${propertyNameCapitalized}Max`}
          min="0"
          type="number" 
          step={step}
          title={`Set maximum ${property}`} 
          value={max}
          onChange={(e)=>props.fontPropertyChangeHandler(property, 'max', e)}
        />
      </div>
    </div>
  )
}

export default App;

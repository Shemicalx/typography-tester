import React from "react";
import './App.css';
const WebFont = require("webfontloader");

/* FIGURE OUT * /
WebFont.load({
  google: {
    families: ['Lobster']
  }
});
/* */
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: "Lorem ipsum dolor sit amet, usu ea quis wisi. Pri ex justo soluta numquam, inani invidunt expetendis eu per. Te meis assueverit adversarium sea, ex illum blandit adolescens mel, ea mel graeco meliore scripserit. Nam fugit appareat ut, ad utamur senserit iudicabit vim, dico hendrerit ne vix.",
      fontProperties: {
        /* To add new properties, add them here with a full range object -
        propertyName: {
          range: {
            min: default minimum value in numbers,
            max: default maximum value in numbers,
            intervals: (max - min) / (number of grids - 1),
            step: stepping distance for the number input,
          }
        }, */
        fontSize: {
          range: {
            min: 12,
            max: 17,
            intervals: (17 - 12) / 5,
            step: 1,
          }
        },
        lineHeight: {
          range: {
            min: 1.2,
            max: 1.2,
            intervals: (1.2 - 1.2) / 5,
            step: 0.1,
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
      },
      showBlockMenu: [false,''],
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

  handleDisplayBlockClick = (styleProperties , event) => {
    let fontPropertiesUpdate = this.state.fontProperties;
    Object.entries(styleProperties).forEach(([propertyToUpdate, value]) => {
      fontPropertiesUpdate[propertyToUpdate].range.min = Number(parseFloat(value).toFixed(2));
      fontPropertiesUpdate[propertyToUpdate].range.max = Number(parseFloat(value).toFixed(2));
      fontPropertiesUpdate[propertyToUpdate].range.intervals = 0;
    });
    this.setState(fontPropertiesUpdate);
  };

  handleDisplayBlockHover = (blockNumber, show, event) => {
    this.setState({showBlockMenu: [show, blockNumber]});
    console.log(this.state.showBlockMenu);
  }

  render() {

    return (
      <main className="App">
        <TestingSideBar 
          handleTextAreaChange={this.handleTextAreaChange}
          handleFontPropertyChange={this.handleFontPropertyChange}
          fontSizeRange={this.state.fontSizeRange}
          fontProperties={this.state.fontProperties}
        />
        <div className="App__Display">
          <section className="App__DisplayGrid">
            {
              [...Array(6)].map( (_ , index) => {
                //Function to calculate the value of each blocks property based on interval
                const calculateBlockProperty = (property) => {
                  const min = this.state.fontProperties[property].range.min;
                  const intervalsToAdd = this.state.fontProperties[property].range.intervals * (index);
                  return min + intervalsToAdd;
                };
                //Create a style object to implement each interval based value onto each block
                const styleProperties = {};
                Object.keys(this.state.fontProperties).forEach((property) => {
                  styleProperties[property] = calculateBlockProperty(property)
                });

                return (
                  <DisplayBlock 
                    blockNumber={index}
                    content={this.state.text} 
                    handleClick={this.handleDisplayBlockClick}
                    handleHover={this.handleDisplayBlockHover}
                    styleProperties={styleProperties}
                    showBlockMenu={this.state.showBlockMenu}
                  />
                )
              })
            }
          </section>
        </div>
      </main>
    );
  }
}

const DisplayBlock = (props) => {
  return (
  <div 
    className="DisplayBlock" 
    onClick={(e)=>props.handleClick(props.styleProperties, e)}
    onMouseEnter={(e)=>props.handleHover(props.blockNumber, true, e)}
    onMouseLeave={(e)=>props.handleHover(props.blockNumber, false, e)}
  >
    <div 
      className="DisplayBlock__HoverMenu" 
      style={ props.showBlockMenu[0] && props.blockNumber === props.showBlockMenu[1] ? {"left": "0%"} : {"left": "-50%"}}
    >
      <button>
        Info
      </button>
      <button>
        placeholder
      </button>
      <button>
        Keep
      </button>
    </div>
    <p style={props.styleProperties}>{props.content}</p>
  </div>
  )
}

const TestingSideBar = (props) => {

  return (
    <nav className="SideBar">
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
      <div className="SideBar__MinMaxTitles">
        <span>
          Min
        </span>
        <span>
          Max
        </span>
      </div>
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
    </nav>
  )
}

const FontPropertyControls = (props) => {

  const property = props.property;
  const propertyNameCapitalized = property.replace(/[a-z]{1}/i, char => char.toUpperCase());
  const {min, max, step} = props.range;

  return (
    <div className={`SideBar__${propertyNameCapitalized}Range SideBar__RangeControls`}>
      <label className="SideBar__InputsLabel">
        {propertyNameCapitalized.replace(/([a-z])([A-Z])/g, '$1 $2')}
        <span>{property === 'lineHeight' ? ' relative' : ' pixels' }</span>
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

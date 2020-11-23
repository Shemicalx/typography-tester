import React from "react";
import './App.css';
import TestingSideBar from "./Components/TestingSideBar";
import DisplayBlock from "./Components/DisplayBlock";
require('dotenv').config();
const WebFont = require("webfontloader");

//Need to figure out how to hide the key(.env file gave me some trouble)
// const googleFontsApiRequest = `https://www.googleapis.com/webfonts/v1/webfonts?key=`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque dolor augue, faucibus ac sem vel, consequat bibendum nisi. Curabitur luctus lectus in efficitur blandit. Donec tempus diam ut urna finibus volutpat. Sed eleifend finibus arcu vel facilisis. Cras a mollis nulla. Quisque mattis porta tincidunt. Aliquam non ipsum sapien. Aenean purus arcu, condimentum at suscipit ac, pellentesque at erat. Morbi turpis mauris, hendrerit sit amet mi at, tempor scelerisque purus. Aliquam interdum nisl quis nulla finibus, id lobortis mi blandit. Aliquam tempor tellus id orci aliquet sollicitudin. Nulla at est quis massa lobortis elementum. Donec quam orci, maximus non velit nec, efficitur tincidunt magna. Ut ac lobortis augue, a elementum quam. Duis finibus tortor leo, blandit gravida erat maximus ut.

      Nullam placerat a lectus a laoreet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi consectetur ullamcorper nibh nec faucibus. Sed elementum justo a dolor tristique tristique eu in ligula. Phasellus tempor hendrerit augue id suscipit. Vivamus bibendum vehicula pellentesque. Morbi dignissim enim facilisis dolor blandit, nec molestie turpis eleifend. Suspendisse varius sed ipsum in suscipit. Vivamus accumsan erat ut nisi pellentesque, eu iaculis arcu tristique. Etiam luctus, eros bibendum mattis accumsan, metus tortor sollicitudin tortor, non auctor quam nisi at odio.
      
      Donec ac ipsum dui. Aenean dictum iaculis tortor at aliquam. Donec dolor odio, mattis non congue at, euismod et enim. Integer rhoncus consequat turpis vitae egestas. Sed auctor vehicula quam ut gravida. Duis nisl libero, tempor quis est ut, posuere vestibulum tortor. Phasellus id dapibus elit. Sed pharetra posuere suscipit. Quisque in ipsum non diam tempus laoreet sed sit amet nulla. Praesent ac leo eget diam egestas pellentesque. Mauris feugiat ligula eget sapien bibendum condimentum. Mauris quis nisi enim. Donec feugiat, elit eget efficitur vulputate, sapien massa pretium felis, eget ullamcorper eros sapien nec libero. Quisque vulputate lorem eget erat consectetur eleifend. Aenean odio velit, luctus eleifend maximus ac, mollis a odio. Nam eu est dignissim, maximus sem nec, facilisis dolor.`,
      fontFamilies: [],
      fontRangeProperties: {
        fontSize: {
          range: {
            min: 12,
            max: 18,
            intervals: (18 - 12) / 5,
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
      fontToggleProperties: {
        fontStyle: {
          valueToToggle: "italic",
          icon: "I",
          toggle: false,
        },
        //need to think of a system that allows multiple toggles for the same property.
        textAlign: {
          valueToToggle: "center",
          icon: "center",
          toggle: false,
        },
        fontWeight: {
          valueToToggle: "bold",
          icon: "B",
          toggle: false,
        },
      },
      showBlockMenu: [false,''],
      eachBlocksFont: [
        "-select font-",
        "-select font-",
        "-select font-",
        "-select font-",
        "-select font-",
        "-select font-"
      ],
      showSideBar: true,
    }
  }

  fetchGoogleFontsFamilies = () => {
    //Very slow load atm. Need to figure out a better way.
    /* * /
    fetch(googleFontsApiRequest)
    .then(response => response.json())
    .then(data => {
      const fontFamiliesFetched = data.items.map(datum => datum.family)
      this.setState({
        fontFamilies: fontFamiliesFetched
      });
      WebFont.load({
        google: {
          families: fontFamiliesFetched
        }
      });
    });
    /* */

    //TEMP SOLUTION
    const fontFamiliesFetched = ["-select font-","ABeeZee", "Abel", "Abhaya Libre", "Abril Fatface", "Aclonica", "Acme", "Actor", "Adamina", "Advent Pro", "Aguafina Script", "Akronim", "Aladin", "Alata", "Alatsi", "Aldrich", "Alef", "Alegreya", "Alegreya SC", "Alegreya Sans", "Alegreya Sans SC", "Aleo", "Alex Brush", "Alfa Slab One", "Alice", "Alike", "Alike Angular", "Allan", "Allerta", "Allerta Stencil", "Allura", "Almarai", "Almendra", "Almendra Display", "Almendra SC", "Amarante", "Amaranth", "Amatic SC", "Amethysta", "Amiko", "Amiri", "Amita", "Anaheim", "Andada", "Andika", "Angkor", "Annie Use Your Telescope", "Anonymous Pro", "Antic", "Antic Didone", "Antic Slab", "Anton", "Arapey", "Arbutus", "Arbutus Slab", "Architects Daughter", "Archivo", "Archivo Black", "Archivo Narrow", "Aref Ruqaa", "Arima Madurai", "Arimo", "Arizonia", "Armata", "Arsenal", "Artifika", "Arvo", "Arya", "Asap", "Asap Condensed", "Asar", "Asset", "Assistant", "Astloch", "Asul", "Athiti", "Atma", "Atomic Age", "Aubrey", "Audiowide", "Autour One", "Average", "Average Sans", "Averia Gruesa Libre", "Averia Libre", "Averia Sans Libre", "Averia Serif Libre", "B612", "B612 Mono", "Bad Script", "Bahiana", "Bahianita", "Bai Jamjuree"];
      this.setState({
        fontFamilies: fontFamiliesFetched
      });
      WebFont.load({
        google: {
          families: fontFamiliesFetched
        }
      });
  }

  componentDidMount(){
    this.fetchGoogleFontsFamilies();
  }

  handleSideBarToggle = (event) => {
    console.log(window.innerWidth);
    this.setState({
      showSideBar: !this.state.showSideBar
    });
  };

  handleTextAreaChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  handleFontRangePropertyChange = (propertyToUpdate, minOrMax, event) => {
    //Update min/max range properties based on minOrMax
    let properties = this.state.fontRangeProperties;
    properties[propertyToUpdate].range[minOrMax] = Number(event.target.value);
    //Calculate new intervals and make sure max and min stay together
    let {min, max, intervals, step} = properties[propertyToUpdate].range;
    if(max < min) {
      max = min;
    }
    intervals = (max - min) / 5;
    properties[propertyToUpdate].range = {min, max, intervals, step};
    this.setState({
      fontRangeProperties: properties,
    });
  };

  handleFontTogglePropertyChange = (propertyToUpdate, propertyObj, event) => {
    let properties = this.state.fontToggleProperties;
    properties[propertyToUpdate].toggle = !properties[propertyToUpdate].toggle;
    this.setState({
      fontToggleProperties: properties
    });
  };

  handleDisplayBlockKeepButton = (styleProperties, event) => {
    let fontRangePropertiesUpdate = this.state.fontRangeProperties;
    Object.entries(styleProperties).forEach(([propertyToUpdate, value]) => {
      if(propertyToUpdate !== 'fontFamily'){
        fontRangePropertiesUpdate[propertyToUpdate].range.min = Number(parseFloat(value).toFixed(2));
        fontRangePropertiesUpdate[propertyToUpdate].range.max = Number(parseFloat(value).toFixed(2));
        fontRangePropertiesUpdate[propertyToUpdate].range.intervals = 0;
      }
    });
    this.setState(fontRangePropertiesUpdate);
    this.setState({
      eachBlocksFont: this.state.eachBlocksFont.fill(styleProperties.fontFamily)
    });
  };

  handleDisplayBlockDropDown = (blockNumber, event) => {
    let eachBlocksFontUpdate = this.state.eachBlocksFont;
    eachBlocksFontUpdate[blockNumber] = event.target.value;
    this.setState({
      eachBlocksFont: eachBlocksFontUpdate 
    });
  }

  handleDisplayBlockHover = (blockNumber, show, event) => {
    this.setState({showBlockMenu: [show, blockNumber]});
  }

  render() {

    return (
      <main className="App">
        <button 
          className={`App__SideBarToggle ${this.state.showSideBar ? "App__SideBarToggle__X" : "App__SideBarToggle__Burger"}`} 
          onClick={this.handleSideBarToggle}
        />
        <TestingSideBar 
          showSideBar={this.state.showSideBar}
          handleTextAreaChange={this.handleTextAreaChange}
          handleFontRangePropertyChange={this.handleFontRangePropertyChange}
          handleFontTogglePropertyChange={this.handleFontTogglePropertyChange}
          fontFamilies={this.state.fontFamilies}
          fontSizeRange={this.state.fontSizeRange}
          fontRangeProperties={this.state.fontRangeProperties}
          fontToggleProperties={this.state.fontToggleProperties}
        />
        <div 
          className="App__Display"
          style={this.state.showSideBar && window.innerWidth > 939 ? {"marginLeft": "350px"} : {"marginLeft": "0"}}
        >
          <section className="App__DisplayGrid">
            {
              [...Array(6)].map( (_ , index) => {
                //Function to calculate the value of each blocks property based on interval
                const calculateBlockProperty = (property) => {
                  const min = this.state.fontRangeProperties[property].range.min;
                  const intervalsToAdd = this.state.fontRangeProperties[property].range.intervals * (index);
                  return min + intervalsToAdd;
                };
                //Create a style object to implement each interval based value onto each block
                const styleRangeProperties = {};
                const styleToggleProperties = {};
                Object.keys(this.state.fontRangeProperties).forEach(property => {
                  styleRangeProperties[property] = calculateBlockProperty(property)
                });
                Object.keys(this.state.fontToggleProperties).forEach(property => {
                  if(this.state.fontToggleProperties[property].toggle){
                    styleToggleProperties[property] = this.state.fontToggleProperties[property].valueToToggle;
                  }
                });

                return (
                  <DisplayBlock 
                    blockNumber={index}
                    content={this.state.text} 
                    fontFamilies={this.state.fontFamilies}
                    handleClick={this.handleDisplayBlockKeepButton}
                    handleHover={this.handleDisplayBlockHover}
                    handleDropDown={this.handleDisplayBlockDropDown}
                    styleRangeProperties={styleRangeProperties}
                    styleToggleProperties={styleToggleProperties}
                    showBlockMenu={this.state.showBlockMenu}
                    eachBlocksFont={this.state.eachBlocksFont}
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

export default App;

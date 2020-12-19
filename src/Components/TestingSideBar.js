import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRandom, faThLarge } from '@fortawesome/free-solid-svg-icons';
import FontDropDownControls from './ControlsComponents/FontDropDownControls';
import FontPropertyRangeControls from'./ControlsComponents/FontPropertyRangeControls';
import FontPropertyToggleControls from './ControlsComponents/FontPropertyToggleControls';

const TestingSideBar = (props) => {

    const gridModes = window.innerWidth < 750 ? [2,4,6] : [2,4,6,9,12];
    const hidden = {
      "opacity": "0",
      "pointerEvents": "none"
    };
    const visible = {
      "opacity": "1",
      "pointerEvents": "all"
    }

    return (
      <div 
        className="SideBar"
        style={props.showSideBar ? {} : {"width": "5.6rem", "overflow": "hidden"}}
      >
        <h1 
          className="SideBar__Title"
          style={props.showSideBar ? visible : hidden}
        >
          Typogrid
        </h1>
        <textarea 
          className="SideBar__TextArea"
          placeholder="Write something!"
          style={props.showSideBar ? visible : hidden}
          onChange={props.handleTextAreaChange} 
        />
        <div 
          className="SideBar__FontRangeControls"
          style={props.showSideBar ? visible : hidden}
        >
          {/* <div className="SideBar__MinMaxTitles">
            <span>
              Min
            </span>
            <span>
              Max
            </span>
          </div> */}
          {
            //Iterate through state range properties
            Object.entries(props.fontRangeProperties).map(([propertyName, propertyObj]) => {
              return (
                <FontPropertyRangeControls 
                  property={propertyName} 
                  range={propertyObj.range}
                  handleFontRangePropertyChange={props.handleFontRangePropertyChange}
                  handleFontRangePropertyButtons={props.handleFontRangePropertyButtons}
                  handleRangePropertyDropDown={props.handleRangePropertyDropDown}
                  showRangeControls={props.showRangeControls}
                />      
              )    
            })
          }
        </div>
        {/* <div className="SideBar__ToggleControls">
          {
            //Iterate through state toggle properties
            Object.entries(props.fontToggleProperties).map(([propertyName, propertyObj]) => {
              return (
                <FontPropertyToggleControls 
                  property={propertyName} 
                  propertyObj={propertyObj}
                  handleFontTogglePropertyChange={props.handleFontTogglePropertyChange}
                />      
              )    
            })
          }
        </div> */}
        <div 
          className="SideBar__FontFamilyControls"
          style={props.showSideBar ? visible : hidden}
        >
          <label className="SideBar__GridsLabel">
            Grids
          </label>
          <div className="SideBar__GridAmountControls">
            {
              gridModes.map((grids) => {
                return (
                  <button 
                    className="SideBar__GridAmountButton" 
                    onClick={props.handleGridAmountChange}
                    style={props.grids.length === grids ? {"backgroundColor": "var(--color-main-very-light)", "fontSize": "2rem"} : {}}
                  >
                    {grids}
                  </button>)
              })
            }
          </div>
          <div 
            className="SideBar__FontFamiyControls__DropDowns"
            style={{
              "gridTemplateColumns": `repeat(${props.grids.length % 3 ? props.grids.length / 2 : props.grids.length / 3}, 1fr)`,
              "gridTemplateRows": `repeat(${props.grids.length % 3 ?  2 : 3}, 1fr)`
            }}
          >
          {
            props.grids.map((_, index) => {
              return (
                <FontDropDownControls 
                  grids={props.grids}
                  blockNumber={index}
                  handleFontDropDown={props.handleFontDropDown}
                  handleFontDropDownGridHover={props.handleFontDropDownGridHover}
                  eachBlocksFont={props.eachBlocksFont}
                  fontFamilies={props.fontFamilies}
                  hoveredBlock={props.hoveredBlock}
                />
              )
            })
          }
          </div>
          <button 
            className="SideBar__FontFamilyControls__RandomAll"
            onClick={props.handleRandomizeAllFonts}
          >
            Randomize All Fonts
          </button>
        </div>

        <div 
          className="SideBar__MinimizedBar"
          style={props.showSideBar ? {...hidden, "left": "450px",} : visible}
        >
          <button 
            className="SideBar__MinimizedBar__Button"
            onClick={props.handleMinimizedGridAmountSection}
          >
            <FontAwesomeIcon icon={faThLarge} />
          </button>
          <div 
            className="SideBar__MinimizedBar__GridAmountControls"
            style={props.showMinimizedGridAmountSection ? {"height": `${2.8 * gridModes.length}rem`} : {"height": "0"}}
          >
            {
              gridModes.map((grids) => {
                return (
                  <button 
                    className="SideBar__MinimizedBar__GridAmountButton" 
                    onClick={props.handleGridAmountChange}
                    style={props.grids.length === grids ? {"backgroundColor": "var(--color-main-very-light)", "fontSize": "2rem", "height": "3rem"} : {}}
                  >
                    {grids}
                  </button>)
              })
            }
          </div>
          <button 
            className="SideBar__MinimizedBar__Button"
            onClick={props.handleRandomizeAllFonts}
          >
            <FontAwesomeIcon icon={faRandom} />
          </button>
        </div>
      </div>
    )
  }

  export default TestingSideBar;
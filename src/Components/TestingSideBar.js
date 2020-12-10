import FontDropDownControls from './ControlsComponents/FontDropDownControls';
import FontPropertyRangeControls from'./ControlsComponents/FontPropertyRangeControls';
import FontPropertyToggleControls from './ControlsComponents/FontPropertyToggleControls';

const TestingSideBar = (props) => {

    const gridModes = window.innerWidth < 750 ? [2,4,6] : [2,4,6,9,12];

    return (
      <div 
        className="SideBar"
        style={props.showSideBar ? {"left": "0%"} : {"left": "-650px"}}
      >
        <h1 className="SideBar__Title">
          Typogrid
        </h1>
        <textarea 
          className="SideBar__TextArea"
          placeholder="Write something!"
          onChange={props.handleTextAreaChange} 
        />
        <div className="SideBar__FontRangeControls">
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
        <div className="SideBar__FontFamilyControls">
          <label className="SideBar__GridsLabel">Grids</label>
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
                  eachBlocksFont={props.eachBlocksFont}
                  fontFamilies={props.fontFamilies}
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
      </div>
    )
  }

  export default TestingSideBar;
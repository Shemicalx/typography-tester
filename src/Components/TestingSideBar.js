import FontDropDownControls from './ControlsComponents/FontDropDownControls';
import FontPropertyRangeControls from'./ControlsComponents/FontPropertyRangeControls';
import FontPropertyToggleControls from './ControlsComponents/FontPropertyToggleControls';

const TestingSideBar = (props) => {

    return (
      <div 
        className="SideBar"
        style={props.showSideBar ? {"left": "0%"} : {"left": "-350px"}}
      >
        <h1 className="SideBar__Title">
          Typography<br /> 
          Grid Tester
        </h1>
        <textarea 
          className="SideBar__TextArea"
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
          //Iterate through state range properties
          Object.entries(props.fontRangeProperties).map(([propertyName, propertyObj]) => {
            return (
              <FontPropertyRangeControls 
                property={propertyName} 
                range={propertyObj.range}
                fontPropertyChangeHandler={props.handleFontRangePropertyChange}
              />      
            )    
          })
        }
        <div className="SideBar__ToggleControls">
        {
          //Iterate through state toggle properties
          // Object.entries(props.fontToggleProperties).map(([propertyName, propertyObj]) => {
          //   return (
          //     <FontPropertyToggleControls 
          //       property={propertyName} 
          //       propertyObj={propertyObj}
          //       handleFontTogglePropertyChange={props.handleFontTogglePropertyChange}
          //     />      
          //   )    
          // })
        }
        </div>
        <div className="SideBar__GridAmountControls">
          {
            [2,4,6,9,12].map((grids) => {
              return (
                <button 
                  className="SideBar__GridAmountButton" 
                  onClick={props.handleGridAmountChange}
                  style={props.grids.length === grids ? {"backgroundColor": "var(--color-main-very-light)"} : {}}
                >
                  {grids}
                </button>)
            })
          }
        </div>
        <div className="SideBar__DropDownControls">
          {
            props.grids.map((_, index) => {
              return (
                <FontDropDownControls 
                  blockNumber={index}
                  handleFontDropDown={props.handleFontDropDown}
                  eachBlocksFont={props.eachBlocksFont}
                  fontFamilies={props.fontFamilies}
                />
              )
            })
          }
        </div>
      </div>
    )
  }

  export default TestingSideBar;
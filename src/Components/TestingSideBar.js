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
          rows="10"
          cols="30"
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
        </div>
      </div>
    )
  }

  export default TestingSideBar;
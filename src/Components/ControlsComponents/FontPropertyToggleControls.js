const FontPropertyToggleControls = (props) => {
    return (
        <button
            className="SideBar__ToggleButton" 
            onClick={(e)=>props.handleFontTogglePropertyChange(props.property, props.propertyObj, e)}
        >
            {props.propertyObj.valueToToggle}
        </button>
    );
}

export default FontPropertyToggleControls;
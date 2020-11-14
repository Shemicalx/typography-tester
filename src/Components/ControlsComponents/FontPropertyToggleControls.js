const FontPropertyToggleControls = (props) => {
    return (
        <button onClick={(e)=>props.handleFontTogglePropertyChange(props.property, e)}>
            {props.valueToToggle}
        </button>
    );
}

export default FontPropertyToggleControls;
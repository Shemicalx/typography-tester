const FontPropertyControls = (props) => {

  const property = props.property;
  const propertyNameCapitalized = property.replace(/[a-z]{1}/i, char => char.toUpperCase());
  const {step} = props.range;

  return (
    <div 
      className={`SideBar__RangeControls`}
      style={props.showRangeControls[property] ? {"height": "5.4rem"} : {"height": "3rem"}}
    >
      <label 
        className="SideBar__InputsLabel"
        onClick={(e)=>props.handleRangePropertyDropDown(property, e)}
      >
        {propertyNameCapitalized.replace(/([a-z])([A-Z])/g, '$1 $2')}
        <span>{property === 'lineHeight' ? ' relative' : ' pixels' }</span>
        <span 
          className="SideBar__InputLabel__DropDownIcon"
          style={props.showRangeControls[property] ? {"transform": "translate(0, 25%)"} : {"transform": "rotate(-90deg)"}}
        >
        </span>
      </label>
      <div 
        className="SideBar__Inputs"
        style={props.showRangeControls[property] ? {} : {"height": "0"}}
      >
        {
          ["min", "max"].map( minOrMax => {
            return(
              <div 
                className="SideBar__InputAndControls"
              >
                <button onClick={(e)=>props.handleFontRangePropertyButtons(property, minOrMax, e)}>-</button>
                <input
                  type="number" 
                  step={step}
                  title={`Set ${minOrMax}imum ${property}`}
                  value={`${props.range[minOrMax]}`}
                  max="200"
                  onChange={(e)=>props.handleFontRangePropertyChange(property, minOrMax , e)}
                />
                <button onClick={(e)=>props.handleFontRangePropertyButtons(property, minOrMax, e)}>+</button>
              </div>
              
            )
          })
        }
      </div>
    </div>
  )
}

export default FontPropertyControls;
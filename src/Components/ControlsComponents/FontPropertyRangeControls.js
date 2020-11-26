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
          // min="0" 
          type="number" 
          step={step}
          title={`Set minimum ${property}`}
          value={min}
          onChange={(e)=>props.fontPropertyChangeHandler(property, 'min' , e)}
        />
        <input 
          className={`SideBar__${propertyNameCapitalized}Max`}
          // min="0"
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

export default FontPropertyControls;
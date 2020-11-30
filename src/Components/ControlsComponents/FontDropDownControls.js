const FontDropDownControls = (props) => {
    return(
        <select 
            className="SideBar__FontDropDown"
            onChange={(e)=>props.handleFontDropDown(props.blockNumber, e)}
            value={props.eachBlocksFont[props.blockNumber]}
            style={{"fontFamily": props.eachBlocksFont[props.blockNumber] === "-No Font Selected-" ? "Arial" : props.eachBlocksFont[props.blockNumber]}}
        >   
        {
            props.fontFamilies.map( family => {
                return (
                    <option 
                    value={family} 
                    style={{"fontFamily": family}}
                    >
                    {family}
                    </option>
                );
            })
        }
        </select>
    )
}

export default FontDropDownControls;

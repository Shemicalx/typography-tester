const FontDropDownControls = (props) => {
    return(
        <div className="SideBar__FontDropDownGrid">
            <label
                className="SideBar__FontDropDownLabel"
                style={{
                    "fontFamily": props.eachBlocksFont[props.blockNumber] === "-No Font Selected-" ? "Arial" : props.eachBlocksFont[props.blockNumber],
                    "fontSize": `${3 - (props.grids.length / 12)}rem`,
                }}
            >
                Abc
            </label>
            <select 
                className="SideBar__FontDropDown"
                onChange={(e)=>props.handleFontDropDown(props.blockNumber, e)}
                value={props.eachBlocksFont[props.blockNumber]}
                style={{
                    "fontFamily": props.eachBlocksFont[props.blockNumber] === "-No Font Selected-" ? "Arial" : props.eachBlocksFont[props.blockNumber],
                    "fontSize": `${1.6 - (props.grids.length / 24)}rem`
                }}
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
        </div>
    )
}

export default FontDropDownControls;

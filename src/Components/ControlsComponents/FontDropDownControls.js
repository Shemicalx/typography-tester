import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUnlock } from '@fortawesome/free-solid-svg-icons';


const FontDropDownControls = (props) => {
    return(
        <div 
            className="SideBar__FontDropDownGrid"
            onMouseEnter={(e)=>props.handleFontDropDownGridHover(props.blockNumber, e)}
            onMouseLeave={(e)=>props.handleFontDropDownGridHover(999, e)}
            style={props.blockNumber === props.hoveredBlock ? {"backgroundColor": "var(--color-main-light)"} : {}}
        >
            <label
                className="SideBar__FontDropDownLabel"
                style={{
                    "fontFamily": props.eachBlocksFont[props.blockNumber] === "-No Font Selected-" ? "Arial" : props.eachBlocksFont[props.blockNumber],
                    "fontSize": `${2.6 - (props.grids.length / 12)}rem`,
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
                    "fontSize": `${1.4 - (props.grids.length / 24)}rem`
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
            <FontAwesomeIcon 
                className="SideBar__FontDropDownGrid__Locked" 
                style={{"opacity": `${props.grids[props.blockNumber].locked === true ? 0.6 : 0}`}}
                icon={ faLock }
            />
        </div>
    )
}

export default FontDropDownControls;

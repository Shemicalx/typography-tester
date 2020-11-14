const DisplayBlock = (props) => {

    let textStyle = {
      ...props.styleRangeProperties,
      ...props.styleToggleProperties,
      fontFamily: props.eachBlocksFont[props.blockNumber]
    };
    // textStyle.fontFamily = props.eachBlocksFont[props.blockNumber];
    console.log(props.eachBlocksFont);
  
    return (
    <div 
      className="DisplayBlock" 
      onMouseEnter={(e)=>props.handleHover(props.blockNumber, true, e)}
      onMouseLeave={(e)=>props.handleHover(props.blockNumber, false, e)}
    >
      <div 
        className="DisplayBlock__HoverMenu" 
        style={ props.showBlockMenu[0] && props.blockNumber === props.showBlockMenu[1] ? {"left": "0%"} : {"left": "-50%"}}
      >
        <button className="DisplayBlock__Button">
          Info<span>(not functional)</span>
        </button>
        <button className="DisplayBlock__Button">
          <select 
            className="DisplayBlock__DropDown"
            onChange={(e)=>props.handleDropDown(props.blockNumber, e)}
            value={props.eachBlocksFont[props.blockNumber]}
            style={{"fontFamily": textStyle.fontFamily}}
          >
            {
              props.fontFamilies.map( family => {
                return (
                  <option 
                    value={family} 
                    style={{'fontFamily': family}}
                  >
                    {family}
                  </option>
                );
              })
            }
          </select>
        </button>
        <button
          className="DisplayBlock__Button"
          onClick={(e)=>props.handleClick({
            ...props.styleRangeProperties,
            fontFamily: props.eachBlocksFont[props.blockNumber],
          }, e)}
        >
          Keep
        </button>
      </div>
      <p
        style={textStyle}
      >
        {props.content}
      </p>
    </div>
    )
  }

  export default DisplayBlock;
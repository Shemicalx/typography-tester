const DisplayBlock = (props) => {

    let textStyle = {
      ...props.styleRangeProperties,
      ...props.styleToggleProperties,
      fontFamily: props.eachBlocksFont[props.blockNumber],
    };
    
    const splitAndCapitalize = (string) => {
      let toReturn = string.replace(/([a-z])([A-Z])/g, "$1 $2");
      toReturn = toReturn.replace(/[a-z]{1}/i, char => char.toUpperCase());
      return toReturn;
    }

    const showInformationSection = () => {
      return props.showInformationSection[0] && props.blockNumber === props.showInformationSection[1];
    }

    return (
    <div 
      className="DisplayBlock" 
      style={{"maxHeight": `${99.3 / (props.grids.length % 3 ? 2 : 3)}vh`}}
      onMouseEnter={(e)=>props.handleHover(props.blockNumber, true, e)}
      onMouseLeave={(e)=>props.handleHover(props.blockNumber, false, e)}
    >
      <div 
        className="DisplayBlock__HoverMenu" 
        style={ props.showBlockMenu[0] && props.blockNumber === props.showBlockMenu[1] ? {"left": "0%", "width": "100%"} : {"left": "-50%", "width": "0%"}}
      >
        <button 
          className="DisplayBlock__Button"
          style={showInformationSection() ? {"width": "100%", "height": "20%"} : {"height": "50%"}}
          onClick={(e)=>props.handleInformationButtonClick(props.blockNumber, !props.showInformationSection[0], e)}
        >
          Information
        </button> 
        <div 
          className={`DisplayBlock__InfoSection ${showInformationSection() ? "DisplayBlock__InfoSection__Show" : ""}`}
        >
          <span 
            className="DisplayBlock__InfoSection__FontFamily"
            style={showInformationSection() ? {"opacity": "1", "fontFamily": props.eachBlocksFont[props.blockNumber]}: {"fontFamily": props.eachBlocksFont[props.blockNumber]}}
          >
            {props.eachBlocksFont[props.blockNumber]}
          </span>
          {
            Object.entries(props.styleRangeProperties).map(([key, value]) => {
              return (
                <span style={showInformationSection() ? {"opacity": "1"}: {}}>
                  {`${splitAndCapitalize(key)}:   ${value}`}
                </span>
              )
            })
          }
        </div>
        <button
          className="DisplayBlock__Button"
          style={showInformationSection() ? {"width": "100%", "height": "20%", "fontSize": "1.2rem"} : {"height": "50%"}}
          onClick={(e)=>props.handleCopyCSSButtonClick(textStyle, e)}
        >
          Copy CSS
        </button>
        <button
          className="DisplayBlock__Button"
          style={showInformationSection() ? {"width": "100%", "height": "0%", "border": "none"} : {}}
          onClick={(e)=>props.handleClick({
            ...props.styleRangeProperties,
            fontFamily: props.eachBlocksFont[props.blockNumber],
          }, e)}
        >
          Apply To All
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
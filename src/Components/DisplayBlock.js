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

    const sectionToShow = ( el ) => {
      if(props.showInformationSection[0] && props.blockNumber === props.showInformationSection[1]){
        //show information section
        switch(el){
          case "DisplayBlock__InfoButton":
            return {"width": "100%", "height": "20%"};
          case "DisplayBlock__InfoSection":
            return {};
          case "DisplayBlock__InfoSection__FontFamily":
            return {"opacity": "1", "fontFamily": props.eachBlocksFont[props.blockNumber]};
          case "DisplayBlock__CopyCSSButton":
            return {"width": "100%", "height": "0%", "border": "none"};
          case "DisplayBlock__KeepButton":
            return {"width": "100%", "height": "0%", "border": "none"};
          default:
            return {}
        };
      }
      if(props.showKeepSection[0] && props.blockNumber === props.showKeepSection[1]){
        //show keep section
        switch(el){
          case "DisplayBlock__InfoButton":
            return {"width": "100%", "height": "0%", "border": "none"};
          case "DisplayBlock__KeepSection":
            return {"width": "100%", "height": "100%", "border": "none"};
          case "DisplayBlock__CopyCSSButton":
            return {"width": "100%", "height": "0%", "border": "none"};
          case "DisplayBlock__KeepButton":
            return {"width": "100%", "height": "20%", "fontSize": "1.2rem", "border": "none"};
          default:
            return {}
        };
      }
      return {};
    }

    const showInformationSection = () => {
      return props.showInformationSection[0] && props.blockNumber === props.showInformationSection[1];
    }
    
    const showKeepSection = () => {
      return props.showKeepSection[0] && props.blockNumber === props.showKeepSection[1];
    }

    return (
    <div 
      className="DisplayBlock" 
      style={{"maxHeight": `${100 / (props.grids.length % 3 ? 2 : 3) - 0.1}vh`}}
      onMouseEnter={(e)=>props.handleHover(props.blockNumber, true, e)}
      onMouseLeave={(e)=>props.handleHover(props.blockNumber, false, e)}
    >
      <div 
        className="DisplayBlock__HoverMenu" 
        style={ 
          props.showBlockMenu[0] && props.blockNumber === props.showBlockMenu[1] ? {"left": "0%", "width": "100%"} : {"left": "-50%", "width": "0%"}
        }
      >
        <button 
          className="DisplayBlock__Button DisplayBlock__InfoButton"
          style={sectionToShow("DisplayBlock__InfoButton")}
          onClick={(e)=>props.handleInformationButtonClick(props.blockNumber, !props.showInformationSection[0], e)}
        >
          Information
        </button> 
        <div 
          className={`DisplayBlock__InfoSection ${showInformationSection() ? "DisplayBlock__InfoSection__Show" : ""}`}
        >
          <span 
            className="DisplayBlock__InfoSection__FontFamily"
            style={{
              ...sectionToShow("DisplayBlock__InfoSection__FontFamily"),
              "fontFamily": props.eachBlocksFont[props.blockNumber],
            }}
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
          className="DisplayBlock__Button DisplayBlock__KeepButton"
          style={sectionToShow("DisplayBlock__KeepButton")}
          onClick={(e)=>{
            // props.handleClick({
            //   ...props.styleRangeProperties,
            //   fontFamily: props.eachBlocksFont[props.blockNumber],
            // }, e);
            props.handleKeepButtonClick(props.blockNumber, !props.showKeepSection[0], e);
          }}
        >
          Keep
        </button>
        <div className={`DisplayBlock__KeepSection ${showKeepSection() ? "DisplayBlock__KeepSection__Show" : ""}`}>
          <p 
            className="DisplayBlock__KeepSection__Instructions"
            style={showKeepSection() ? {"opacity": "1"}: {}}
          >
            Click on a property to apply it to all grids
          </p>
        {
          Object.entries({
            ...props.styleRangeProperties, 
            fontFamily: props.eachBlocksFont[props.blockNumber],
          }).map(([key, value]) => {
            return (
              <button 
                style={showKeepSection() ? {"opacity": "1"}: {}}
                onClick={(e)=>props.handleKeepMenuButtonClick({
                  [key]: value,
                }, e)}
              >
                {`${splitAndCapitalize(key)}`}
              </button>
            )
          })
        }
        <button 
          style={showKeepSection() ? {"opacity": "1"}: {}}
          onClick={(e)=>props.handleKeepMenuButtonClick({
            ...props.styleRangeProperties,
              fontFamily: props.eachBlocksFont[props.blockNumber],
          }, e)}
        >
          {`Keep All Styles`}
        </button>
        </div>
        {/* <button
          className="DisplayBlock__Button DisplayBlock__CopyCSSButton"
          style={sectionToShow("DisplayBlock__CopyCSSButton")}
          onClick={(e)=>props.handleCopyCSSButtonClick(textStyle, e)}
        >
          Copy CSS
        </button> */}
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
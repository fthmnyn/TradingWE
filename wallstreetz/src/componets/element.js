import React from 'react';

const Element = () => {
  return (
    <div className="stock-market" style={{
        WebkitFontSmoothing: 'antialiased',
    color: '#181B31',
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.43,
    boxSizing: 'inherit',
    fontFamily: 'inherit',
    position: 'relative',
    paddingTop: '60px',
    paddingBottom: '80px',
    backgroundColor: '#FAFBFF',
    marginBottom: '68px',
      }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" className="background-svg" style={{
         WebkitFontSmoothing: 'antialiased',
         color: '#181B31',
         fontSize: '0.875rem',
         fontWeight: 400,
         lineHeight: 1.43,
         boxSizing: 'inherit',
         fontFamily: 'inherit',
         left: 0,
         width: '100vw',
         bottom: 0,
         height: '180px',
         position: 'absolute',
         maxWidth: '100%',
      }}>
        <polygon fill="white" points="0,100 100,0 100,100"></polygon>
      </svg>
      <div className="container" style={{
           WebkitFontSmoothing: 'antialiased',
           color: '#181B31',
           fontSize: '0.875rem',
           fontWeight: 400,
           lineHeight: 1.43,
           fontFamily: 'inherit',
           width: '100%',
           display: 'block',
           boxSizing: 'border-box',
           marginLeft: 'auto',
           marginRight: 'auto',
           paddingLeft: '40px',
           paddingRight: '40px',
           overflow: 'hidden',
           textAlign: 'left',
      }}>
        <h1 className="main-title"> Stock market analysis for the serious part–time investor</h1>
        <div className="description">We use intuitive data visualizations and automated stock analysis to help you understand a stock's fundamentals within minutes.</div>
        <div className="search-section" style={{
           WebkitFontSmoothing: 'antialiased',
           color: '#181B31',
           fontSize: '0.875rem',
           fontWeight: 400,
           lineHeight: 1.43,
           textAlign: 'left',
           boxSizing: 'inherit',
           fontFamily: 'inherit',
           display: 'flex',
           justifyContent: 'center',
           margin: '0px 24px 56px',
        }}>
          <div className="search-box" style={{
            WebkitFontSmoothing: 'antialiased',
            color: '#181B31',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.43,
            textAlign: 'left',
            boxSizing: 'inherit',
            fontFamily: 'inherit',
            maxWidth: '480px',
            flex: '1 0 auto',
            backgroundColor: '#fff',
          }}>
            <div className="input-container" style={{
                WebkitFontSmoothing: 'antialiased',
                color: '#181B31',
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.43,
                textAlign: 'left',
                boxSizing: 'inherit',
                fontFamily: 'inherit',
                border: 0,
                margin: 0,
                display: 'inline-flex',
                padding: 0,
                position: 'relative',
                minWidth: 0,
                flexDirection: 'column',
                verticalAlign: 'top',
                width: '100%',
            }}>
       
             
              <div style={{
                 WebkitFontSmoothing: 'antialiased',
                 textAlign: 'left',
                 flexWrap: 'wrap',
                 color: '#181B31',
                 cursor: 'text',
                 display: 'inline-flex',
                 fontSize: '1rem',
                 boxSizing: 'border-box',
                 alignItems: 'center',
                 fontFamily: 'Montserrat, Verdana, sans-serif',
                 fontWeight: 500,
                 lineHeight: '1.1876em',
                 width: '100%',
                 position: 'relative',
                 borderRadius: '4px',
                 padding: '9px',
              }}>
                       <div className="search-icon" style={{
                WebkitFontSmoothing: 'antialiased',
                textAlign: 'left',
                color: '#181B31',
                cursor: 'text',
                fontSize: '1rem',
                fontWeight: 500,
                lineHeight: '1.1876em',
                boxSizing: 'inherit',
                fontFamily: 'inherit',
                height: '0.01em',
                display: 'flex',
                maxHeight: '2em',
                alignItems: 'center',
                whiteSpace: 'nowrap',
                marginRight: '8px',
              }}>
                <svg className="search-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true" style={{
                    WebkitFontSmoothing: 'antialiased',
                    textAlign: 'left',
                    cursor: 'text',
                    fontWeight: 500,
                    lineHeight: '1.1876em',
                    whiteSpace: 'nowrap',
                    boxSizing: 'inherit',
                    fontFamily: 'inherit',
                    fill: 'currentColor',
                    width: '1em',
                    height: '1em',
                    display: 'inline-block',
                    fontSize: '1.5rem',
                    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                    flexShrink: 0,
                    userSelect: 'none',
                    color: '#A4A9B2',
                }}>
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                </svg>
              </div>
               <input type="text" aria-invalid="false" autoComplete="new-password" placeholder="Search Stocks" value="" className="search-input" aria-autocomplete="list" autoCapitalize="none" spellCheck="false" id="searchStock" style={{
                WebkitFontSmoothing: 'antialiased',
                flexGrow: 1,
                textOverflow: 'ellipsis',
                opacity: 1,
                font: 'inherit',
                color: 'currentColor',
                border: 0,
                height: '1.1876em',
                margin: 0,
                display: 'block',
                background: 'none',
                boxSizing: 'content-box',
                animationName: 'mui-auto-fill-cancel',
                letterSpacing: 'inherit',
                WebkitTapHighlightColor: 'transparent',
                width: 0,
                minWidth: '30px',
                padding: '9.5px 4px',
              }} />
                <div className="end-adornment" style={{
                   WebkitFontSmoothing: 'antialiased',
                   textAlign: 'left',
                   color: '#181B31',
                   cursor: 'text',
                   fontSize: '1rem',
                   fontWeight: 500,
                   lineHeight: '1.1876em',
                   boxSizing: 'inherit',
                   fontFamily: 'inherit',
                   top: 'calc(50% - 14px)',
                   position: 'absolute',
                   right: '9px',
                }}></div>
                <fieldset aria-hidden="true" style={{ 
                     WebkitFontSmoothing: 'antialiased',
                     textAlign: 'left',
                     color: '#181B31',
                     cursor: 'text',
                     fontSize: '1rem',
                     fontWeight: 500,
                     lineHeight: '1.1876em',
                     boxSizing: 'inherit',
                     fontFamily: 'inherit',
                     top: '-5px',
                     left: '0',
                     right: '0',
                     bottom: '0',
                     margin: '0',
                     padding: '0 8px',
                     overflow: 'hidden',
                     position: 'absolute',
                     borderStyle: 'solid',
                     borderWidth: '1px',
                     borderRadius: 'inherit',
                     pointerEvents: 'none',
                     borderColor: 'rgba(0, 0, 0, 0.23)',
                     paddingLeft: '8px',
                }} className="outlined-border">
                    <legend className="border-legend" style={{ 
                            WebkitFontSmoothing: 'antialiased',
                            color: '#181B31',
                            cursor: 'text',
                            fontSize: '1rem',
                            fontWeight: 500,
                            pointerEvents: 'none',
                            boxSizing: 'inherit',
                            fontFamily: 'inherit',
                            padding: 0,
                            textAlign: 'left',
                            transition: 'width 150ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                            lineHeight: '11px',
                            width: '0.01px',
                    }}>
                    <span style={{
                        WebkitFontSmoothing: 'antialiased',
                        color: '#181B31',
                        cursor: 'text',
                        fontSize: '1rem',
                        fontWeight: 500,
                        pointerEvents: 'none',
                        textAlign: 'left',
                        lineHeight: '11px',
                        boxSizing: 'inherit',
                        fontFamily: 'inherit',
                    }}>​</span>
                    </legend>
                </fieldset>
                </div>
            </div>
          </div>
          <button className="search-button" tabIndex="-1" type="button" disabled="" style={{
             WebkitFontSmoothing: 'antialiased',
             border: '0',
             margin: '0',
             display: 'inline-flex',
             outline: '0',
             position: 'relative',
             alignItems: 'center',
             userSelect: 'none',
             verticalAlign: 'middle',
             justifyContent: 'center',
             textDecoration: 'none',
             WebkitAppearance: 'none',
             WebkitTapHighlightColor: 'transparent',
             minWidth: '64px',
             boxSizing: 'border-box',
             transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
             fontFamily: 'Montserrat, Verdana, sans-serif',
             lineHeight: '1.75',
             borderRadius: '4px',
             textTransform: 'capitalize',
             padding: '8px 22px',
             fontSize: '1rem',
             fontWeight: 600,
             flex: '0 0 auto',
             marginLeft: '24px',
             cursor: 'default',
             pointerEvents: 'none',
             color: 'rgba(0, 0, 0, 0.26)',
             backgroundColor: 'rgba(0, 0, 0, 0.12)',
             boxShadow: 'none',
          }}>
            <span className="button-label">Research</span>
          </button>
        </div>
        <div className="image-section" style={{
            WebkitFontSmoothing: 'antialiased',
            color: '#181B31',
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.43,
            textAlign: 'left',
            boxSizing: 'inherit',
            fontFamily: 'inherit',
            position: 'relative',
        }}>
          <picture style={{
              WebkitFontSmoothing: 'antialiased',
              color: '#181B31',
              fontSize: '0.875rem',
              fontWeight: 400,
              lineHeight: 1.43,
              textAlign: 'left',
              boxSizing: 'inherit',
              fontFamily: 'inherit',
          }}>
            <source type="image/webp" srcSet="https://www.wallstreetzen.com/packs/media/images/main-image-1-02da3e1ca6ddd65ae75d15e711d95992.webp 1x, https://www.wallstreetzen.com/packs/media/images/main-image-1@2x-2c71d0767dc2b83324bb274af213276d.webp 2x, https://www.wallstreetzen.com/packs/media/images/main-image-1@4x-07516657905eb95b059082d70f3b65a1.webp 4x" />
            <img src="https://www.wallstreetzen.com/packs/media/images/main-image-1-26aad4738ec9121c056e1ef86b6c4acb.png"  style ={{
                WebkitFontSmoothing: 'antialiased',
                color: '#181B31',
                fontSize: '0.875rem',
                fontWeight: 400,
                lineHeight: 1.43,
                textAlign: 'left',
                width: '541px',
                aspectRatio: 'auto 541 / 317',
                boxSizing: 'inherit',
                fontFamily: 'inherit',
                height: 'auto',
                margin: '0px auto',
                display: 'block',
                maxWidth: 'calc(100% - 48px)',
            }} width="541" height="317" className="main-image" srcSet="https://www.wallstreetzen.com/packs/media/images/main-image-1-26aad4738ec9121c056e1ef86b6c4acb.png 1x, https://www.wallstreetzen.com/packs/media/images/main-image-1@2x-f780204579b157a92a0ce1f8a90c4d7c.png 2x, https://www.wallstreetzen.com/packs/media/images/main-image-1@4x-baf0bfeb88bbf71bf4da8718ab1815c2.png 4x" />
          </picture>
          <button className="watch-demo-button" tabIndex="0" type="button" style={{
            WebkitFontSmoothing: 'antialiased',
            border: 0,
            cursor: 'pointer',
            margin: 0,
            display: 'inline-flex',
            outline: 0,
            alignItems: 'center',
            userSelect: 'none',
            verticalAlign: 'middle',
            justifyContent: 'center',
            textDecoration: 'none',
            WebkitAppearance: 'none',
            WebkitTapHighlightColor: 'transparent',
            fontSize: '0.875rem',
            minWidth: '64px',
            boxSizing: 'border-box',
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            fontFamily: 'Montserrat, Verdana, sans-serif',
            fontWeight: 500,
            lineHeight: 1.75,
            borderRadius: '4px',
            textTransform: 'capitalize',
            boxShadow: 'none',
            top: '50%',
            left: '50%',
            color: '#fff',
            padding: '8px 16px',
            position: 'absolute',
            transform: 'translate(-50%, calc(-50% - 16px))',
            background: 'rgba(0, 0, 0, 50%)',
          }}>
            <span className="button-label" style={{
                WebkitFontSmoothing: 'antialiased',
                cursor: 'pointer',
                userSelect: 'none',
                WebkitTapHighlightColor: 'transparent',
                fontSize: '0.875rem',
                fontWeight: 500,
                lineHeight: 1.75,
                textTransform: 'capitalize',
                color: '#fff',
                boxSizing: 'inherit',
                fontFamily: 'inherit',
                width: '100%',
                display: 'inherit',
                textAlign: 'center',
                alignItems: 'inherit',
                justifyContent: 'inherit',
            }}> 
              <span className="start-icon">
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" className="play-svg">
                  <path d="M.867 6.087l3.946-4.933a.667.667 0 011.04 0L9.8 6.087a.667.667 0 01-.52 1.083H1.387a.667.667 0 01-.52-1.083z" fill="currentColor"></path>
                </svg>
              </span>
              Watch Demo
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Element;

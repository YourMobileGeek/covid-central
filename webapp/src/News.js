import React from 'react';
import './App.css';
import 'react-spinning-wheel/dist/style.css';

import CardsArray from './CardsArray'
import NavigationComponent from './MinorComponents/NavigationComponent'
import { CardResourceTypes } from './Shared/Enums'
import { Container } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import * as Util from './Shared/Util'



const hub = {color: '#eac45f'};

class NewsPage extends React.Component { 

  constructor() {
    super();
    this.state = {
      
    };
  }
  
  componentDidMount() {

  }

  render()
  {  
    const isMobile = Util.IsMobileUserAgent()
    var divClass = "newsstatsPage"
    var divClass2 = "desktopCont"
    var tag = "tagCommentary"
    var desktopUrl = "hubLink"
    if(isMobile)
    {
      divClass = "newsstatsPageMobile"
      divClass2 = undefined
      desktopUrl = undefined
      tag = "tag"
    }
    return (   

<div className={divClass2}>
<div className={divClass}> 
<NavigationComponent title="News" />
        <div class="innerContentCont">
       

      <Container fluid>
        <CardsArray resourceType={CardResourceTypes.NEWS} />
      </Container>
      
      
        <h1 className="tagFacts" style={{paddingTop: "0vh"}}>Live news updates powered by <a style={{color: "#2b2d2f"}} className="tagFacts" href="https://newsapi.org" target="_blank">News API</a>
    <br></br>Service provided by the FSU Innovation Hub <br></br>
        <a style={hub} className="tagFacts" href="https://innovation.fsu.edu/" target="_blank">innovation.fsu.edu</a></h1>
      
      

    </div>

</div>
</div>

      )
  }
}
export default NewsPage;

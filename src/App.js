import React from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from  "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme=>({
    appBarColor:{
        backgroundColor:"#0C0D1F"
    },
    menuButton : {
        marginRight:"20px",
        color: "#eee"
    },
    primarcolor:{
        color:"#eee"
    },
    buttonGroup:{
        marginLeft:"auto",
        color:"#eee"
    },
    bgImage:{
        marginTop:"64px",
        backgroundRepeat:"no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "100%"
    }
}))

const App = () => {
    const classes =  useStyles();   
    return (
        <>
          <div className="headerBock">
           <AppBar position= "fixed" className={classes.appBarColor}>
               <Toolbar>
                   <IconButton className={classes.menuButton}>
                       <MenuIcon/>
                   </IconButton>
                   <Typography variant="h5" className={classes.primarcolor}>
                       JX Engine
                   </Typography>
                   <ButtonGroup className={classes.buttonGroup}>
                       <Button color="primary">Login</Button>
                       <Button color="primary">Register</Button>
                   </ButtonGroup>
               </Toolbar>
           </AppBar> 
          </div>
          <div className="bodyBlock">
              <img className={classes.bgImage} src="https://mobirise.com/video-background/assets/images/uber.jpg" alt="Welcome image"/>
          </div>
        </>
    )
}

export default App;


// const useStyles = makeStyles((theme)=>({
//     menuButton:{
//         marginLeft: "20px"
//     },
//     primaryColor:{
//         color:"#8ecaed"
//     }
// }));

// class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {  }
//     }
//     render() { 
//         const classes = this.props;
//         return ( 
//             <>
//               <AppBar position="fixed">
//                   <Toolbar>
//                       <IconButton >
//                           <MenuIcon/>
//                       </IconButton>  
//                       <Typography variant="h5">
//                           JX Engine    
//                       </Typography>
//                   </Toolbar>
//               </AppBar>
//             </>
//         );
//     }
// }
 
// export default makeStyles(useStyles)(App);
import React, { Component } from "react"
import 'typeface-roboto'
// import  from '@material-ui'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DeleteIcon from '@material-ui/icons/Delete';
// import HomeIcon from '@material-ui/icons/Delet';
import './iconsPage.css'
import { Input } from "@material-ui/core";
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       // light: will be calculated from palette.primary.main,
//       main: '#44ff44',
//       // dark: will be calculated from palette.primary.main,
//       // contrastText: will be calculated to contrast with palette.primary.main
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#ffcc00',
//     },
//     // error: will use the default color
//   },
// });



// const styles = theme => ({
//     root: {
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'flex-end',
//     },
//     icon: {
//       margin: theme.spacing.unit * 2,
//     },
//     iconHover: {
//       margin: theme.spacing.unit * 2,
//       '&:hover': {
//         color: red[800],
//       },
//     },
//   });

class IconsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {value: "hello"}
        this.handleChange =  this.handleChange.bind(this)
        // this.handleChange =  this.handleC.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
    updateValue(newValue) {
        this.setState({value: newValue})
    }

    testCall = () => {
        console.log("Hi I'm a log ", this);
    }
    deleteThing = () => {
        console.log("I JUST DELETED A THING ", this);
        this.updateValue("");
    }
    setShort = () => {
        console.log("I JUST DELETED A THING ", this);
        this.updateValue("ShrtString");
    }
    setLong = () => {
        console.log("I JUST DELETED A THING ", this);
        this.updateValue("HELLO I'M A REALLY LONG AND OBNOXIOUS STRING WOO LOOK AT ME GO ACROSS MULTIPLE LINES AND RESIZE YAY");
    }
    deleteOtherThing = () => {
        console.log("I JUST DELETED ANOTHER THING ", this);
        alert("HI I'M AN ALERT");
    }

    render() {  
        return(
            <div className = 'iconsPage'>
                <p>HELLO WORLD THINGS</p>
                {/* <Typography variant="title" color="inherit">Some text in here</Typography> */}
                {/* <Button className="sausageButton" onClick={this.testCall}>I'm a Button</Button> */}
                {/* <SvgIcon color="">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                </SvgIcon> */}
                <input type="string" value={this.state.value} onChange={this.handleChange} />
                <input type="string" value={this.state.value} onChange={this.handleChange} />
                <Button>{this.state.value}</Button>
                <IconButton color="primary" onClick={this.deleteThing}>
                    <DeleteIcon/>x
                </IconButton>
                {/* <MuiThemeProvider theme={theme}> */}
                    <Button color="primary" onClick={this.setShort}>Set Text to short</Button>
                    <Button color="primary" onClick={this.setLong}>Set Text to Long</Button>
                    <Button color="secondary">Secondary button in iconsPage component</Button>
                {/* </MuiThemeProvider> */}
                <BottomNavigation>How does this work
                    <BottomNavigationAction icon={<DeleteIcon/>} label="DeleteLabel" onClick={this.deleteOtherThing}/>
                    <BottomNavigationAction icon={<DeleteIcon/>}/>
                        {/* <Button color="primary">Primary button in iconsPage component</Button> */}
                </BottomNavigation>
                

            </div>
        )
    }
}


export default IconsPage;
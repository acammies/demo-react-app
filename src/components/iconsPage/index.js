import React, { Component } from "react"
import 'typeface-roboto'
// import  from '@material-ui'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import SvgIcon from '@material-ui/core/SvgIcon';


const styles = theme => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    icon: {
      margin: theme.spacing.unit * 2,
    },
    iconHover: {
      margin: theme.spacing.unit * 2,
      '&:hover': {
        color: red[800],
      },
    },
  });

class IconsPage extends Component {
    render() {  
        return(
            <div className = 'iconsPage'>
                <p>HELLO WORLD THINGS</p>
                {/* <Typography variant="title" color="inherit">Some text in here</Typography> */}
                <Button>I'm a Button</Button>
                <SvgIcon>Icon I am</SvgIcon>

            </div>
        )
    }
}


export default IconsPage;
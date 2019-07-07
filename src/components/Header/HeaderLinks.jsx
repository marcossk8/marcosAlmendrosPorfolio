/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Home from '@material-ui/icons/Home';
import Person from '@material-ui/icons/Person';
import Work from '@material-ui/icons/Work';
import Email from '@material-ui/icons/Email';

import IconButton from '@material-ui/core/IconButton';
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    fontFamily: [
      "Open Sans",
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      color: '#635ee7',
      opacity: 1,
    },
    '&$selected': {
      color: '#635ee7',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#635ee7',
    },
  },
  selected: {},
}))(props => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > div': {
      // maxWidth: 25,
      // width: '100%',
      width: '10px',
      height: '10px',
      borderRadius: '100%',
      backgroundColor: '#4d6de3',
    },
  },
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
  root: {
    textTransform: 'none',
    color: '#393737',
    // 393737
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    minWidth: 50,
    '&:focus': {
      color: '#4d6de3',
      opacity: 1,
    },
    '&:hover': {
      color: '#4d6de3',
      opacity: 1,
    },
    '&$selected': {
      color: '#4d6de3',
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
}))(props => <Tab disableRipple {...props} />);

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   typography: {
//     padding: theme.spacing(3),
//   },
//   demo1: {
//     backgroundColor: theme.palette.background.paper,
//   },
//   demo2: {
//     backgroundColor: '#2e1534',
//   },
// }));


function HeaderLinks({ ...props }) {

  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    console.log('value', newValue)
    props.linkActive = newValue
    // if(value != props.linkActive) {
    //   setValue(newValue);
    //   console.log('entro')
    // }
  }

  const { classes } = props;
  return (
    <List className={classes.list}>

      <StyledTabs
        value={props.linkActive}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary">
        <StyledTab icon={<Home />} href={props.inicio} aria-label="Home" />
        <StyledTab icon={<Person />} href={props.perfil} aria-label="Person" />
        <StyledTab icon={<Work />} href={props.trabajos} aria-label="Work" />
        <StyledTab icon={<Email />} href={props.contacto} aria-label="Email" />

        {/* <IconButton color="primary" href={props.contacto} className={classes.button} aria-label="Add to shopping cart">
          <Email />
        </IconButton> */}

      </StyledTabs>



      {/* <ListItem className={classes.listItem}>
        <a href={props.inicio} className={classes.navLink}>
          Inicio
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href={props.perfil} className={classes.navLink}>
          Perfil
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href={props.trabajos} className={classes.navLink}>
          Trabajos
        </a>
      </ListItem>
      <ListItem className={classes.listItem}>
        <a href={props.contacto} className={classes.navLink}>
          Contacto
        </a>
      </ListItem> */}

      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}

      {/* <ListItem className={classes.listItem}>
        <StyledTabs value={value} onChange={handleChange}>
          <StyledTab href={props.inicio} label="Inicio" />
          <StyledTab href={props.perfil} label="Perfil" />
          <StyledTab href={props.trabajos} label="Trabajos" />
          <StyledTab href={props.contacto} label="Contacto" />
        </StyledTabs>
      </ListItem> */}


      {/* <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}>
          Contacto
        </Button>
      </ListItem> */}


    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);

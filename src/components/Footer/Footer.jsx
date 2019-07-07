/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import Button from "components/CustomButtons/Button.jsx";
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list} style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
            <ListItem className={classes.inlineBlock}>
              <Button
                justIcon
                link
                className={classes.margin5}
                href='https://www.instagram.com/marcosdalmendros/?hl=es-la'>
                <i style={{ color: '#393737' }} className={"fab fa-instagram"} />
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button
                justIcon
                link
                className={classes.margin5}
                href='https://www.facebook.com/marcos.almendros'>
                <i style={{ color: '#393737' }} className={"fab fa-facebook"} />
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <Button
                justIcon
                link
                className={classes.margin5}
                href='https://www.linkedin.com/in/marcos-almendros-225b75183/'>
                <i style={{ color: '#393737' }} className={"fab fa-linkedin"} />
              </Button>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <div style={{ display: 'flex', marginRight: 20, alignItems: 'center', marginLeft: 20, }}>
                <Phone style={{ color: '#393737', height: "20px", width: '20px' }}></Phone>
                <span style={{ color: '#393737', marginLeft: 10 }}>351-2522007</span>
              </div>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Email style={{ color: '#393737', height: "20px", width: '20px', }}></Email>
                <span style={{ color: '#393737', marginLeft: 10 }}>marcosdalmendros@gmail.com</span>
              </div>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , Marcos Almendros.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);

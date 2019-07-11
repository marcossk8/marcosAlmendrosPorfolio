import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// styles
import mainPageStyle from "assets/jss/material-kit-react/views/mainPage.jsx";
import './Main.css'
import './Banner.css'

// pages
import ImagesWorks from '../Works/ImagesWorks.js'
import ImagesDesciption from '../Works/ImagesDescription.js';
import Skills from '../Skills/Skills.js';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      toggleImage: false,
      image: {
        url: '',
        description: '',
        title: '',
        languages: [],
        date: ''
      },
      active: 'inicio',
      activeNumber: 0
    }
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }

  toggleImage = props => {
    this.setState({ toggleImage: true, image: props })
  }

  toggleCloceImage = () => {
    this.setState({ toggleImage: false })
  }

  componentDidMount() {
    this.myScoll()
  }

  myScoll = () => {

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
    var windowH = window.innerHeight / 2
    Array.prototype.forEach.call(section, function (e) {
      sections[e.id] = e.offsetTop;
    });

    window.onscroll = () => {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
      var scrollPercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      let s
      for (i in sections) {
        let scrollSuma = 0
        if (i == 'inicio') {
          scrollSuma = sections[i]
        }
        else {
          scrollSuma = sections[i] + windowH
        }

        if (scrollSuma <= scrollPosition) {
          s = i
        }
        if (scrollPercent == 1) {
          s = 'contacto'
        }
      }
      let number = 0

      if (this.state.active != s) {
        if (s == 'inicio') {
          number = 0
        } else if (s == 'perfil') {
          number = 1
        } else if (s == 'trabajos') {
          number = 2
        } else if (s == 'contacto') {
          number = 3
        }
        this.setState({ active: s, activeNumber: number })
      }
    };
  }

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <ImagesDesciption
          toggleImage={this.state.toggleImage}
          toggleCloceImage={this.toggleCloceImage.bind(this)}
          image={this.state.image}
        />

        <Header
          color="transparent"
          brand=''
          rightLinks={<HeaderLinks linkActive={this.state.activeNumber} perfil={'#perfil'} trabajos={'#trabajos'} inicio={'#inicio'} contacto={'#contacto'} />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />

        <div class='section' id='inicio'></div>

        <Parallax image={require("assets/img/bannerMA.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h2 className={'titleBanner'}>Marcos Almendros</h2>
                <h4>Diseñador Gráfico • Desarrollador Front-end</h4>
                <a href="#perfil">
                  <Button
                    color="primary"
                    size="lg"
                    target="_blank"
                    rel="noopener noreferrer">
                    Conocer más
                </Button>
                </a>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, "contMain")}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center" >
                <div class='section' id='perfil'></div>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>

                    <div className={classes.name} style={{ marginTop: '50px' }}>

                      <h2>Perfil</h2>
                      <h6>Diseñador Gráfico • Desarrollador Front-end • Desarrollador Movil</h6>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href='https://www.instagram.com/marcosdalmendros/?hl=es-la'>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href='https://www.facebook.com/marcos.almendros'>
                        <i className={"fab fa-facebook"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href='https://www.linkedin.com/in/marcos-almendros-225b75183/'>
                        <i className={"fab fa-linkedin"} />
                      </Button>
                      <Button
                        justIcon
                        link
                        className={classes.margin5}
                        href='https://github.com/marcossk8'>
                        <i className={"fab fa-github"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12}>
                  <div className={classes.description}>
                    <p> Me considero una persona seria, responsable, creativa y dinámica con capacidad de adaptación y trabajos en equipo, con facilidad para resolver problemas de manera eficiente y lograr los objetivos trazados por el cliente, empresa u organización. Además soy autodidacta, y dispuesto al aprendizaje de nuevas herramientas que permitan optimizar mi desempeño.</p>
                  </div>
                </GridItem>

                <h2>Habilidades</h2>
                <Skills />
                <div style={{ height: '200px' }}></div>

              </GridContainer>
              <GridContainer justify="center">
                <div class='section' id='trabajos'></div>
                <h2>Trabajos</h2>

                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <ImagesWorks toggleImage={this.toggleImage.bind(this)}></ImagesWorks>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <div class='section' id="contacto">
          <Footer />
        </div>
      </div>
    );
  }
}

export default withStyles(mainPageStyle)(MainPage);

import React from "react";
import './ProfilePage.css'
import '../Banner/Banner.css'
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
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import DevicesOther from '@material-ui/icons/DevicesOther';
import FormatColorFill from '@material-ui/icons/FormatColorFill';
import Chip from '@material-ui/core/Chip';
import Card from "components/Card/Card.jsx";
import ButtonM from '@material-ui/core/Button';

import logohtml from "assets/img/logotipos/logohtml.svg";
import logocss from "assets/img/logotipos/logocss.svg";
import logojavascript from "assets/img/logotipos/logojavascript.svg";
import logoreact from "assets/img/logotipos/logoreact.svg";
import logoangular from "assets/img/logotipos/logoangular.svg";
import logoillustrator from "assets/img/logotipos/logoillustrator.svg";
import logophotoshop from "assets/img/logotipos/logophotoshop.svg";
import logoindesing from "assets/img/logotipos/logoindesing.svg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import ImagesWorks from '../ImagesWorks/ImagesWorks.js'
// import {pruebaCanvas} from '../../pruebaCanvas';

const habilidadesLenguajes = [
  {
    url: `${logohtml}`,
    title: 'HTML5',
  },
  {
    url: `${logocss}`,
    title: 'CSS',
  },
  {
    url: `${logojavascript}`,
    title: 'JavaScript',
  },
  {
    url: `${logoreact}`,
    title: 'ReactJS • ReactNative',
  },
  {
    url: `${logoangular}`,
    title: 'Angular',
  },

];

const habilidadesProgramas = [
  {
    url: `${logoillustrator}`,
    title: 'Adobe Illustrator',
  },
  {
    url: `${logophotoshop}`,
    title: 'Adobe Photoshop',
  },
  {
    url: `${logoindesing}`,
    title: 'Adobe Indesign',
  },
]

class ProfilePage extends React.Component {
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
    console.log('tocoimagenasd', props)
  }

  toggleCloceImage = () => {
    console.log('entro')
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
          // } else if(i == 'contacto') {
          // console.log('entro')
        }
        else {
          scrollSuma = sections[i] + windowH
        }
        // console.log('scroll', scrollPercent)
        
        if (scrollSuma <= scrollPosition) {
          s = i
        }
        if(scrollPercent == 1){
          s = 'contacto'
          // break
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
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery, classes.imgShadow);
    const navImageClassesHover = classNames(classes.imgRounded, classes.imgGallery, classes.imgShadowHover);

    return (
      <div>
        {/* <div style={{ position: 'fixed', top: '50%', right: '20px', fontSize: '20px', zIndex: 100 }}>{this.state.active}</div> */}

        <Fade in={this.state.toggleImage} timeout={500}>
          <div className={'contImageToggleBackGround'}>

            <GridContainer>
              {/* <div className={"exitBtnImageToggle"}> */}
              <GridItem xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>

                <IconButton
                  color="#000"
                  onClick={() => { this.toggleCloceImage() }}>
                  <ArrowBack />
                </IconButton>
                {/* </div> */}
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>

                <Slide direction="up" timeout={1000} in={this.state.toggleImage}>
                  <img className={'imageToggle'} src={this.state.image.url} alt="" />
                </Slide>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <Slide direction="left" timeout={1500} in={this.state.toggleImage}>
                  {/* <div>
                    <h3>Descripción</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde nobis ratione, impedit ad obcaecati veritatis porro nesciunt voluptatibus cupiditate error, molestias amet mollitia provident quos excepturi. Blanditiis quos amet numquam.</p>
                  </div> */}
                  <div className={'descriptionInMovil'}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Chip label={this.state.image.title} />
                      <p>{this.state.image.date}</p>
                    </div>
                    {/* <h3>{this.state.image.title}</h3> */}
                    <div>
                      <h4>Descripción</h4>
                      <p>{this.state.image.description}</p>
                    </div>

                    <div>
                      <h4>Lenguajes</h4>

                      {
                        this.state.image.languages
                          ?
                          this.state.image.languages.map((item, k) => {
                            return (
                              <Chip key={k} variant="outlined" label={item} style={{ marginRight: 10 }} />
                            )
                          })
                          :
                          null
                      }
                    </div>

                    <div>
                      <Button
                        color="primary"
                        // size="lg"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="outlined"
                        href={this.state.image.link}
                        className={'btnOutLine'}
                      >
                        Conocer más
                      </Button>
                      {/* <ButtonM variant="outlined" className={classes.button}>
                        Conocer más
                      </ButtonM> */}
                    </div>

                  </div>


                </Slide>
              </GridItem>
            </GridContainer>

            {/* <div onClick={() => { this.toggleCloceImage() }} className={"exitBtnImageToggle"}>X</div> */}
            {/* </div> */}
          </div>
        </Fade>
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
          {/* <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}> */}
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                {/* <h2 className={'titleBanner'}>Hoy pueden pasar cosas espectaculares</h2> */}
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
          {/* </div> */}
        </Parallax>
        <div className={classNames(classes.main, "contMain")}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center" >
                <div class='section' id='perfil'></div>
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    {/* <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div> */}
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

                <GridItem xs={12} sm={12} md={12}>

                  <NavPills
                    color="primary"
                    alignCenter
                    // horizontal={{
                    //   tabsGrid: { xs: 2, sm: 2, md: 2 },
                    //   contentGrid: { xs: 2, sm: 2, md: 2 }
                    // }}
                    tabs={[
                      {
                        tabButton: "Lenguajes",
                        tabIcon: DevicesOther,
                        tabContent: (
                          <GridContainer justify="center">
                            {
                              habilidadesLenguajes.map((item, k) => {
                                return (
                                  <GridItem xs={12} sm={12} md={2}>
                                    <Card key={k}>
                                      <img src={item.url} alt="Logotipo" style={{ width: '100%', borderRadius: '6px' }} />
                                    </Card>
                                    <h4 style={{ marginTop: -10 }}>{item.title}</h4>
                                  </GridItem>
                                )
                              })
                            }
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Diseño",
                        tabIcon: FormatColorFill,
                        tabContent: (
                          <GridContainer justify="center">
                            {
                              habilidadesProgramas.map((item, k) => {
                                return (
                                  <GridItem xs={12} sm={12} md={2}>
                                    <Card key={k}>
                                      <img src={item.url} alt="Logotipo" style={{ width: '100%', borderRadius: '6px' }} />

                                    </Card>
                                    <h4 style={{ marginTop: -10 }}>{item.title}</h4>
                                  </GridItem>
                                )
                              })
                            }
                          </GridContainer>
                        )
                      },

                    ]}
                  />
                </GridItem>


                < div style={{ height: '200px' }}></div>
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

export default withStyles(profilePageStyle)(ProfilePage);

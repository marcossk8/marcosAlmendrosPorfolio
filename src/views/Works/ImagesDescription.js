import React from "react";

// @material-ui/core components
import Fade from '@material-ui/core/Fade';
import Slide from '@material-ui/core/Slide';
import IconButton from "@material-ui/core/IconButton";
import ArrowBack from '@material-ui/icons/ArrowBack';
import Chip from '@material-ui/core/Chip';

// core components
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

const ImagesDesciption = props => {
    return (
        <Fade in={props.toggleImage} timeout={500}>
            <div className={'contImageToggleBackGround'}>

                <GridContainer>
                    <GridItem xs={12} sm={12} md={12} style={{ marginBottom: 20 }}>

                        <IconButton
                            color="#000"
                            onClick={() => { props.toggleCloceImage() }}>
                            <ArrowBack />
                        </IconButton>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>

                        <Slide direction="up" timeout={1000} in={props.toggleImage}>
                            <img className={'imageToggle'} src={props.image.url} alt="" />
                        </Slide>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={6}>
                        <Slide direction="left" timeout={1500} in={props.toggleImage}>

                            <div className={'descriptionInMovil'}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Chip label={props.image.title} />
                                    <p>{props.image.date}</p>
                                </div>
                                <div>
                                    <h4>Descripción</h4>
                                    <p>{props.image.description}</p>
                                </div>

                                <div>
                                    <h4>Lenguajes</h4>

                                    {
                                        props.image.languages
                                            ?
                                            props.image.languages.map((item, k) => {
                                                return (
                                                    <Chip key={k} variant="outlined" label={item} style={{ marginRight: 10, marginBottom: 5 }} />
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
                                        href={props.image.link}
                                        className={'btnOutLine'}
                                    >
                                        Conocer más
                    </Button>
                                </div>
                            </div>
                        </Slide>
                    </GridItem>
                </GridContainer>

            </div>
        </Fade>
    )
}

export default ImagesDesciption

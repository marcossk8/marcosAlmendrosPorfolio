import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import saco from "assets/img/trabajos/web/saco.png";
import conquer from "assets/img/trabajos/web/conquer.png";
import ccu from "assets/img/trabajos/web/ccu.png";
import audall from "assets/img/trabajos/web/audall.png";
import duty from "assets/img/trabajos/web/duty.png";
import panelduty from "assets/img/trabajos/web/panelduty.png";

import auditoria from "assets/img/trabajos/movil/dutyauditor.png";
import dasdasur from "assets/img/trabajos/movil/dasdasur.png";
import fidelizacion from "assets/img/trabajos/movil/fidelizacion.png";

import useStyles from "./makeStyles";

const images = [
    {
        url: `${saco}`,
        title: 'Saco',
        width: '100%',
        description: 'Desarrollo de una aplicación web para la organización de la administración de un establecimiento: apertura y cierre de caja, ingresos, egresos, cuenta corriente, carga de artículos, etc.',
        date: '20-04-2019',
        languages: ['HTML5', 'CSS', 'JavaScript', 'ReactJS'],
        link: 'https://saco-kitty.firebaseapp.com/'
    },
    {
        url: `${auditoria}`,
        title: 'Duty Auditoria',
        width: '100%',
        description: 'Desarrollo de Duty Auditor, aplicación móvil tanto para Android como para iOS. La misma se encarga de realizar auditorías y así tener un resultado de los procesos y actividades económicas de cada empresa, pudiendo subir fotos, comentarios, calificación de estrellas, issues, y múltiple choice.',
        date: '10-04-2019',
        languages: ['HTML5', 'CSS', 'JavaScript', 'ReactNative'],
        link: 'https://play.google.com/store/apps/details?id=com.kiri.duty&hl=es'
    },
    {
        url: `${panelduty}`,
        title: 'Tablero Duty',
        width: '100%',
        date: '10-04-2019',
        description: 'Desarrollo de una parte del Tablero de Duty en la sección de Informe Comercial. La misma se encarga de mostrar toda la información gráfica y visual de ingresos, egresos, tickets generados, etc.',
        languages: ['HTML5', 'CSS', 'JavaScript', 'Angular'],
        link: 'https://dutygestion.com/inicio/'
    },
    {
        url: `${conquer}`,
        title: 'Panel Conquer',
        width: '100%',
        description: 'Desarrollo de un panel web encargado de mostrar y subir, a través de distintas herramientas, toda la información del área de pedidos.',
        date: '25-03-2019',
        languages: ['HTML5', 'CSS', 'JavaScript', 'ReactJS'],
        link: 'https://panelconquer.firebaseapp.com/pages/login-page'
    },
    {
        url: `${ccu}`,
        title: 'Panel CCU',
        width: '100%',
        description: 'Desarrollo de un panel web encargado de mostrar y subir, a través de distintas herramientas, toda la información del área de pedidos.',
        date: '10-03-2019',
        languages: ['HTML5', 'CSS', 'JavaScript', 'ReactJS'],
        link: 'https://db-kiri.firebaseapp.com/pages/login-page/'
    },
    {
        url: `${dasdasur}`,
        title: 'Dasdasur',
        width: '100%',
        description: 'Desarrollo de PedidosOnline, aplicación móvil para realizar pedidos, tanto para Android como para iOS.',
        date: '10-01-2019',
        languages: ['HTML5', 'CSS', 'JavaScript', 'ReactNative'],
        link: 'https://play.google.com/store/apps/details?id=com.kiri.dasdasuronline&hl=es'
    },
    {
        url: `${audall}`,
        title: 'Audall',
        width: '100%',
        description: 'Desarrollo de Audall, una página web para exhibir su producto, la Radio del futuro.',
        date: '10-03-2018',
        languages: ['HTML5', 'CSS',],
        link: 'http://159.89.33.113/'
    },
    {
        url: `${duty}`,
        title: 'Duty',
        width: '100%',
        description: 'Desarrollo de Duty, una página web para exhibir su producto, un software que se encarga de soluciones orientadas a la gestión de empresas y marcas con modelos de negocios descentralizados.',
        date: '10-02-2018',
        languages: ['HTML5', 'CSS', 'JavaScript'],
        link: 'https://dutygestion.com/'
    },
    {
        url: `${fidelizacion}`,
        title: 'Fidelización',
        width: '100%',
        description: 'Desarrollo de Fidelización, aplicación móvil para realizar pedidos de comida rápida, tanto para Android como para iOS.',
        date: '10-10-2017',
        languages: ['HTML5', 'CSS', 'ReactNative'],
        link: 'https://play.google.com/store/apps/details?id=com.kiri.fidelizacion&hl=es'
    },
];

export default function ButtonBases(props) {
    const classes = useStyles();

    return (
        <GridContainer justify="center">
            {images.map(image => (
                <GridItem xs={12} sm={12} md={4}>
                    <ButtonBase
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        onClick={()=>{props.toggleImage(image)}}
                        style={{
                            width: image.width,
                            marginBottom: "2.142rem",
                            borderRadius: '6px'
                        }}>
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                className={classes.imageTitle}>
                                {image.title}
                                <span className={classes.imageMarked} />
                            </Typography>
                        </span>
                    </ButtonBase>
                </GridItem>
            ))}
        </GridContainer>
    );
}
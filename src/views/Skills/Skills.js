import React from "react";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import DevicesOther from '@material-ui/icons/DevicesOther';
import FormatColorFill from '@material-ui/icons/FormatColorFill';
import Card from "components/Card/Card.jsx";
// images logo
import logohtml from "assets/img/logotipos/logohtml.svg";
import logocss from "assets/img/logotipos/logocss.svg";
import logojavascript from "assets/img/logotipos/logojavascript.svg";
import logoreact from "assets/img/logotipos/logoreact.svg";
import logoangular from "assets/img/logotipos/logoangular.svg";
import logoillustrator from "assets/img/logotipos/logoillustrator.svg";
import logophotoshop from "assets/img/logotipos/logophotoshop.svg";
import logoindesing from "assets/img/logotipos/logoindesing.svg";

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

const Skills = () => {
    return (
        <GridItem xs={12} sm={12} md={12}>

            <NavPills
                color="primary"
                alignCenter
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
    )
}

export default Skills
import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import './Contato.css';


function Contato() {

    return (
        <Grid container direction='column'>

            <Box alignItems='start' justifyContent='start'>
                <h3 className="txt1C">Conheça nossos Parceiros: </h3>
                <a target="_blank" href="https://antigo.mma.gov.br/responsabilidade-socioambiental/producao-e-consumo-sustentavel/conceitos/consumo-sustentavel.html" rel="noopener noreferrer">
                    <Typography  className="margem" variant="h5" gutterBottom style={{ color: "green" }} >- MInisterio da Fenzenda -</Typography>
                </a>
                <a target="_blank" href="https://brasil.un.org/" rel="noopener noreferrer">
                    <Typography className="margem" variant="h5" gutterBottom style={{ color: "green" }} >- ONU Brasil -</Typography>
                </a>
            </Box>
            <Box>
                <h1 className="txt2C" >_____________________________________________________________________________________________________________________________________________________________</h1>
                <p className="txt2C" >
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    TELEFONE PARA CONTATO:
                    <br></br>
                    <br></br>
                    NOME:
                    <br></br>
                    <br></br>
                    ENDEREÇO:
                    <br></br>
                    <br></br>
                    PARCEIROS:
                    <br></br>
                    <br></br>
                    TENTATIVAS:
                    <br></br>
                    <br></br>
                </p>

            </Box>
        </Grid>


        // <Grid>
        //     <Box>
        //         <p>teste </p>
        //     </Box>
        // </Grid>

    )
}


export default Contato;



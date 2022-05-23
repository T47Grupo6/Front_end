import React from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import './Vitrine.css';
import { Link } from 'react-router-dom';
import CarouselComponent from '../../components/Carousel/CarouselComponent';



function Vitrine(): JSX.Element {
    


    return (
        <>
        <Grid container className='grid-vitrine'>
      <Grid item xs={12}>
        {/* <Lista /> */}
        <CarouselComponent />
      </Grid>
    </Grid>
    
            <Grid container direction='row' justifyContent='center' alignItems='center' className='fund' >
                <Grid xs={6} className="in">
                </Grid>
                <Grid alignItems='center' xs={6} >
                    <Box className='borda' >
                        <Box >
                            <h2 className="txt1V , tst , font ">O impacto e a responsabilidade que nossa plataforma carrega é o nosso grande diferencial e a principal razão pela qual trabalhamos incansavelmente para oferecer excelência e qualidade em cada ação. </h2>
                        </Box>
                        <Box>
                            <Link to = "/login" >
                                <Typography variant='subtitle1' gutterBottom align='center' className='txt1 , font '>DESEJA CONHEÇER NOSSO E-COMMERCE ? CLIQUE AQUI !</Typography>
                            </Link>
                        </Box>
                    </Box>

                </Grid>

            </Grid>
        </>
    );

}



export default Vitrine;
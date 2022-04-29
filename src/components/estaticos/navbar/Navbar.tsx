import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer " }} >
                        <Typography variant="h5" color="inherit">
                            Home
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Quem somos
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                Produtos
                                </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6"  color="inherit">
                            Mural
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" >
                            Extras
                        </Typography>
                    </Box>
                    <Box mx={1} style={{ cursor: "pointer" }}>
                        <Typography variant="h6" color="inherit" >
                            Localização
                        </Typography>
                        </Box>
                        </Box>

                        </Toolbar>
                        </AppBar>

                </>

                )
}
                export default Navbar;
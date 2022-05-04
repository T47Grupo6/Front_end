import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core'
import { Link } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense">
                    <Link to='/Home' className='text-decorator-none'>
                        <Box className="cursor" >
                            <Typography variant="h5" color="inherit">
                                SaveNature
                            </Typography>
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start">
                        <Link to='/SobreNos' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Sobre Nós
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/Produtos' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Mural
                            </Typography>
                        </Box>
                        <Link to='/Contato' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h6" color="inherit" >
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/Login' className='logout'>                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit" >
                            Logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>

        </>

    )
}
export default Navbar;
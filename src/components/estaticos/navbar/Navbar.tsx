import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" className='teste'>
                    <Link to='/Home' className="text-decorator-none">
                        <Box className="cursor">
                            <Typography variant="h3" color="inherit" >
                                SaveNature
                            </Typography>
                        </Box>
                    </Link>

                    <Box display="flex" justifyContent="start" className='direita'>
                        <Link to='/SobreNos' className="text-decorator-none">
                            <Box mx={1} className="cursor">
                                <Typography variant="h5" color="inherit">
                                    Sobre Nós
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/Produtos' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h5" color="inherit">
                                    Produtos
                                </Typography>
                            </Box>
                        </Link>
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit">
                                Mural
                            </Typography>
                        </Box>

                        <Link to='/formularioCategoria' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h5" color="inherit" >
                                    Criar Categoria
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/formularioProdutos' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h5" color="inherit" >
                                    Cadastrar Produtos
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/Contato' className='text-decorator-none'>
                            <Box mx={1} className="cursor">
                                <Typography variant="h5" color="inherit" >
                                    Contato
                                </Typography>
                            </Box>
                        </Link>
                        <Link to='/Login' className='direita2' >
                            <Box mx={1} className="cursor">
                                <Typography variant="h5" color="inherit" >
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
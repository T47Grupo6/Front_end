import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@material-ui/core'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast, ToastContainer } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static" >
            <Toolbar variant="dense" className='teste'>
                <Link to='/Vitrine' className="text-decorator-none">
                    <Box className="cursor">
                        <Typography variant="h3" color="inherit" >
                            SaveNature
                        </Typography>
                    </Box>
                </Link>

                <Box display="flex" justifyContent="start" className='direita'>
                    <Link to='/Home' className="text-decorator-none">
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit">
                                Home
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
                    <Link to='/Produto' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit">
                                Produtos
                            </Typography>
                        </Box>
                    </Link>
                   
                    <Link to='/categoria' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                        <Typography variant="h5" color="inherit">
                                Lista de Categorias
                            </Typography>
                        </Box>
                    </Link>
                    <Box mx={1} className="cursor">
                       
                    </Box>

                    <Link to='/formularioCategoria' className='text-decorator-none'>
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit" >
                                Criar Categoria
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/formularioProduto' className='text-decorator-none'>
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
                    <Box display="flex" justifyContent="start" className='text-decorator-none'>
                    <Link to='/Login' className='direita' >
                        <Box mx={1} className="cursor">
                            <Typography variant="h5" color="inherit" >
                                Logout
                            </Typography>
                        </Box>
                    </Link>
                </Box>
                </Box>
                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}
export default Navbar;
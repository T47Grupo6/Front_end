import Tema from './Categoria'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?: Tema| null
}

export default Postagem;
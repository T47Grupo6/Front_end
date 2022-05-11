import Categoria from './Categoria'

interface Produto{
    id: number;
    titulo: string;
    texto: string;
    categoria?: Categoria| null
}

export default Produto;
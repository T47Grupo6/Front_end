import Produtpo from './Produto'

interface Produto{
    id: number;
    titulo: string;
    texto: string;
    categoria?: Produto| null
}

export default Produto;
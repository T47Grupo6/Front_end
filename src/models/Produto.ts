import Categoria from './Categoria'

interface Produto{
    id: number;
    nomeProduto: string;
    preco: number;
    quantidade: number;
    descricaoProduto: string;
    fotoProduto : string;
    categoria?: Categoria| null 
   
}

export default Produto;
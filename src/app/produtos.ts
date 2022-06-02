export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidadeEstoque: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto{
    quantidade: number;
}

export const produtos: IProduto[] = [
    {id: 1, descricao: "Mouse Gamer", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 20},
    {id: 2, descricao: "Mouse Básico", preco: 212.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 10},
    {id: 3, descricao: "Mouse Intermediário", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 10},
    {id: 4, descricao: "Teclado Gamer", preco: 300.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 0},
    {id: 5, descricao: "Cadeira Gamer", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 19},
    {id: 6, descricao: "Monitor Gamer", preco: 1200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 15},
    {id: 7, descricao: "Cadeira Escritório", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 11},
    {id: 8, descricao: "Cadeira Escritório Básica", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 22},
    {id: 9, descricao: "Cadeira Escritório Confortável", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 43},
    {id: 10, descricao: "Monitor Básico", preco: 870.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 11, descricao: "Monitor Avançado", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 100},
    {id: 12, descricao: "Monitor XL 200", preco: 260.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 105},
    {id: 13, descricao: "Mouse CX766", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 109},
    {id: 14, descricao: "Mouse XC999", preco: 760.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 190},
    {id: 15, descricao: "Teclado Gamer 22", preco: 400.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 125},
    {id: 16, descricao: "Teclado Gamer CF322", preco: 900.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 17, descricao: "Teclado Gamer XCC9", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 18, descricao: "Teclado Gamer RF33", preco: 280.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 19, descricao: "Teclado Gamer GM76", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 20, descricao: "HeadSet Gamer XM", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 21, descricao: "HeadSet Gamer XM 200", preco: 2200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 55},
    {id: 22, descricao: "HeadSet Gamer XT 5", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 51},
    {id: 23, descricao: "HeadSet Gamer XL 22", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 5},
    {id: 24, descricao: "HeadSet Gamer PR22", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 5},
    {id: 25, descricao: "HeadSet Gamer 23F", preco: 200.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 50},
    {id: 26, descricao: "HeadSet Gamer GT200", preco: 280.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 4},
    {id: 27, descricao: "HeadSet Gamer GT566", preco: 2040.29, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 3},
    {id: 28, descricao: "HeadSet Gamer GR1", preco: 220.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 33},
    {id: 29, descricao: "HeadSet Gamer GR92", preco: 2320.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 8},
    {id: 30, descricao: "HeadSet Gamer GT66", preco: 182.19, descricaoPreco: "À vista no PIX", imagem: "./assets/gamer.webp", quantidadeEstoque: 10}
]
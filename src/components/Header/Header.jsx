import './Header.css'
export function Header(){
    return (
        <div class="menu">
            <div class="menu-titulos">
                <h2>uma seleção de produtos</h2>
                <h1>especial pra você</h1>
                <h3>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</h3>
            </div>
            <div class="botao">
                <button>Conheça o Linux</button>
                <button>Ajude o algoritmo</button>
                <button>Seus produtos</button>
                <button>Compartilhe</button>
            </div>
        </div>
    );
}
import './Forms.css'
export function Forms(){
    return (
        <div class="cartao-geral">
            
            <div class="cartao-esquerdo">
                <h3>Ajude o algoritmo a ser mais certeiro</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultricies tellus nec mi porta convallis
                    sollicitudin eu urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur. Praesent
                    bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
                    euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                    himenaeos.</p>
                   <p>Vestibulum vel urna tortor. Vivamus et arcu non felis tristique eleifend. Morbi eu condimentum urna.
                    Curabitur eu magna eget turpis condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed, egestas
                    erat. Etiam ultricies a ante vehicula pharetra. Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
                    varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra, magna ac luctus commodo, odio ante
                    suscipit libero, at mattis augue est vel metus.</p>
            </div>

            <div class="cartao-direito">
                <form class="cartao-login">
                    <div class="campo-de-texto">
                        <label for="usuario">Seu nome</label>
                        <input type="text" name="nome" placeholder="Nome completo"/>
                    </div>

                    <div class="campo-de-texto">
                        <label for="email">Email </label>
                        <input type="email" name="email" placeholder="Email"/>
                    </div>

                    <div class="campo-de-texto">
                        <label for="cpf">CPF</label>
                        <input type="text" name="CPF" placeholder="CPF"/>
                    </div>

                    <div class="campo-de-selecao">
                        <input type="radio" name="masculino"/>Masculino
                        <input type="radio" name="feminino"/>Feminino
                    </div>

                    <button class="botao-enviar">ENVIAR</button>
                </form>
            </div>
        </div>
    );
}
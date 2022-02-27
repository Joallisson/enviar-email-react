import React from "react";
import * as Styles from './styles'

//ÍCONES
import emailIcon from '../../Assets/emailIcon.png'
import userIcon from '../../Assets/userIcon.png'

function EmailContent(){
    return(
        <Styles.Container>
            <Styles.Content>

                <span id="faleConosco">Fale Conosco</span>

                <Styles.NameContent>
                    <label for="nameInput">NOME COMPLETO</label>
                    <input id="nameInput" type="text" placeholder="Digite o seu nome..."/>
                    <img src={userIcon} alt="emailIcon"/>
                </Styles.NameContent>

                <Styles.EmailContent>
                    <label for="emailInput">E-MAIL DE DESTINO</label>
                    <input id="emailInput" type="email" placeholder="Digite o e-mail de destino..."/>
                    <img src={emailIcon} alt="emailIcon"/>
                </Styles.EmailContent>

                <Styles.Subject>
                    <Styles.TitleContent>
                        <label for="inputTitle">TÍTULO DA MENSAGEM</label>
                        <input placeholder="Informe o assunto principal" id="inputTitle" type="text"/>
                    </Styles.TitleContent>

                    <Styles.Description>
                        <label for="inputDescription">TÍTULO DA MENSAGEM</label>
                        <textarea placeholder="Do que se trata" id="inputDescription"/>
                    </Styles.Description>
                </Styles.Subject>

                

            </Styles.Content>

            <button id="btnEnviar">Enviar</button>
        </Styles.Container>
    )
        
}

export default EmailContent
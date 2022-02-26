import React from "react";
import * as Styles from './styles'

//ÍCONES
import emailIcon from '../../Assets/emailIcon.png'

function EmailContent(){
    return(
        <Styles.Content>

            <span id="faleConosco">Fale Conosco</span>

            <Styles.NameContent>
                <label for="nameInput">NOME COMPLETO</label>
                <input id="nameInput" type="text" placeholder="Digite o seu nome..."/>
                <img src={emailIcon} alt="emailIcon"/>
            </Styles.NameContent>

            <Styles.EmailContent>
                <label for="emailInput">E-MAIL DE DESTINO</label>
                <input id="emailInput" type="email" placeholder="Digite o e-mail de destino..."/>
                <img src={emailIcon} alt="emailIcon"/>
            </Styles.EmailContent>

        </Styles.Content>
    )
        
}

export default EmailContent
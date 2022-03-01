import React, { useState } from "react";
import * as Styles from './styles'

//Importando api
import api from '../../services/api'

//ÍCONES
import emailIcon from '../../Assets/emailIcon.png'
import userIcon from '../../Assets/userIcon.png'
import sendIcon from '../../Assets/sendIcon.png'

function EmailContent(){

    const [name, setName] = useState()
    const [destinyEmail, setDestinyEmail] = useState()
    const [title, setTitle] = useState()
    const [details, setDetails] = useState()

    async function sendMail(){
        await api.post('/email/enviar', {
            name,
            destinyEmail,
            title,
            details
        }).then(response => {
            alert("Deu certo")
        })
    }

    return(
        <Styles.Container>

            <span id="faleConosco">Fale Conosco</span>

            <Styles.Content>

                <Styles.NameContent>
                    <label for="nameInput">NOME COMPLETO</label>
                    <input onChange={(changed) => {setName(changed.target.value)}} value={name} id="nameInput" type="text" placeholder="Digite o seu nome..."/>
                    <img src={userIcon} alt="emailIcon"/>
                </Styles.NameContent>

                <Styles.EmailContent>
                    <label for="emailInput">E-MAIL DE DESTINO</label>
                    <input onChange={(changed) => {setDestinyEmail(changed.target.value)}} value={destinyEmail} id="emailInput" type="email" placeholder="Digite o e-mail de destino..."/>
                    <img src={emailIcon} alt="emailIcon"/>
                </Styles.EmailContent>

                <Styles.Subject>
                    <Styles.TitleContent>
                        <label for="inputTitle">TÍTULO DA MENSAGEM</label>
                        <input onChange={(changed) => {setTitle(changed.target.value)}} value={title} placeholder="Informe o assunto principal" id="inputTitle" type="text"/>
                    </Styles.TitleContent>

                    <Styles.Description>
                        <label for="inputDescription">DETALHES DA MENSAGEM</label>
                        <textarea onChange={(changed) => {setDetails(changed.target.value)}} value={details} placeholder="Do que se trata" id="inputDescription"/>
                    </Styles.Description>
                </Styles.Subject>

                

            </Styles.Content>

            <button onClick={sendMail} id="btnEnviar">
                <img src={sendIcon} alt="sendIcon"/>
                Enviar
            </button>
        </Styles.Container>
    )
        
}

export default EmailContent
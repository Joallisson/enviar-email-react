import styled from "styled-components";

export const Content = styled.div`
    width: 650px;
    height: 550px;
    border-radius: 40px 0px 40px 0px;
    background: #0F4571;
    border: 4px solid #386DBD;
    color: #fff;
    box-shadow: -19px 15px 10px rgba(1,1,1,0.3);

    display: flex;
    flex-direction: column;
    align-items: center;

    #faleConosco{
        font-weight: bold;
        font-size: 36px;

        position: absolute;
        top: 30px;
        color: #3A3132;
    }
`

export const NameContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    
    label{
        font-weight: bold;
        margin-bottom: 3px;
    }

    input{
        padding-left: 40px;
        height: 30px;
        width: 500px;
        border-radius: 10px;
        border: none;
        font-size: 16px;
    }

    img{
        width: 25px;
        height: 18px;
        position: relative;
        bottom: 25px;
        left: 5px;
    }
`

export const EmailContent = styled.div`
    display: flex;
    flex-direction: column;

    label{
        font-weight: bold;
        margin-bottom: 3px;
    }

    input{
        padding-left: 40px;
        height: 30px;
        width: 500px;
        border-radius: 10px;
        border: none;
        font-size: 16px;
    }

    img{
        width: 25px;
        height: 18px;
        position: relative;
        bottom: 25px;
        left: 5px;
    }
`
import styled from "styled-components";

export const Container = styled.div`
    button{
        width: 161px;
        height: 64px;
        position: absolute;
        bottom: 100px;
    }
`

export const Content = styled.div`
    width: 700px;
    height: 600px;
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
        text-shadow: -5px 3px 4px rgba(1,1,1,0.3);

        position: absolute;
        top: 15px;
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
        width: 20px;
        height: 18px;
        position: relative;
        bottom: 25px;
        left: 8px;
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

export const Subject = styled.div`
    width: 630px;
    height: 340px;
    border-radius: 10px;
    background: #009DDD;
    margin-top: 45px;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TitleContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    
    label{
        font-weight: bold;
        margin-bottom: 3px;
    }

    input{
        height: 30px;
        width: 530px;
        border-radius: 10px;
        border: none;
        font-size: 16px;
        padding-left: 10px;
    }

    
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label{
        font-weight: bold;
        margin-bottom: 3px;
    }

    textarea{
        width: 530px;
        height: 170px;
        border-radius: 10px;
        font-size: 16px;
        padding-top: 10px;
        padding-left: 10px;
    }
`
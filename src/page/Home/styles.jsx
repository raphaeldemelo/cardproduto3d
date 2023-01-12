import styled from "styled-components";

export const Container = styled.div`
display: flex;
width: 100%;
height: 100vh;
align-items: center;
justify-content: center;
padding: 10%;
`;

export const Content = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
flex-wrap: wrap-reverse;
    @media screen and (min-width: 768px){
        flex-wrap: wrap-reverse;
    }
`;

export const Section = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 700px;
height: 500px;
gap: 8px;

@media screen and (max-width: 768px){
        align-items: center;
        justify-content: center;
    }
`;

export const Button = styled.button`
display: flex;
width: 50%;
height: 50px;
border-radius: 30px;
background: none;
cursor: pointer;
font-size: 20px;
align-items: center;
justify-content: center;

:hover{
    background: var(--text-product);
    color: #fff;
    transition: 0.3s;
}
`;

export const Image = styled.img`
display: flex;
width: 100%;
height: 100%;
`;

export const Product = styled.h1`
color: var(--text-product);
font-size: 60px;

@media screen and (max-width: 768px){
       font-size: 30px;
    }
`;

export const Text = styled.p`
color: var(--text-product) ;
 font-size: 20px;
`;
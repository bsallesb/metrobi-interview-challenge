import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    max-width: 1140px;
    margin: 0 auto;
    border: solid 5px #fff;
`;

export const Header = styled.header`
    text-align: center;
    background-color: var(--color-aqua-blue);
    padding: 30px;
    border: solid 5px #fff;
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const MainSection = styled.div`
    display: flex;
    flex: 8 0 80%;
`;

export const Aside = styled.aside`
    display: flex;
    flex: 4 0 40%;
    flex-direction: column;
`;

export const Article = styled.article`
    display: flex;
    flex: 6 0 60%;
    flex-direction: column;
`;

export const BottomSection = styled.div`
    display: flex;
    flex: 2 0 20%;
`;

export const Hero = styled.div`
    flex: 4.5 0 45%;
    text-align: center;
    background-color: var(--color-light-purple);
    padding: 30px;
    border: solid 5px #fff;
`;

export const Sidebar = styled.div`
    flex: 5.5 0 55%;
    text-align: center;
    background-color: var(--color-grass-green);
    padding: 30px;
    border: solid 5px #fff;
`;

export const MainContent = styled.div`
    flex: 7 0 70%;
    text-align: center;
    background-color: var(--color-gold-yellow);
    padding: 30px;
    border: solid 5px #fff;
`;

export const ExtraContent = styled.div`
    flex: 3 0 30%;
    text-align: center;
    background-color: var(--color-gray);
    padding: 30px;
    border: solid 5px #fff;
`;

export const RelatedImages = styled.div`
    flex: 7 0 70%;
    text-align: center;
    background-color: var(--color-green);
    padding: 30px;
    border: solid 5px #fff;
`;

export const RelatedPosts = styled.div`
    flex: 3 0 30%;
    text-align: center;
    background-color: var(--color-light-pink);
    padding: 30px;
    border: solid 5px #fff;
`;

export const Footer = styled.div`
    text-align: center;
    background-color: var(--color-dark-yellow);
    padding: 30px;
    border: solid 5px #fff;
`;

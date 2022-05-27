import { useEffect } from 'react';

import {
    findDuplicates,
    findHighestFloor,
    getMaxValue,
    hasValidBracketPair,
    timeArray,
} from './questions';

import {
    Article,
    Aside,
    BottomSection,
    Container,
    ExtraContent,
    Footer,
    Header,
    Hero,
    Main,
    MainContent,
    MainSection,
    RelatedImages,
    RelatedPosts,
    Sidebar,
} from './styles/styles';

const App: React.FC = () => {
    useEffect(() => {
        // Q1
        console.log(
            'findDuplicates([1, 2, 2, 3, 3, 3])',
            findDuplicates([1, 2, 2, 3, 3, 3])
        );

        // Q2
        console.log('timeArray([1, 2, 3, 4])');
        timeArray([1, 2, 3, 4]);

        // Q4
        console.log('hasValidBracketPair("")', hasValidBracketPair(''));
        console.log('hasValidBracketPair("{}")', hasValidBracketPair('{}'));
        console.log('hasValidBracketPair("{()}")', hasValidBracketPair('{()}'));
        console.log(
            'hasValidBracketPair("{([])}")',
            hasValidBracketPair('{([])}')
        );
        console.log(
            'hasValidBracketPair("{(])}")',
            hasValidBracketPair('{(])}')
        );
        console.log('hasValidBracketPair("{(}")', hasValidBracketPair('{(}'));
        console.log('hasValidBracketPair("{")', hasValidBracketPair('{'));

        // Q5
        console.log('findHighestFloor(2, 100)', findHighestFloor(2, 100));

        // Q7
        console.log(
            'getMaxValue',
            getMaxValue(
                [
                    { price: 100, kg: 5 },
                    { price: 150, kg: 7 },
                    { price: 70, kg: 3 },
                ],
                36
            )
        );
    }, []);

    return (
        <Container>
            <Header>Header</Header>
            <Main>
                <MainSection>
                    <Aside>
                        <Hero>Hero</Hero>
                        <Sidebar>Sidebar</Sidebar>
                    </Aside>
                    <Article>
                        <MainContent>
                            <p>Main Content</p>
                            <span>
                                The other questions are inside
                                &quot;/src/questions/index.ts&quot;
                            </span>
                        </MainContent>
                        <ExtraContent>Extra Content</ExtraContent>
                    </Article>
                </MainSection>
                <BottomSection>
                    <RelatedImages>Related Images</RelatedImages>
                    <RelatedPosts>Related Posts</RelatedPosts>
                </BottomSection>
            </Main>
            <Footer>Footer</Footer>
        </Container>
    );
};

export default App;

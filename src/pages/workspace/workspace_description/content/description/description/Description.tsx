import { Component } from 'react';
import { StyledDescription } from './DescriptionStyle';
import { Header } from '../header/header/Header';
import { Text } from '../text/Text';

export class Description extends Component
{
    render()
    {
        return (
            <StyledDescription>
                <Header />
                <Text />
            </StyledDescription>
        )
    }
}
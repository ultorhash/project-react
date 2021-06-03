import { Component } from 'react';
import { StyledDescription } from './DescriptionStyle';
import { Header } from '../header/header/Header';
import { Text } from '../text/Text';

export class Description extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledDescription>
                <Header title={this.props.title}/>
                <Text />
            </StyledDescription>
        )
    }
}
import { Component } from 'react';
import { StyledCategory } from './CategoryStyle';
import { InputRow } from '../input/InputRow';

export class Category extends Component<{title: string}>
{
    render()
    {
        return (
            <StyledCategory>
                <p>{this.props.title}</p>
                <InputRow placeholder={`Your ${this.props.title.toLowerCase()}. Use coma as separator.`}/>
            </StyledCategory>
        )
    }
}
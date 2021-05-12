import { Component } from 'react';
import { StyledDots } from './DotsStyle';

export class Dots extends Component
{
    render()
    {
        return (
            <StyledDots>
                <span>•••</span>
            </StyledDots>
        )
    }
}
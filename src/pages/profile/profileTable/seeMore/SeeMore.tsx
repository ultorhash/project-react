import { Component } from 'react';
import { StyledSeeMore } from './SeeMoreStyle';

export class SeeMore extends Component<{isLeft: boolean, title: string, color: string}>
{
    render()
    {
        return (
            <StyledSeeMore>
                <div style={{display: "flex", justifyContent: this.props.isLeft ? "flex-start" : "flex-end",
                backgroundColor: "transparent"}}>
                    <button><p style={{color: this.props.color}}>See more {this.props.title}</p></button>
                </div>               
            </StyledSeeMore>
        )
    }
}
import { Component } from 'react';
import { StyledFollowed } from '../followed/FollowedStyle';

export class Followed extends Component<{imgLeft: string, imgRight: string}>
{
    render()
    {
        return (
            <StyledFollowed>
                <img src={this.props.imgLeft} alt="" />
                <p>Followed</p>
                <button><img src={this.props.imgRight} alt="" /></button>
            </StyledFollowed>
        )
    }
}
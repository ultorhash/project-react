import { Component } from 'react';
import { StyledMessageInfo } from './MessageInfoStyle';

export class MessageInfo extends Component<{msg: string}>
{
    render()
    {
        return (
            <StyledMessageInfo>
                <p>{this.props.msg}</p>
            </StyledMessageInfo>
        )
    }
}
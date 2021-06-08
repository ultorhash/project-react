import { Component } from 'react';
import { StyledSubpage } from '../../reused_components/subpage/SubpageStyle';
import { Icon } from '../icon/Icon';
import { Message } from '../message/Message';

export class NotFound extends Component
{
    render()
    {
        return (
            <StyledSubpage>
                <Icon />
                <Message />
            </StyledSubpage>
        )
    }
}
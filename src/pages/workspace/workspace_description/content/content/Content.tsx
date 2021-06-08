import { Component } from 'react';
import { StyledContent } from './ContentStyle';
import { Icon } from '../icon/Icon';
import { Description } from '../description/description/Description';

export class Content extends Component<{title: string, img: string}>
{
    render()
    {
        return (
            <StyledContent>
                <Icon img={this.props.img}/>
                <Description title={this.props.title}/>
            </StyledContent>
        )
    }
}
import { Component } from 'react';
import { StyledHeader } from './HeaderStyle';
import { Description } from '../description/Description';
import { ShowOption } from '../show_option/ShowOption';

export class Header extends Component<{show: () => void, text: string}>
{
    render()
    {
        return (
            <StyledHeader>
                <Description />
                <ShowOption show={this.props.show} text={this.props.text}/>
            </StyledHeader>
        )
    }
}
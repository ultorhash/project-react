import { Component } from 'react';
import { StyledRight } from './RightStyle';
import { Edit } from '../../../../../reused_components/edit/Edit';
import { Contact } from '../contact/Contact';

export class Right extends Component<{email: string, phone: string, change: () => void}>
{
    render()
    {
        return (
            <StyledRight>
                <Edit change={this.props.change}/>
                <Contact email={this.props.email} phone={this.props.phone}/>
            </StyledRight>
        )
    }
}
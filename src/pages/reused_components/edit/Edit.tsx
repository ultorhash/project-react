import { Component } from 'react';
import { StyledEdit } from './EditStyle';

import edit from "../../../media/pencil.png";

export class Edit extends Component<{change: () => void}>
{
    render()
    {
        return (
            <StyledEdit>
                <button onClick={this.props.change}><img src={edit} alt="" /></button>
            </StyledEdit>
        )
    }
}
import { Component } from 'react';
import { StyledManageButtons } from './ManageButtonsStyle';
import { Save } from '../save/Save';
import { Exit } from '../exit/Exit';

export class ManageButtons extends Component<{change: () => void, saveChanges: () => void}>
{
    render()
    {
        return (
            <StyledManageButtons>
                <Exit change={this.props.change}/>
                <Save change={this.props.change} saveChanges={this.props.saveChanges}/>
            </StyledManageButtons>
        )
    }
}
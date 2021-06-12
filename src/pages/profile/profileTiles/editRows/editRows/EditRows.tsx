import { Component } from 'react';
import { StyledEditRows } from './EditRowsStyle';
import { ManageButtons } from '../../../../reused_components/manageButtons/ManageButtons';
import { Category } from '../category/Category';

export class EditRows extends Component<{change:() => void, saveChanges: () => void}>
{
    render()
    {
        return (
            <StyledEditRows>
                <Category title="Expertise"/>
                <Category title="Specialities"/>
                <Category title="Admission to practice law"/>
                <Category title="Countries"/>
                <ManageButtons change={this.props.change} saveChanges={this.props.saveChanges}/>
            </StyledEditRows>
        )
    }
}
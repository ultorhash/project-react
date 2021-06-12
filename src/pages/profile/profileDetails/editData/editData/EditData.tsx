import { Component } from 'react';
import { StyledEditData } from './EditDataStyle';
import { ManageButtons } from '../../../../reused_components/manageButtons/ManageButtons';
import { InputsField } from '../inputsField/inputsField/InputsField';

export class EditData extends Component<{change: () => void, saveChanges: () => void}>
{
    render()
    {
        return (
            <StyledEditData>
                <InputsField />
                <ManageButtons change={this.props.change} saveChanges={this.props.saveChanges}/>
            </StyledEditData>
        )
    }
}
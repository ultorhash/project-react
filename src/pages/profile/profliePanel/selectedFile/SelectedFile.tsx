import { Component } from 'react';
import { StyledSelectedFile } from './SelectedFileStyle';
import { StyledButton } from '../../../reused_components/manage_buttons_style/ButtonStyle';

import file from '../../../../media/file.png';

export class SelectedFile extends Component<{fileName: string, cancel: () => void}>
{
    render()
    {
        return (
            <StyledSelectedFile>
                <img src={file} alt=""/>
                <p>Selected file: {this.props.fileName}</p>
                <StyledButton>
                    <button onClick={this.props.cancel}>Change file</button>
                </StyledButton>
            </StyledSelectedFile>
        )
    }
}
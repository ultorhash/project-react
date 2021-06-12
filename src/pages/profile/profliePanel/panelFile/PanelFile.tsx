import { Component } from 'react';
import { StyledPanelFile } from './PanelFileStyle';
import { IFileStruct } from '../FileStruct';

export class PanelFile extends Component<{data: IFileStruct}>
{ 
    render()
    {
        return (
            <StyledPanelFile>
                <input type="file" onChange={(e) => this.props.data.chooseFile(e)}/>
            </StyledPanelFile>
        )
    }
}
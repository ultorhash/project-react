import { Component } from 'react';
import { StyledProfileTable } from './ProfileTableStyle';
import { DataGrid } from '../dataGrid/DataGrid';

export class ProfileTable extends Component<{header: string, isFirm: boolean}>
{
    render()
    {
        return (
            <StyledProfileTable>
                <h2>{this.props.header}</h2>
                <DataGrid isFirm={this.props.isFirm}/>
            </StyledProfileTable>
        )
    }
}
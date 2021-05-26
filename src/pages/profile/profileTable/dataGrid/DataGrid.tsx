import { Component } from 'react';
import { StyledDataGrid } from './DataGridStyle';
import { GridData } from '../../../reused_components/GridData/GridData';
import { ColumnTitle } from '../../../reused_components/ColumnTitle/ColumnTitle';

export class DataGrid extends Component<{isFirm: boolean}>
{
    render()
    {
        return (
            <StyledDataGrid>
                <ColumnTitle title="Name" hasUnderline={true}/>
                <ColumnTitle title="Entity" hasUnderline={true}/>
                <ColumnTitle title="Location" hasUnderline={true}/>
                <ColumnTitle title="Expertise" hasUnderline={true}/>
                <ColumnTitle title="Date" hasUnderline={true}/>
                <ColumnTitle title={this.props.isFirm ? "Firm" : ""} hasUnderline={true}/>
                <GridData text="Operation"/>
                <GridData text="Renault"/>
                <GridData text="France"/>
                <GridData text="#Tax"/>
                <GridData text="20/01/2018"/>
                <GridData text={this.props.isFirm ? "Racine" : ""}/>
                <GridData text="Op. Prometh"/>
                <GridData text="Renault HQ"/>
                <GridData text="USA"/>
                <GridData text={`#M${unescape('%26')}A`}/>
                <GridData text="18/02/2019"/>
                <GridData text={this.props.isFirm ? "Clifford chance" : ""}/>
                <GridData text="Op. Latandre"/>
                <GridData text="Renault Br"/>
                <GridData text="Italia"/>
                <GridData text="#Social"/>
                <GridData text="18/02/2019"/>
                <GridData text={this.props.isFirm ? "SVZ" : ""}/>
            </StyledDataGrid>
        )
    }
}
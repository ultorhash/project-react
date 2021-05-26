import { Component } from 'react';
import { StyledFeesGrid } from './FeesGridStyle';
import { ColumnTitle } from '../../../reused_components/ColumnTitle/ColumnTitle';
import { GridData } from '../../../reused_components/GridData/GridData';

export class FeesGrid extends Component
{
    render()
    {
        return (
            <StyledFeesGrid>
                <ColumnTitle title="Year" hasUnderline={false}/>
                <ColumnTitle title="Cost center" hasUnderline={false}/>
                <ColumnTitle title="Total amount" hasUnderline={false}/>
                <ColumnTitle title="Law firm" hasUnderline={false}/>
                <GridData text="2019"/>
                <GridData text="CS 153"/>
                <GridData text="3 500€"/>
                <GridData text="Clifford chance"/>
                <GridData text="2018"/>
                <GridData text="CS 153"/>
                <GridData text="9 500€"/>
                <GridData text="Linklaters"/>
            </StyledFeesGrid>
        )
    }
}
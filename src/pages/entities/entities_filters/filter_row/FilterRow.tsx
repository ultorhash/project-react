import { Component } from 'react';
import { StyledFilterRow } from './FilterRowStyle';
import { FilterDropDown } from '../../../reused_components/filter/filter_drop_down/FilterDropDown';
import { FilterExpect } from '../../../reused_components/filter/filter_expect/FilterExpect';
import { FilterInput } from '../../../reused_components/filter/filter_input/FilterInput';

export class FilterRow extends Component<{titles: string[], firstSearchHint: string, hasBetweenSearch: boolean}>
{
    render()
    {
        return (
            <StyledFilterRow>
                <FilterExpect title={this.props.titles[0]}/>
                <FilterDropDown title={this.props.titles[1]}/>
                <FilterDropDown title={this.props.titles[2]}/>
                <FilterInput hint={this.props.firstSearchHint}/>
                {this.props.hasBetweenSearch && (
                    <>
                        <FilterDropDown title="In"/>
                        <FilterInput hint="Entity..."/>
                    </>
                )}
            </StyledFilterRow>
        )
    }
}
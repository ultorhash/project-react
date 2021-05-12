import { Component } from 'react';
import { StyledEntitiesOptions } from './EntitiesOptionsStyle';
import { LeftOptions } from '../left_options/left_options/LeftOptions';
import { RightOptions } from '../right_options/right_options/RightOptions'

export class EntitiesOptions extends Component<{showFilters: () => void}>
{
    render()
    {
        return (
            <StyledEntitiesOptions>
                <LeftOptions showFilters={this.props.showFilters}/>
                <RightOptions />
            </StyledEntitiesOptions>
        )
    }
}
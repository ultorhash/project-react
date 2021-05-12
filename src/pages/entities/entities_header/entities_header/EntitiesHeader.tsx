import { Component } from 'react';
import { StyledEntitiesHeader } from './EntitiesHeaderStyle';
import { EntitiesSettings } from '../entities_settings/EntitiesSettings';
import { EntitiesLayout } from '../entities_layout/entities_layout/EntitiesLayout';

export class EntitiesHeader extends Component<{changeLayout: () => void, isTile: boolean}>
{
    render()
    {
        return (
            <StyledEntitiesHeader>
                <EntitiesSettings />
                <EntitiesLayout changeLayout={this.props.changeLayout} isTile={this.props.isTile}/>
            </StyledEntitiesHeader>
        )
    }
}
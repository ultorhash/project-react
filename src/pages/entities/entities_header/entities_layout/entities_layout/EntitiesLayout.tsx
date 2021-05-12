import { Component } from 'react';
import { StyledEntitiesLayout } from './EntitiesLayoutStyle';
import { CurrentLayout } from '../current_layout/CurrentLayout';
import { ChangeLayout } from '../change_layout/ChangeLayout';

export class EntitiesLayout extends Component<{changeLayout: () => void, isTile: boolean}>
{
    render()
    {
        return (
            <StyledEntitiesLayout>
                <CurrentLayout isTile={this.props.isTile}/>
                <ChangeLayout changeLayout={this.props.changeLayout}/>
            </StyledEntitiesLayout>
        )
    }
}
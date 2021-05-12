import { Component } from 'react';
import { StyledCurrentLayout } from './CurrentLayoutStyle';

import mozaic from '../../../../../media/mozaic.png';

export class CurrentLayout extends Component<{isTile: boolean}>
{
    render()
    {
        return (
            <StyledCurrentLayout>
                <img src={mozaic} alt="" />
                <p>{this.props.isTile ? "Mosaic" : "List"}</p>
            </StyledCurrentLayout>
        )
    }
}
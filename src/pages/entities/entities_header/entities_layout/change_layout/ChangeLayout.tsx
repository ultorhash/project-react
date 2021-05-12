import { Component } from 'react';
import { StyledChangeLayout } from './ChangeLayoutStyle';

import burger_menu from '../../../../../media/burger_menu.png';

export class ChangeLayout extends Component<{changeLayout: () => void}>
{
    render()
    {
        
        return (
            <StyledChangeLayout onClick={this.props.changeLayout}>
                <img src={burger_menu} alt="" />
            </StyledChangeLayout>
        )
    }
}
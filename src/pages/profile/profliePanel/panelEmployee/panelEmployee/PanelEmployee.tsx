import { Component } from 'react';
import { StyledPanelEmployee } from './PanelEmployeeStyle';
import { OptionWithImg } from '../../../../reused_components/option_with_img/OptionWithImg';
import { Employee } from '../employee/Employee';

import chat from '../../../../../media/chat.png';
import profile from '../../../../../media/profile.png';

export class PanelEmployee extends Component<{img: string, name: string}>
{
    render()
    {
        return (
            <StyledPanelEmployee>
                <Employee img={this.props.img} person={this.props.name}/>
                <OptionWithImg img={chat} title="Message"/>
                <OptionWithImg img={profile} title="Profile"/>
            </StyledPanelEmployee>
        )
    }
}
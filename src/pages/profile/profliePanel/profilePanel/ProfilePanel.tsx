import { Component } from 'react';
import { StyledProfilePanel } from './ProfilePanelStyle';
import { PanelDetail } from '../panelDetail/PanelDetail';
import { PanelFile } from '../panelFile/PanelFile';
import { PanelEmployee } from '../panelEmployee/panelEmployee/PanelEmployee';

export class ProfilePanel extends Component
{
    render()
    {
        return (
            <StyledProfilePanel>
                <h2>Panel informations</h2>
                <PanelDetail title="Hourly fee" text="610€/hour (Negociated)"/>
                <PanelDetail title={`Terms ${unescape('%26')} conditions`} text="610€/hour (Negociated)"/>
                <PanelFile />
                <h2>Services {unescape('%26')} projects</h2>
                <p>Corporate M{unescape('%26')}A and international acquisitions</p>
                <h2>Internal correspondants</h2>
                <PanelEmployee />
                <PanelEmployee />
            </StyledProfilePanel>
        )
    }
}
import { Component } from 'react';
import { StyledProfileTiles } from './ProfileTilesStyle';
import { TileRow } from '../tileRow/tileRow/TileRow';

import edit from '../../../../media/pencil.png';

export class ProfileTiles extends Component
{
    render()
    {
        return (
            <StyledProfileTiles>
                <TileRow title="Expertise" tiles={["Mergers and acquisition"]} img={edit}/>
                <TileRow title="Specialities" tiles={["Cross border operation", "Transaction over 500M€/$"]}/>
                <TileRow title="Admission to practice law" tiles={["Paris bar association", "Tunisian bar association"]}/>
                <TileRow title="Countries" tiles={["Tunisia"]}/>
            </StyledProfileTiles>
        )
    }
}
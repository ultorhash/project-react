import { Component } from 'react';
import { StyledTile } from './TileStyle';

export class Tile extends Component<{text: string}>
{
    render()
    {
        return (
            <StyledTile>
                <p>{this.props.text}</p>
            </StyledTile>
        )
    }
}
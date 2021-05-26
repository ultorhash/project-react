import { Component } from 'react';
import { StyledTiles } from './TilesStyle';
import { Tile } from '../tile/Tile';

export class Tiles extends Component<{tiles: string[]}>
{
    createTiles = () => {
        let elements = [];

        for (let i = 0; i < this.props.tiles.length; i++)
        {
            elements.push(<Tile text={this.props.tiles[i]}></Tile>)
        }

        return elements;
    }

    render()
    {
        
        return (
            <StyledTiles>
                {this.createTiles()}
            </StyledTiles>
        )
    }
}
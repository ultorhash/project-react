import { Component } from 'react';
import { StyledTiles } from './TilesStyle';
import { Tile } from '../tile/Tile';

export class Tiles extends Component<{tiles: string[], newData: string}>
{
    createTiles = () => {
        let elements = [];

        if (this.props.newData === undefined) {
            for (let i = 0; i < this.props.tiles.length; i++) {
                elements.push(<Tile text={this.props.tiles[i]}></Tile>)
            }
        }
        else {
            let userElements = this.props.newData.split(',');
            for (let i = 0; i < userElements.length; i++) {
                if (userElements[i] === "") elements.push(<Tile text="No data provided"></Tile>)
                else elements.push(<Tile text={userElements[i]}></Tile>)
            }
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
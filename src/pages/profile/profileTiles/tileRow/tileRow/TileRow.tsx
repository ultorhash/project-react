import { Component } from 'react';
import { StyledTileRow } from './TileRowStyle';
import { Title } from '../title/Title';
import { Tiles } from '../tiles/Tiles';

export class TileRow extends Component<{title: string, tiles: string[], img?: string}>
{
    render()
    {
        return (
            <StyledTileRow>
                <Title title={this.props.title} img={this.props.img}/>
                <Tiles tiles={this.props.tiles} />
            </StyledTileRow>
        )
    }
}
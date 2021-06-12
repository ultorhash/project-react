import { Component } from 'react';
import { StyledTileRow } from './TileRowStyle';
import { Title } from '../title/Title';
import { Tiles } from '../tiles/Tiles';

export class TileRow extends Component<{title: string, tiles: string[], newData: string}>
{
    render()
    {
        return (
            <StyledTileRow>
                <Title title={this.props.title} />
                <Tiles tiles={this.props.tiles} newData={this.props.newData}/>
            </StyledTileRow>
        )
    }
}
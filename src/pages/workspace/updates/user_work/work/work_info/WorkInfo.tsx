import { Component } from 'react';
import { StyledWorkInfo } from './WorkInfoStyle';
import { Filter } from '../../../filters/filter/Filter';

interface Data
{
    unit: string;
    change: (name: string) => void
}

export class WorkInfo extends Component<{category: string, textColor: string,
    dateInfo: string, extraStyle: boolean, data: Data, img?: string}>
{
    render()
    {
        return (
            <StyledWorkInfo>
                <Filter title={this.props.category} color="transparent" textColor={this.props.textColor}
                extraStyle={false} data={{unit: "", change: () => ("")}} img={this.props.img}/>
                <b>•</b>
                <p>{this.props.dateInfo}</p>
            </StyledWorkInfo>
        )
    }
}
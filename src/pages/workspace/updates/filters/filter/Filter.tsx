import { Component } from 'react';
import { StyledFilter } from './FilterStyle';
import { FilterColors } from '../../FilterColors';

interface Data
{
    unit: string;
    change: (name: string) => void
}

export class Filter extends Component<{title: string, color: string, textColor: string,
    extraStyle: boolean, data: Data, img?: string}>
{
    render()
    {
        const themedButton: FilterColors = {
            color: this.props.color,
            textColor: this.props.textColor,
            extraStyle: this.props.extraStyle
        }

        return (
            <StyledFilter color={this.props.color} theme={themedButton} onClick={() => this.props.data.change(this.props.title)}>
                {this.props.img && (
                    <img src={this.props.img} alt="" />
                )}
                <span>{this.props.title}</span>
            </StyledFilter>
        )
    }
}
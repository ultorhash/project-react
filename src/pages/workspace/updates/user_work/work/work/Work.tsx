import { Component } from 'react';
import { StyledWork } from './WorkStyle';
import { WorkInfo } from '../work_info/WorkInfo';

export class Work extends Component<{title: string, category: string, textColor: string, dateInfo: string, img?: string}>
{
    render()
    {
        return (
            <StyledWork className="work-element">
                <h2>{this.props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus sed
                iste atque ipsam voluptatum! Est nesciunt dolores sit molestiae saepe? Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Et, ab!</p>
                <WorkInfo category={this.props.category} textColor={this.props.textColor} dateInfo={this.props.dateInfo}
                img={this.props.img} extraStyle={false} data={{unit: "", change: () => alert("Empty")}}/>
            </StyledWork>
        )
    }
}
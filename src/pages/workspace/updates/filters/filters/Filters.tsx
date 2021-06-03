import { Component } from 'react';
import { StyledFilters } from './FiltersStyle';
import { Filter } from '../filter/Filter';

import entites from '../../../../../media/entities2.png';
import comunities from '../../../../../media/comunities.png';
import pencilpaper from '../../../../../media/pencilpaper.png';
import linesanddots from '../../../../../media/linesanddosts.png';

interface Data
{
    unit: string;
    change: (name: string) => void
}

export class Filters extends Component<{data: Data}>
{
    render()
    {
        return (
            <StyledFilters>
                <Filter title="All" color="lightgray" textColor="blue" extraStyle={true} data={this.props.data}/>
                <Filter title="SAS" color="lightgreen" textColor="#00cc44" extraStyle={true} data={this.props.data} img={entites}/>
                <Filter title="SARL" color="#ccffff" textColor="deepskyblue" extraStyle={true} data={this.props.data} img={entites}/>
                <Filter title="Secondary business" color="#ffd480" textColor="#ff9900" extraStyle={true} data={this.props.data} img={entites}/>
                <Filter title="Communities" color="darkgray" textColor="#404040" extraStyle={true} data={this.props.data} img={comunities}/>
                <Filter title="POA" color="lightgray" textColor="#404040" extraStyle={true} data={this.props.data} img={pencilpaper}/>
                <Filter title="Survey" color="white" textColor="#404040" extraStyle={true} data={this.props.data} img={linesanddots}/>
                <Filter title="..." color="white" textColor="#404040" extraStyle={true} data={this.props.data}/>
            </StyledFilters>
        )
    }
}
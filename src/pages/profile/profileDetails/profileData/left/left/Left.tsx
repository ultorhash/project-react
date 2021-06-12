import { Component } from 'react';
import { StyledLeft } from './LeftStyle';
import { Photo } from '../photo/Photo';
import { Data } from '../data/Data';
import { IPersonData } from '../../IPersonData';

export class Left extends Component<{img: string, personData: IPersonData}>
{
    render()
    {
        return (
            <StyledLeft>
                <Photo img={this.props.img}/>
                <Data personData={this.props.personData}/>
            </StyledLeft>
        )
    }
}
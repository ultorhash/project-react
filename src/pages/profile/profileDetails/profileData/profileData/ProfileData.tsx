import { Component } from 'react';
import { StyledProfileData } from './ProfileDataStyle';
import { Left } from '../left/left/Left';
import { IPersonData } from '../IPersonData';
import { Right } from '../right/right/Right';

import photo from '../../../../../media/profile-photo.png';

interface IUserBasicData {
    name: string | undefined;
    userName: string | undefined;
    email: string | undefined;
    city: string | undefined;
    phone: string | undefined;
    photo: string | undefined;
}

export class ProfileData extends Component<{user: IUserBasicData, change: () => void, newData: string[]}>
{  
    render()
    {
        let person: IPersonData = {
            name: this.props.newData[0] === undefined ?
                    this.props.user.name !== undefined ?
                    this.props.user.name : "No data received" :
                this.props.newData[0],
            userName: this.props.newData[1] === undefined ?
                    this.props.user.userName !== undefined ?
                    this.props.user.userName : "No data received" :
                this.props.newData[1],
            city: this.props.newData[2] === undefined ?
                    this.props.user.city !== undefined ?
                    this.props.user.city : "No data received" :
                this.props.newData[2],
            position: this.props.newData[3] === undefined ? "Partner" : this.props.newData[3],
        }

        return (
            <StyledProfileData>
                <Left
                    img={this.props.user.photo !== undefined ? this.props.user.photo : photo}
                    personData={person}
                />
                <Right 
                    email={this.props.newData[4] === undefined ?
                            this.props.user.email !== undefined ?
                            this.props.user.email : "No data received" :
                        this.props.newData[4]}
                    
                    phone={this.props.newData[5] === undefined ?
                            this.props.user.phone !== undefined ?
                            this.props.user.phone : "No data received" :
                            this.props.newData[5]}
                    change={this.props.change}
                />
            </StyledProfileData>
        )
    }
}
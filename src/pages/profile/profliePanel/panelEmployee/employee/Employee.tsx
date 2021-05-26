import { Component } from 'react';
import { StyledEmployee } from './EmployeeStyle';

export class Employee extends Component<{img: string, person: string}>
{
    render()
    {
        let userData: string[] = this.props.person.split(' ');
        let name: string;
        let surname: string;

        if (userData.length !== 2)
        {
            name = "unknown";
            surname = "person";
        }
        else
        {
            name = userData[0];
            surname = userData[1];
        }

        return (
            <StyledEmployee>
                <img src={this.props.img} alt="" />
                <p>{name}</p>
                <p>{surname}</p>
            </StyledEmployee>
        )
    }
}
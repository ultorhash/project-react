import { FC } from 'react';
import { StyledDropDownAccountInfo } from './DropDownAccountInfoStyle';
import { Link } from 'react-router-dom';
import { ISingleUser } from '../../../../../../../entities/SingleUser';

export const DropDownAccountInfo: FC<{profileImage: string, user: ISingleUser}> = (props) =>
{
    return (
        <StyledDropDownAccountInfo>
            <img src={props.profileImage} alt="" />
            <div>
                <p>{props.user?.name}</p>
                <Link to={{pathname: "/profile"}}
                style={{textDecoration: "none", backgroundColor: "transparent", color: "#4169E1"}}>See profile</Link>
            </div>               
        </StyledDropDownAccountInfo>
    )
}
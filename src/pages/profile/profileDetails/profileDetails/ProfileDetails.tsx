import { FC, useState } from 'react';
import { StyledProfileDetails } from './ProfileDetailsStyle';
import { Options } from '../options/Options';
import { ProfileData } from '../profileData/profileData/ProfileData';
import { EditData } from '../editData/editData/EditData'

interface IUserBasicData {
    name: string | undefined;
    userName: string | undefined;
    email: string | undefined;
    city: string | undefined;
    phone: string | undefined;
    photo: string | undefined;
}

export const ProfileDetails: FC<{user: IUserBasicData}> = (props) => 
{
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newValues, setNewValues] = useState<string[]>([]);

    const getInputsValue = () => {
        let inputs = Array.from(document.getElementsByClassName("user-data-input"));
        let values: string[] = [];

        inputs.forEach(input => {
            values.push((input as HTMLInputElement).value);
        })

        setNewValues(values);
    }

    const changeEdit = () => isEdit === true ? setIsEdit(false) : setIsEdit(true);

    return (
        <StyledProfileDetails>
            <Options />
            {!isEdit && (
                <ProfileData user={props.user} change={changeEdit} newData={newValues}/>
            )}
            {isEdit && (
                <EditData change={changeEdit} saveChanges={getInputsValue}/>
            )}
        </StyledProfileDetails>
    )
}
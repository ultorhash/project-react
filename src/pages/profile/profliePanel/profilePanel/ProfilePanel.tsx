import { FC, useState } from 'react';
import { StyledProfilePanel } from './ProfilePanelStyle';
import { PanelDetail } from '../panelDetail/PanelDetail';
import { PanelFile } from '../panelFile/PanelFile';
import { PanelEmployee } from '../panelEmployee/panelEmployee/PanelEmployee';
import { SelectedFile } from '../selectedFile/SelectedFile';
import { IFileStruct } from '../FileStruct';
import { useSelector } from 'react-redux';
import { IState } from '../../../../reducers';
import { ISingleUserReducer } from '../../../../reducers/SingleUsersReducers';
import { IUsersReducer } from '../../../../reducers/UsersReducers';

import profile_photo from '../../../../media/profile-photo.png';

export const ProfilePanel: FC = () => 
{
    const { usersList } = useSelector<IState, IUsersReducer>(globalState => ({
        ...globalState.users
    }));

    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    const [isFileSelected, setFileSelected] = useState<boolean>(false);
    const [selectedFile, setSelectFile] = useState<any>([]);

    const chooseFile = (event: any) => {
        setFileSelected(true);
        setSelectFile(event.target?.files[0]);
    }

    const cancelFile = () => {
        setFileSelected(false);
    }

    const userFile: IFileStruct = {
        selected: isFileSelected,
        files: selectedFile,
        chooseFile: chooseFile
    }

    return (
        <StyledProfilePanel>
            <h2>Panel informations</h2>
            <PanelDetail title="Hourly fee" text="610€/hour (Negociated)"/>
            <PanelDetail title={`Terms ${unescape('%26')} conditions`} text="610€/hour (Negociated)"/>

            {!isFileSelected && ( <PanelFile data={userFile}/> )}
            {isFileSelected && ( <SelectedFile fileName={selectedFile.name} cancel={cancelFile}/> )}

            <h2>Services {unescape('%26')} projects</h2>
            <p>Corporate M{unescape('%26')}A and international acquisitions</p>
            <h2>Internal correspondants</h2>

            <PanelEmployee
                img={usersList?.data[1].avatar !== undefined ? usersList?.data[1].avatar : profile_photo}
                name={singleUsersList[4]?.name !== undefined ? singleUsersList[4]?.name : "No data received"}
            />
            <PanelEmployee
                img={usersList?.data[4].avatar !== undefined ? usersList?.data[4].avatar : profile_photo}
                name={singleUsersList[1]?.name !== undefined ? singleUsersList[1]?.name : "No data received"}
            />
        </StyledProfilePanel>
    )
}
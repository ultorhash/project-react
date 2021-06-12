import { FC, useState } from 'react';
import { StyledProfileTiles } from './ProfileTilesStyle';
import { TileRow } from '../tileRow/tileRow/TileRow';
import { Edit } from '../../../reused_components/edit/Edit';
import { EditRows } from '../editRows/editRows/EditRows';

export const ProfileTiles: FC = () =>
{
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [newValues, setNewValues] = useState<string[]>([]);

    const changeEdit = () => isEdit === true ? setIsEdit(false) : setIsEdit(true);

    const getInputsValue = () => {
        let inputs = Array.from(document.getElementsByClassName("user-row-input"));
        let values: string[] = [];

        inputs.forEach(input => {
            values.push((input as HTMLInputElement).value);
        })

        setNewValues(values);
    }

    return (
        <StyledProfileTiles>
            {!isEdit && (
                <>
                    <Edit change={changeEdit}/>
                    <TileRow title="Expertise" tiles={["Mergers and acquisition"]}
                    newData={newValues[0]}/>
                    <TileRow title="Specialities" tiles={["Cross border operation", "Transaction over 500M€/$"]}
                    newData={newValues[1]}/>
                    <TileRow title="Admission to practice law" tiles={["Paris bar association", "Tunisian bar association"]}
                    newData={newValues[2]}/>
                    <TileRow title="Countries" tiles={["Tunisia"]}
                    newData={newValues[3]}/>
                </>
            )}
            {isEdit && (
                <EditRows change={changeEdit} saveChanges={getInputsValue}/>
            )}
        </StyledProfileTiles>
    )
}
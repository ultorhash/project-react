import { FC, useState } from 'react';
import { StyledWorkspaceStructs } from './WorkspaceStructsStyle';
import { Header } from '../header/header/Header';
import { Structs } from '../structs/structs/Structs';

export const WorkspaceStructs: FC = () =>
{
    const [structs_visibility, setIsVisible] = useState(true);
    const showStructs = () => structs_visibility === true ? setIsVisible(false) : setIsVisible(true);
    let textOption = structs_visibility ? "Hide" : "Show";

    return (
        <StyledWorkspaceStructs>
            <Header show={showStructs} text={textOption}/>
            {structs_visibility && (
                <Structs />
            )}
        </StyledWorkspaceStructs>
    )
}
import { FC } from 'react';
import { StyledPanelFile } from './PanelFileStyle';

export const PanelFile: FC = () =>
{ 
    return (
        <StyledPanelFile>
            <input type="file" />
        </StyledPanelFile>
    )
}
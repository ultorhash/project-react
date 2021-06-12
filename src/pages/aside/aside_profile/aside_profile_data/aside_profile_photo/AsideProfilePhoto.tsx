import { FC } from 'react';
import { StyledAsideProfilePhoto } from './AsideProfilePhotoStyle';

export const AsideProfilePhoto: FC<{imgPhoto: string}> = (props) =>
{
    return (
        <StyledAsideProfilePhoto src={props.imgPhoto} />
    )
}
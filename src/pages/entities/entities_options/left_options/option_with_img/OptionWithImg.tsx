import { FC, useState } from 'react';
import { StyledOptionWithImg } from './OptionWithImgStyle';
import { MessageInfo } from '../message_info/MessageInfo';

interface MyProps
{
    img: string;
    title: string;
    functionality?(): void;
}

export const OptionWithImg: FC<MyProps> = ({img, title, functionality}) =>
{
    const [isOpen, setIsOpen] = useState(false);
    const toogle = () => setIsOpen(!isOpen);
    const copy = functionality !== undefined ? functionality : () => {};

    setTimeout(() => {setIsOpen(false)}, 2000);

    return (
        <>
            <StyledOptionWithImg onClick={() => { toogle(); copy(); }}>
                <img src={img} alt="" />
                <span>{title}</span>
            </StyledOptionWithImg>

            {isOpen && title === "Share" && (
                <MessageInfo msg="Link copied!"/>
            )}     
        </>
    )
}
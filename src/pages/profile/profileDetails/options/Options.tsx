import { Component } from 'react';
import { StyledOptions } from './OptionsStyle';
import { OptionWithImg } from '../../../reused_components/option_with_img/OptionWithImg';

import chat from '../../../../media/chat.png';
import file from '../../../../media/file.png';
import suitcase from '../../../../media/suitcase.png';
import x from '../../../../media/x.png';

export class Options extends Component
{
    render()
    {
        return (
            <StyledOptions>
                <OptionWithImg img={chat} title="Message"/>
                <OptionWithImg img={file} title="Create a request"/>
                <OptionWithImg img={suitcase} title="Add to a cluster"/>
                <OptionWithImg img={x}/>
            </StyledOptions>
        )
    }
}
import { Component } from 'react';
import { StyledOptions } from './OptionsStyle';
import { Option } from '../option/Option';

import chat from '../../../../../media/chat.png';
import file from '../../../../../media/file.png';
import suitcase from '../../../../../media/suitcase.png';
import x from '../../../../../media/x.png';

export class Options extends Component
{
    render()
    {
        return (
            <StyledOptions>
                <Option img={chat} title="Message"/>
                <Option img={file} title="Create a request"/>
                <Option img={suitcase} title="Add to a cluster"/>
                <Option img={x}/>
            </StyledOptions>
        )
    }
}
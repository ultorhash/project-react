import { Component } from 'react';
import { StyledLeftOptions } from './LeftOptionsStyle';
import { All } from '../all/All';
import { Dots } from '../dots/Dots';
import { OptionWithImg } from '../option_with_img/OptionWithImg';
import { Resize } from '../resize/Resize';

import filter from '../../../../../media/filter.png';
import arrowsupdown from '../../../../../media/arrowsupdown.png';
import share from '../../../../../media/share.png';

export class LeftOptions extends Component<{showFilters: () => void}>
{
    render()
    {
        return (
            <StyledLeftOptions>
                <All />
                <Dots />
                <OptionWithImg img={arrowsupdown} title="Sort"/> 
                <OptionWithImg img={filter} title="Filters" functionality={this.props.showFilters}/>
                <Resize />
                <OptionWithImg img={share} title="Share" functionality={this.copyLink}/>
            </StyledLeftOptions>
        )
    }

    copyLink()
    {
        let URL: string = window.location.href;
        document.addEventListener('copy', (event: ClipboardEvent) => {
            event.clipboardData?.setData('text/plain', URL);
            event.preventDefault();
        });

        document.execCommand('copy');
    }
}
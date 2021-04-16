import { Component } from 'react';
import { StyledDropDownMenuSearch } from './DropDownSearchStyle';

export class DropDownMenuSearch extends Component
{
    render()
    {
        return (
            <StyledDropDownMenuSearch id="drop__down__search" type="text" placeholder="Filter..." onInput={this.filter}/>
        )
    }

    filter()
    {
        const SearchValue = (document.getElementById('drop__down__search')! as HTMLInputElement).value;
        const OptionsDiv = document.getElementById('drop__down__options')!;
        let options = OptionsDiv.querySelectorAll('a')!;

        if (SearchValue.length != 0)
        {
            for (let i = 0; i < options.length; i++)
            {
                let optionTitle = (options[i].children[1] as HTMLParagraphElement).innerHTML.toLowerCase();
                let titleBegin = optionTitle.substring(0, SearchValue.length).toLowerCase();

                options[i].style.display = titleBegin == SearchValue ? "flex" : "none";
            }
        }
        else options.forEach(option => option.style.display = "flex");
    }
}
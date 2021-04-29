import { Component } from 'react';
import { StyledSearchInput } from '../search_input/SearchInputStyle';

export class SearchInput extends Component<{imgSrc: string}>
{
    render()
    {
        return (
            <StyledSearchInput>
                <input type="text" placeholder="Filter by title..." id="resume__work__search__input" onInput={this.filter}/>
                <button><img src={this.props.imgSrc} alt="" /></button>
            </StyledSearchInput>
        )
    }

    filter()
    {
        const InputValue = (document.getElementById('resume__work__search__input')! as HTMLInputElement).value;
        const ResumeWorkDiv = document.getElementById('resume__work__elements')!;
        let elements = ResumeWorkDiv.getElementsByClassName('resume__work__element')!;

        if (InputValue.length !== 0)
        {
            for (let i = 0; i < elements.length; i++)
            {
                let element = (elements[i] as HTMLElement);
                let elementTitle = element.children[0];

                if (!(elementTitle.innerHTML.substr(0, InputValue.length).toLowerCase() === InputValue.toLowerCase()))
                    element.style.display = "none";              
            }
        }
        else
        {
            for (let i = 0; i < elements.length; i++)
                (elements[i] as HTMLElement).style.display = "block";
        }
    }
}
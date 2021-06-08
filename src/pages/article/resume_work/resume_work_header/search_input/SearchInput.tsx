import { Component, FormEvent } from 'react';
import { StyledSearchInput } from '../search_input/SearchInputStyle';

import search from '../../../../../media/search.svg';

export class SearchInput extends Component
{
    render()
    {
        return (
            <StyledSearchInput>
                <input type="text" placeholder="Filter by title..." id="search-resume"
                onChange={(element: FormEvent<HTMLInputElement>) => this.filter(element)}/>
                <button><img src={search} alt="" /></button>
            </StyledSearchInput>
        )
    }

    filter(element: FormEvent<HTMLInputElement>)
    {
        let inputValue: string = (document.getElementById("search-resume") as HTMLInputElement).value;
        let elements: Element[] = Array.from(document.getElementsByClassName("resume-element"));

        if (inputValue.length !== 0)
        {
            elements.forEach(el => {
                console.log(el.children[0].textContent);

                if (!(el.children[0].textContent?.substr(0, inputValue.length).toLowerCase() === inputValue.toLowerCase()))
                    el.setAttribute("style", "display: none");
                else
                    el.setAttribute("style", "display: block");
            })
        }
        else
        {
            elements.forEach(el => {
                el.setAttribute("style", "display: block");
            })
        }    
    }
}
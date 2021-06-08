import { Component } from 'react';
import { StyledDropDownMenuSearch } from './DropDownSearchStyle';

export class DropDownMenuSearch extends Component
{
    render()
    {
        return (
            <StyledDropDownMenuSearch id="drop-down-search" type="text" placeholder="Filter..." onChange={this.filter}/>
        )
    }

    filter()
    {
        let inputValue: string = (document.getElementById("drop-down-search") as HTMLInputElement).value;
        let elements: Element[] = Array.from(document.getElementsByClassName("nav-option"));

        if (inputValue.length !== 0)
        {
            elements.forEach(el => {
                console.log(el.children[1].textContent);

                if (!(el.children[1].textContent?.substr(0, inputValue.length).toLowerCase() === inputValue.toLowerCase()))
                    el.setAttribute("style", "display: none");
                else
                    el.setAttribute("style", "display: flex");
            })
        }
        else
        {
            elements.forEach(el => {
                el.setAttribute("style", "display: flex");
            })
        } 
    }
}
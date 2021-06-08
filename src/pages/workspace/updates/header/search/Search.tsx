import { Component } from 'react';
import { StyledSearch } from './SearchStyle';

export class Search extends Component<{imgSrc: string}>
{
    render()
    {
        return (
            <StyledSearch>
                <input type="text" placeholder="Filter by title..." id="search-updates" onChange={this.filter}/>
                <button><img src={this.props.imgSrc} alt="" /></button>
            </StyledSearch>
        )
    }

    filter()
    {
        let inputValue: string = (document.getElementById("search-updates") as HTMLInputElement).value;
        let elements = Array.from(document.getElementsByClassName('work-element'));
        
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
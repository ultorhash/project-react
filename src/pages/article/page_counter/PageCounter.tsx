import { Component } from 'react';
import { StyledPageCounter } from './PageCounterStyle';

export class PageCounter extends Component<{currentPage: number, maxPages: number}>
{
    render()
    {
        let page = this.props.currentPage;
        let allPages = this.props.maxPages;
        let next: string = page + 1 < 10 ? "0" + (page + 1).toString() : (page + 1).toString();
        let prev: string = page - 1 < 10 ? "0" + (page - 1).toString() : (page - 1).toString();

        return (
            <StyledPageCounter>
                <span><a href="https://www.google.com">PREVIOUS</a></span>
                <p><a href="https://www.google.com">01</a></p>
                <span>...</span>
                <p><a href="https://www.google.com">{prev}</a></p>
                <b>{page}</b>
                <p><a href="https://www.google.com">{next}</a></p>
                <span>...</span>
                <p><a href="https://www.google.com">{allPages}</a></p>
                <span><a href="https://www.google.com">NEXT</a></span>
            </StyledPageCounter>
        )
    }
}
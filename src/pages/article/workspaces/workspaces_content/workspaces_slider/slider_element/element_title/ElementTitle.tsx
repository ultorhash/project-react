import { Component } from 'react';
import { StyledElementTitle } from './ElementTitleStyle';
import { Link } from 'react-router-dom';


export class ElementTitle extends Component<{title: string, img: string}>
{
    render()
    {
        return (
            <StyledElementTitle>
                <Link to={{pathname: "/workspace", state: {title: this.props.title, img: this.props.img}}}
                style={{textDecoration: "none"}}><p>{this.props.title}</p></Link>
            </StyledElementTitle>
        )
    }
}
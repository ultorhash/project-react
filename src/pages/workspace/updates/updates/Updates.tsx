import { Component } from 'react';
import { StyledUpdates } from './UpdatesStyle';
import { Header } from '../header/header/Header';
import { Filters } from '../filters/filters/Filters';
import { UserWork } from '../user_work/user_work/UserWork';

export class Updates extends Component<{}, {name: string}> // Component<P = {}, S = {}> P - package(props), S - state(own)
{
    constructor(props: string)
    {
        super(props)
        this.state = {
            name: 'All'
        }
    }

    changeFilter(item: string)
    {
        this.setState({name: item})
    }

    render()
    {
        return (
            <StyledUpdates>
                <Header />
                <Filters data={{unit: this.state.name, change: this.changeFilter.bind(this)}}/>
                <UserWork category={this.state.name}/>
            </StyledUpdates>
        )
    }
}
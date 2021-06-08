import { useEffect } from 'react';
import { FC } from 'react';
import { Nav } from '../nav/nav/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
//import { getUsers } from '../../actions/UsersActions';
import { getUsers2 } from '../../actions/UsersActions';
import { getPublications } from '../../actions/PublicationsActions';
import { Article } from '../article/article/Article';
import styled from 'styled-components';
import { Aside } from '../aside/aside/Aside';
import { Entities } from '../entities/entities/Entities';
import { Ecosystem } from '../ecosystem/ecosystem/Ecosystem';
import { Publications } from '../publications/publications/Publications';
import { Workspace } from '../workspace/workspace/Workspace';
import { Profile } from '../profile/profile/Profile';
import { Network } from '../network/network/Network';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

//type GetUsers = ReturnType<typeof getUsers>;
type GetUsers2 = ReturnType<typeof getUsers2>;
type GetPublications = ReturnType<typeof getPublications>;

export const MainContainer: FC = () => {

    const Dispatch = useDispatch();
    useEffect(() => {
        // Dispatch<GetUsers>(getUsers());
        Dispatch<GetUsers2>(getUsers2());
        Dispatch<GetPublications>(getPublications());
    })

    return (
        <Router>
            <Nav />
            <Wrapper>
                <Aside />
                <Switch>
                    <Route path="/publications">
                        <Publications />
                    </Route>
                    <Route path="/ecosystem">
                        <Ecosystem />                      
                    </Route>
                    <Route path="/entities">
                        <Entities />
                    </Route>
                    <Route exact path="/workspace">
                        <Workspace />
                    </Route>
                    <Route exact path="/network">
                        <Network />
                    </Route>
                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/">
                        <Article />
                    </Route>
                </Switch>  
                </Wrapper>   
        </Router>
    )
}
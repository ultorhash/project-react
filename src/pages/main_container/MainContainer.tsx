import { useEffect } from 'react';
import { FC } from 'react';
import { Nav } from '../nav/nav/Nav';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/UsersActions';
import { getUsers2 } from '../../actions/UsersActions';
import { Article } from '../article/article/Article';
import styled from 'styled-components';
import { Aside } from '../aside/aside/Aside';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

type GetUsers = ReturnType<typeof getUsers>;
type GetUsers2 = ReturnType<typeof getUsers2>;

export const MainContainer: FC = () => {

    const Dispatch = useDispatch();
    useEffect(() => {
        // Dispatch<GetUsers>(getUsers());
        Dispatch<GetUsers2>(getUsers2());
    })

    return (
        <Router>
            <Nav />
            <Wrapper>
                <Aside />
                <Switch>
                    <Route exact path="/">
                        <Article />
                    </Route>
                    <Route path="/publications">
                        <div>
                            <p>cos1</p>
                        </div>
                    </Route>
                    <Route path="/ecosystem">
                        cos2                       
                    </Route>
                    <Route path="/entities">
                        cos
                    </Route>
                </Switch>  
                </Wrapper>   
        </Router>
    )
}
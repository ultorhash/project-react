import { useEffect } from 'react';
import { FC } from 'react';
import { Nav } from '../nav/nav/Nav';
import { Section } from '../section/section/Section';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getUsers } from '../../actions/UsersActions';
import { getUsers2 } from '../../actions/UsersActions';

type GetUsers = ReturnType<typeof getUsers>;
type GetUsers2 = ReturnType<typeof getUsers2>;

export const MainContainer: FC = () => {

    const Dispatch = useDispatch();
    useEffect(() => {
        // Dispatch<GetUsers>(getUsers());
        Dispatch<GetUsers2>(getUsers2());
    })

    return (
        <>
            <Nav />
            <Section>
                <Router>
                    <Switch>
                        <Route path="/publications">
                            publications
                        </Route>
                        <Route path="/ecosystem">
                            ecosystem
                        </Route>
                        <Route path="/entities">
                            entities
                        </Route>
                        <Route path="/">
                            Home
                        </Route>
                    </Switch>
                </Router>
            </Section>
        </>
    )
}
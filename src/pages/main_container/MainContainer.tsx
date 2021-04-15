import React from 'react';
import { Component } from 'react';
import { Nav } from '../nav/nav/Nav';
import { Section } from '../section/section/Section';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class MainContainer extends Component
{
    render()
    {
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
}
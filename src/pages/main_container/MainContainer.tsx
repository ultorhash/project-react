import React from 'react';
import { Component } from 'react';
import { Nav } from '../nav/nav/Nav';
import { Section } from '../section/Section';

export class MainContainer extends Component
{
    render()
    {
        return (
            <>
                <Nav />
                <Section />
            </>
        )
    }
}
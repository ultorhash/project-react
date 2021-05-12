import { Component } from 'react';
import { StyledEntitiesElementsTable, StyledEntitiesElementsList } from './EntitiesElementsStyle';
import { Element } from '../element/element/Element';

import justice from '../../../../media/justice.png';
import logo2 from '../../../../media/logo2.png';

export class EntitiesElements extends Component<{isTile: boolean}>
{
    render()
    {
        if (this.props.isTile)
        {
            return (
                <StyledEntitiesElementsTable>
                    <tr>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                    </tr>
                    <tr>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                    </tr>
                    <tr>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                    </tr>
                    <tr>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                    </tr>
                    <tr>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                        <td><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></td>
                    </tr>
                </StyledEntitiesElementsTable>
            )
        }
        else
        {
            return (
                <StyledEntitiesElementsList>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={justice} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                    <li><Element img={logo2} title="World Company SAS" content="lorem ipsum lorem ipsum lorem ipsum"/></li>
                </StyledEntitiesElementsList>
            )
        }
    }
}
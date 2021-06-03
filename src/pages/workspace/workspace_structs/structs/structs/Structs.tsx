import { Component } from 'react';
import { StyledStructs } from './StructsStyle';
import { Struct } from '../struct/Struct';

import entities from '../../../../../media/entities.svg';
import structure from '../../../../../media/structure.png';
import calendar from '../../../../../media/calendar.png';

export class Structs extends Component
{
    render()
    {
        let entitiesText = "Take a few minutes to look at the most important elements and specificates of your entities.";
        let entitiesIwnership = "Get a clear view of the ownership by looking at the relations between individuals and entities.";
        let entitiesCalendar = "Prepare future events by creating detailed plans around the life of your entity.";

        return (
            <StyledStructs>
                <Struct img={entities} title="Explore your" bolded="entities" text={entitiesText}/>
                <Struct img={structure} title="Structure the" bolded="ownership" text={entitiesIwnership}/>
                <Struct img={calendar} title="Define the" bolded="calendar" text={entitiesCalendar}/>
            </StyledStructs>
        )
    }
}
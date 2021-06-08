import { FC, useState } from 'react';
import { StyledSubpage } from '../../reused_components/subpage/SubpageStyle';
import { EntitiesHeader } from '../entities_header/entities_header/EntitiesHeader';
import { EntitiesOptions } from '../entities_options/entities_options/EntitiesOptions';
import { EntitiesElements } from '../entities_elements/entities_elements/EntitiesElements';
import { EntitiesFilters } from '../entities_filters/entities_filters/EntitiesFilters';

export const Entities: FC = () =>
{
    const [current_view, setIsChanged] = useState(false);
    const [filters, setIsOpen] = useState(false);

    const changeLayout = () => current_view === true ? setIsChanged(false) : setIsChanged(true);
    const showFilters = () => filters === true ? setIsOpen(false) : setIsOpen(true);

    return (
        <StyledSubpage style={{backgroundColor: "white"}}>
            <EntitiesHeader changeLayout={changeLayout} isTile={current_view}/>
            <EntitiesOptions showFilters={showFilters}/>
            {filters && (
                <EntitiesFilters />
            )}
            <EntitiesElements isTile={current_view}/>
        </StyledSubpage>
    )
}
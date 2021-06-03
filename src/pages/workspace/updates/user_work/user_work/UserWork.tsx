import { Component } from 'react';
import { StyledUserWork } from './UserWorkStyle';
import { Work } from '../work/work/Work';

import entites from '../../../../../media/entities2.png';

interface WorkStruct {
    title: string;
    category: string;
    textColor: string;
    dateInfo: string;
}

export class UserWork extends Component<{category: string}>
{
    render()
    {
        let workList: WorkStruct[] = [
            { title: "World Company SAS", category: "SAS",
              textColor: "#00cc44", dateInfo: "Updated 3 days ago by John doe" },
            { title: "World company MENA SARL", category: "SARL",
              textColor: "deepskyblue", dateInfo: "Updated 3 days ago by John doe" },
            { title: "World Company SAS", category: "SAS",
            textColor: "#00cc44", dateInfo: "Updated 3 days ago by John doe" },
            { title: "Other business", category: "Secondary business",
              textColor: "#ff9900", dateInfo: "Updated 3 days ago by John doe" },
            { title: "Other business", category: "Fancy business",
              textColor: "#ff9900", dateInfo: "Updated 3 days ago by John doe" },
            { title: "New Customers", category: "Communities",
              textColor: "#404040", dateInfo: "Updated 3 days ago by John doe" },
            { title: "Onboarding", category: "POA",
              textColor: "#404040", dateInfo: "Updated 3 days ago by John doe" },
        ]

        let currentFilter: string = this.props.category;

        if (currentFilter !== "All")
        {
            return (
                <StyledUserWork>
                    {workList.map(w => {
                        if (w.category === currentFilter)
                        return <Work title={w.title} category={w.category} textColor={w.textColor} dateInfo={w.dateInfo} img={entites}/>
                        else return <></>
                    })}           
                </StyledUserWork>
            )
        }
        else
        {
            return (
                <StyledUserWork>
                    {workList.map(w => {
                        return <Work title={w.title} category={w.category} textColor={w.textColor} dateInfo={w.dateInfo} img={entites}/>
                    })}
                </StyledUserWork>
            )
        }
    }
}
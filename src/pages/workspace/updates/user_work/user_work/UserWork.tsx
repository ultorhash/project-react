import { FC, useState } from 'react';
import { StyledUserWork } from './UserWorkStyle';
import { Work } from '../work/work/Work';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { IState } from '../../../../../reducers';
import { ISingleUserReducer } from '../../../../../reducers/SingleUsersReducers';

import '../../../../styles/PaginationStyles.css';
import entites from '../../../../../media/entities2.svg';

interface IWorkStruct {
    title: string;
    category: string;
    textColor: string;
}

interface IUserWorkData
{
    category: string;
}

export const UserWork: FC<IUserWorkData> = ({category}) =>
{
    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }));

    let workList: IWorkStruct[] = [
        { title: "World Company SAS", category: "SAS", textColor: "#00cc44" },
        { title: "World company MENA SARL", category: "SARL", textColor: "deepskyblue" },
        { title: "World Company SAS", category: "SAS", textColor: "#00cc44" },
        { title: "Other business", category: "Secondary business", textColor: "#ff9900" },
        { title: "Business trip", category: "Secondary business", textColor: "#ff9900" },
        { title: "New Customers", category: "Communities", textColor: "#404040" },
        { title: "Onboarding", category: "POA", textColor: "#404040" }
    ]

    const [pageNumber, setPageNumber] = useState(0);

    const worksPerPage = 5;
    const pagesVisited = pageNumber * worksPerPage;
    const pageCount = Math.ceil(workList.length / worksPerPage);

    const changePage = ({selected}: any) =>
    {
        setPageNumber(selected);
    }

    let updateDay: number = 0;
    let userIndex: number = 0;

    const displayWorks = workList.slice(pagesVisited, pagesVisited + worksPerPage).map(w => 
    {
        updateDay = Math.ceil(Math.random() * 20);
        userIndex = Math.ceil(Math.random() * 9); 

        return (
            <Work title={w.title} category={w.category} textColor={w.textColor}
            dateInfo={`Updated ${updateDay} days ago by ${singleUsersList[userIndex]?.name}`} img={entites}/>
        )
    });

    let currentFilter: string = category;
    if (currentFilter !== "All")
    {
        updateDay = Math.ceil(Math.random() * 20);
        userIndex = Math.ceil(Math.random() * 9);

        return (
            <StyledUserWork>
                {workList.map(w => {
                    if (w.category === currentFilter)                   
                    return <Work title={w.title} category={w.category} textColor={w.textColor}
                    dateInfo={`Updated ${updateDay} days ago by ${singleUsersList[userIndex]?.name}`} img={entites}/>

                    else return <></>
                })}           
            </StyledUserWork>
        )
    }
    else
    {
        return (
            <StyledUserWork>
                {displayWorks}
                <ReactPaginate previousLabel="PREVIOUS" nextLabel="NEXT" pageCount={pageCount} onPageChange={changePage}
                containerClassName="pagination-container" previousLinkClassName="previous" nextLinkClassName="next"
                disabledClassName="pagination-disabled" activeClassName="pagination-active" pageRangeDisplayed={10}
                marginPagesDisplayed={10}/>
            </StyledUserWork>
        )
    }
}
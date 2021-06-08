import { FC, useState } from 'react';
import { StyledUserWork } from './UserWorkStyle';
import { Work } from '../work/work/Work';
import ReactPaginate from 'react-paginate';
import '../../../../styles/PaginationStyles.css';

import entites from '../../../../../media/entities2.svg';

interface IWorkStruct {
    title: string;
    category: string;
    textColor: string;
    dateInfo: string;
}

interface IUserWorkData
{
    category: string;
}

export const UserWork: FC<IUserWorkData> = ({category}) =>
{
    let workList: IWorkStruct[] = [
        { title: "World Company SAS", category: "SAS",
            textColor: "#00cc44", dateInfo: "Updated 3 days ago by John doe" },
        { title: "World company MENA SARL", category: "SARL",
            textColor: "deepskyblue", dateInfo: "Updated 3 days ago by John doe" },
        { title: "World Company SAS", category: "SAS",
            textColor: "#00cc44", dateInfo: "Updated 3 days ago by John doe" },
        { title: "Other business", category: "Secondary business",
            textColor: "#ff9900", dateInfo: "Updated 3 days ago by John doe" },
        { title: "Business trip", category: "Secondary business",
            textColor: "#ff9900", dateInfo: "Updated 3 days ago by John doe" },
        { title: "New Customers", category: "Communities",
            textColor: "#404040", dateInfo: "Updated 3 days ago by John doe" },
        { title: "Onboarding", category: "POA",
            textColor: "#404040", dateInfo: "Updated 3 days ago by John doe" },
    ]

    const [pageNumber, setPageNumber] = useState(0);

    const worksPerPage = 5;
    const pagesVisited = pageNumber * worksPerPage;
    const pageCount = Math.ceil(workList.length / worksPerPage);

    const changePage = ({selected}: any) =>
    {
        setPageNumber(selected);
    }

    const displayWorks = workList.slice(pagesVisited, pagesVisited + worksPerPage).map(w => 
    {
        return (
            <Work title={w.title} category={w.category} textColor={w.textColor} dateInfo={w.dateInfo} img={entites}/>
        )
    });

    let currentFilter: string = category;
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
                {displayWorks}
                <ReactPaginate previousLabel="PREVIOUS" nextLabel="NEXT" pageCount={pageCount} onPageChange={changePage}
                containerClassName="pagination-container" previousLinkClassName="previous" nextLinkClassName="next"
                disabledClassName="pagination-disabled" activeClassName="pagination-active" pageRangeDisplayed={10}
                marginPagesDisplayed={10}/>
            </StyledUserWork>
        )
    }
}
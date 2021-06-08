import { FC, useState } from 'react';
import { StyledResumeWork } from '../resume_work/ResumeWorkStyle';
import { ResumeWorkHeader } from '../resume_work_header/resume_work_header/ResumeWorkHeader';
import { ResumeWorkElement } from '../resume_work_element/resume_work_element/ResumeWorkElement';
import ReactPaginate from 'react-paginate';
import '../../../styles/PaginationStyles.css';

interface IResumeWorkElement
{
    title: string;
}

export const ResumeWork: FC = () =>
{
    let ElementList: IResumeWorkElement[] = [
        { title: "World Company SAS" }, { title: "Contract #145" }, { title: "Corporate chages" },
        { title: "New employees" }, { title: "Those were the days..." }, { title: "New office" },
        { title: "Two teams unite" }, { title: "New target for 2021" }, { title: "Company takeover" },
        { title: "Free courses" }, { title: "Pay rises for employees" }, { title: "World Company SARL" },
        { title: "The best salesman" }, { title: "Larger branch" }, { title: "Meeting with the bosses" }
    ]

    const [pageNumber, setPageNumber] = useState(0);

    const worksPerPage = 5;
    const pagesVisited = pageNumber * worksPerPage;
    const pageCount = Math.ceil(ElementList.length / worksPerPage);

    const changePage = ({selected}: any /* number? */) =>
    {
        setPageNumber(selected);
    }

    const displayElements = ElementList.slice(pagesVisited, pagesVisited + worksPerPage).map(w => 
    {
        return (
            <ResumeWorkElement title={w.title} />
        )
    });

    return (
        <StyledResumeWork>
            <ResumeWorkHeader />
            {displayElements}
            <ReactPaginate previousLabel="PREVIOUS" nextLabel="NEXT" pageCount={pageCount} onPageChange={changePage}
            containerClassName="pagination-container" previousLinkClassName={"previous"} nextLinkClassName={"next"}
            disabledClassName={"pagination-disabled"} activeClassName={"pagination-active"} pageRangeDisplayed={10}
            marginPagesDisplayed={10}/>
        </StyledResumeWork>
    )
}
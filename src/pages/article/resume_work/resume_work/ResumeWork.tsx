import { FC, useState } from 'react';
import { StyledResumeWork } from '../resume_work/ResumeWorkStyle';
import { ResumeWorkHeader } from '../resume_work_header/resume_work_header/ResumeWorkHeader';
import { ResumeWorkElement } from '../resume_work_element/resume_work_element/ResumeWorkElement';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { IPublicationsReducer } from '../../../../reducers/PublicationsReducers';
import { IState } from '../../../../reducers';

import '../../../styles/PaginationStyles.css';
import { ISingleUserReducer } from '../../../../reducers/SingleUsersReducers';

export const ResumeWork: FC = () =>
{
    const { publicationsList } = useSelector<IState, IPublicationsReducer>(globalState => ({
        ...globalState.publications
    }));

    const { singleUsersList } = useSelector<IState, ISingleUserReducer>(globalState => ({
        ...globalState.singleUsers
    }))

    const [pageNumber, setPageNumber] = useState(0);
    const worksPerPage = 9;
    const pagesVisited = pageNumber * worksPerPage;
    const pageCount = Math.ceil(publicationsList.length / worksPerPage);

    const changePage = ({selected}: any /* number? */) =>
    {
        setPageNumber(selected);
    }

    const displayElements = publicationsList.slice(pagesVisited, pagesVisited + worksPerPage).map(w => 
    {
        let userName = "";
        singleUsersList.forEach(u => {
            if (w.userId === u.id) userName = u.name;
        })

        return (
            <ResumeWorkElement title={w.title} content={w.body} author={userName}/>
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
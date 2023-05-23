import { useDispatch, useSelector } from 'react-redux';
import classes from './pagination.module.scss';
import { setCurrentPage } from '../redux/paginationSlice';

const Pagination = ({ paintingsCount }) => {
  const curPage = useSelector((state) => state.pagination.currentPage);
  const paintingsPerPage = useSelector((state) => state.pagination.paintingsPerPage);
  const isLight = useSelector((state) => state.theme.isLight);

  const cntPages = Math.ceil(paintingsCount / paintingsPerPage);
  const dispatch = useDispatch();

  const pagesButtons = [];

  for (let i = 1; i <= cntPages; i++) {
    pagesButtons.push(i);
  }

  return (
    <section className={classes.pagination}>
      <div className="container">
        <div className="pagination__inner">
          <ul className={isLight ? classes.list : `${classes.list} ${classes.list_dark}`}>
            <li className={classes.list__item}>
              <button
                className={
                  curPage > 1
                    ? classes.list__btn
                    : `${classes.list__btn} ${classes.list__btn_disabled}`
                }
                onClick={() => dispatch(setCurrentPage(1))}
                disabled={curPage > 1 ? false : true}>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
            <li className={classes.list__item}>
              <button
                className={
                  curPage > 1
                    ? classes.list__btn
                    : `${classes.list__btn} ${classes.list__btn_disabled}`
                }
                onClick={() => dispatch(setCurrentPage(curPage - 1))}
                disabled={curPage > 1 ? false : true}>
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
            {pagesButtons.map((itm, ind) => (
              <li className={classes.list__item} key={ind}>
                <button
                  className={
                    itm === curPage
                      ? `${classes.list__btn} ${classes.list__btn_active}`
                      : classes.list__btn
                  }
                  onClick={() => dispatch(setCurrentPage(itm))}>
                  {itm}
                </button>
              </li>
            ))}
            {/* <li className={classes.list__item}>
              <button className={classes.list__btn}>{curPage}</button>
            </li>
            <li className={classes.list__item}>
              <button className={classes.list__btn}>{curPage + 1}</button>
            </li>
            <li className={classes.list__item}>
              <button className={classes.list__btn}>{curPage + 2}</button>
            </li> */}
            <li className={classes.list__item}>
              <button
                className={
                  curPage < cntPages
                    ? classes.list__btn
                    : `${classes.list__btn} ${classes.list__btn_disabled}`
                }
                onClick={() => dispatch(setCurrentPage(curPage + 1))}
                disabled={curPage < cntPages ? false : true}>
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.932837 7.13428L6.73159 12.6433C7.10046 12.9939 7.69852 12.9939 8.06721 12.6433C8.43593 12.293 8.43593 11.7248 8.06721 11.3745L2.93621 6.49991L8.06706 1.62545C8.43578 1.275 8.43578 0.706895 8.06706 0.356587C7.69834 0.00613754 7.10031 0.00613754 6.73144 0.356587L0.932687 5.86567C0.748326 6.04091 0.65625 6.27034 0.65625 6.49988C0.65625 6.72953 0.748506 6.95913 0.932837 7.13428Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
            <li className={classes.list__item}>
              <button
                className={
                  curPage < cntPages
                    ? classes.list__btn
                    : `${classes.list__btn} ${classes.list__btn_disabled}`
                }
                onClick={() => dispatch(setCurrentPage(cntPages))}
                disabled={curPage < cntPages ? false : true}>
                <svg
                  width="14"
                  height="13"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.71401 6.49988L7.80231 1.62545C8.16797 1.275 8.16797 0.706895 7.80231 0.356587C7.43665 0.00613754 6.84368 0.00613754 6.47787 0.356587L0.727266 5.86567C0.544436 6.04091 0.453125 6.27034 0.453125 6.49988C0.453125 6.72951 0.544614 6.9591 0.727266 7.13426L6.47787 12.6433C6.84368 12.9939 7.43668 12.9939 7.80231 12.6433C8.16797 12.293 8.16797 11.7248 7.80231 11.3745L2.71401 6.49988ZM13.632 11.3745C13.9977 11.7248 13.9977 12.293 13.632 12.6433C13.2663 12.9939 12.6735 12.9939 12.3075 12.6433L6.55693 7.13428C6.3741 6.95913 6.28293 6.72953 6.28293 6.49991C6.28293 6.27037 6.37427 6.04077 6.55693 5.8657L12.3075 0.356587C12.6735 0.00613754 13.2663 0.00613754 13.632 0.356587C13.9977 0.706895 13.9977 1.27498 13.632 1.62545L8.54358 6.49988L13.632 11.3745Z"
                    fill="black"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pagination;

import { useDispatch, useSelector } from 'react-redux';
import classes from './select.module.scss';

import { useRef, useState, useEffect } from 'react';
import { setAuthor } from '../../redux/filtersSlice';

const AuthorSelect = ({ name, values }) => {
  const dispatch = useDispatch();

  const [isSelectActive, setIsSelectActive] = useState(false);

  const author = useSelector((state) => state.filter.author);

  const isLight = useSelector((state) => state.theme.isLight);

  const select = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isSelectActive && select.current && !select.current.contains(e.target)) {
        setIsSelectActive(false);
      }
    };

    document.addEventListener('mousedown', checkIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isSelectActive]);

  return (
    <div
      className={isSelectActive ? `${classes.select} ${classes.select_active}` : classes.select}
      ref={select}>
      <div
        className={isLight ? classes.selected : `${classes.selected} ${classes.selected_dark}`}
        onClick={() => setIsSelectActive(!isSelectActive)}>
        <span>{name}</span>
        <div className={classes.selected__controls}>
          <svg
            className={
              author.id !== 0
                ? `${classes.selected__deleteSVG} ${classes.selected__deleteSVG_active}`
                : classes.selected__deleteSVG
            }
            onClick={() => dispatch(setAuthor({ id: 0, name: 'Author' }))}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.36474 1.21893C2.07355 0.924339 1.60144 0.924339 1.31025 1.21893C1.01906 1.51351 1.01906 1.99113 1.31025 2.28572L3.94492 4.95114L1.21644 7.71146C0.92525 8.00604 0.92525 8.48366 1.21644 8.77825C1.50763 9.07284 1.97974 9.07284 2.27093 8.77825L4.99941 6.01793L7.72779 8.77815C8.01898 9.07274 8.49109 9.07274 8.78228 8.77815C9.07347 8.48356 9.07347 8.00594 8.78228 7.71136L6.0539 4.95114L8.68848 2.28582C8.97966 1.99124 8.97967 1.51361 8.68848 1.21903C8.39729 0.92444 7.92517 0.924441 7.63399 1.21903L4.99941 3.88434L2.36474 1.21893Z"
              fill="#555555"
            />
          </svg>

          <svg
            className={
              isSelectActive
                ? `${classes.selected__arrowSVG} ${classes.selected__arrowSVG_active}`
                : classes.selected__arrowSVG
            }
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.3659e-08 1.09203 0L8.90797 6.73452e-07C9.87892 7.57113e-07 10.3652 1.15702 9.67861 1.8337Z"
              fill="black"
              fillOpacity="0.3"
            />
          </svg>
        </div>
      </div>
      <div
        className={
          isSelectActive ? `${classes.options} ${classes.options_active}` : classes.options
        }>
        <ul className={classes.options__list}>
          {values.map((item) => (
            <li
              className={classes.options__item}
              key={item.id}
              onClick={function () {
                dispatch(setAuthor(item));
                setIsSelectActive(false);
              }}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AuthorSelect;

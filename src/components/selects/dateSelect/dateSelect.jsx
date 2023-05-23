import { useState, useEffect, useRef } from 'react';
import classes from './../authorSelect/select.module.scss';
import selfClassses from './dateSelect.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTimeBefore, setTimeFrom } from '../../redux/filtersSlice';

const DateSelect = () => {
  const [isSelectActive, setIsSelectActive] = useState(false);

  const timeFrom = useSelector((state) => state.filter.timeFrom);
  const timeBefore = useSelector((state) => state.filter.timeBefore);

  const isLight = useSelector((state) => state.theme.isLight);

  const dispatch = useDispatch();

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
        className={
          isLight
            ? classes.selected
            : `${classes.selected} ${classes.selected_dark} ${selfClassses.selected_dark}`
        }
        onClick={() => setIsSelectActive(!isSelectActive)}>
        <span>Created</span>
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
      <div
        className={
          isSelectActive
            ? `${classes.options} ${classes.options_active} ${selfClassses.options}`
            : `${classes.options} ${selfClassses.options}`
        }>
        <input
          className={selfClassses.options__input}
          type="text"
          placeholder="from"
          value={timeFrom}
          onChange={(e) => dispatch(setTimeFrom(e.target.value))}
        />

        <svg
          width="13"
          height="1"
          viewBox="0 0 13 1"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="12.5" y2="0.5" stroke="black" />
        </svg>

        <input
          className={selfClassses.options__input}
          type="text"
          placeholder="before"
          value={timeBefore}
          onChange={(e) => dispatch(setTimeBefore(e.target.value))}
        />
      </div>
    </div>
  );
};

export default DateSelect;

import Search from '../search/search';
import classes from './filters.module.scss';
import AuthorSelect from '../selects/authorSelect/authorSelect';
import LocationSelect from '../selects/locationSelect/locationSelect';
import { useSelector } from 'react-redux';
import DateSelect from '../selects/dateSelect/dateSelect';

const Filters = ({ authors, locations }) => {
  const author = useSelector((state) => state.filter.author);
  const location = useSelector((state) => state.filter.location);

  const isLight = useSelector((state) => state.theme.isLight);

  return (
    <section className={classes.filters}>
      <div className="container">
        <div
          className={
            isLight
              ? classes.filters__inner
              : `${classes.filters__inner} ${classes.filters__inner_dark}`
          }>
          <Search />
          <AuthorSelect name={author.name} values={authors} />
          <LocationSelect name={location.location} values={locations} />
          <DateSelect />
        </div>
      </div>
    </section>
  );
};

export default Filters;

import classes from './painting.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Painting = ({ authorId, locationId, name, created, imageUrl }) => {
  const [authorName, setAuthorName] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    axios
      .get(`https://test-front.framework.team/authors?id=${authorId}`)
      .then((res) => {
        setAuthorName(res.data[0].name);
      })
      .catch((err) => {
        alert(err);
      });
  }, [authorId]);

  useEffect(() => {
    axios
      .get(`https://test-front.framework.team/locations?id=${locationId}`)
      .then((res) => {
        setLocation(res.data[0].location);
      })
      .catch((err) => {
        alert(err);
      });
  }, [locationId]);

  return (
    <div
      className={classes.painting}
      style={{ backgroundImage: `url('https://test-front.framework.team${imageUrl}')` }}>
      <div className={classes.painting__info}>
        <h3>{name}</h3>
        <dl className={classes.painting__list}>
          <div className={classes.row}>
            <dt>Author:</dt>
            <dd>{authorName}</dd>
          </div>
          <div className={classes.row}>
            <dt>Created:</dt>
            <dd>{created}</dd>
          </div>
          <div className={classes.row}>
            <dt>Location:</dt>
            <dd>{location}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Painting;

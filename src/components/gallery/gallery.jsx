import Painting from '../painting/painting';
import { useSelector } from 'react-redux';

import './gallery.scss';

import Loader from '../loader/loader';

const Gallery = ({ loading, paintings, authors, locations }) => {
  const author = useSelector((state) => state.filter.author);
  const location = useSelector((state) => state.filter.location);
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__inner">
          {loading ? (
            [...new Array(4)].map((_, index) => <Loader key={index} />)
          ) : paintings.length > 0 ? (
            paintings.map((pntg) => (
              <Painting {...pntg} authors={authors} locations={locations} key={pntg.id} />
            ))
          ) : (
            <div className="gallery_empty">
              {author.id !== 0 && location.id !== 0 ? (
                <p>
                  Кажется, картин с таким названием автора <span>{author.name}</span> в{' '}
                  <span>{location.location}</span> нет
                </p>
              ) : (
                <p>Попробуйте выбрать автора и локацию или написать корректное название</p>
              )}
              <svg
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                width={250}
                height={250}>
                <path d="M128,20A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212ZM76,108a16,16,0,1,1,16,16A16.01833,16.01833,0,0,1,76,108Zm104,0a16,16,0,1,1-16-16A16.01833,16.01833,0,0,1,180,108Zm-5.41113,54.18848a11.99986,11.99986,0,0,1-18.62793,15.13232,36.54519,36.54519,0,0,0-2.50489-2.77685,35.95744,35.95744,0,0,0-50.9121,0,36.49355,36.49355,0,0,0-2.50586,2.77832A12.00007,12.00007,0,1,1,81.41162,162.1875a60.71942,60.71942,0,0,1,4.16113-4.61328,59.95984,59.95984,0,0,1,84.85352-.00147A60.68228,60.68228,0,0,1,174.58887,162.18848Z" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

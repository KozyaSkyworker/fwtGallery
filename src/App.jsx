import './App.scss';
import Filters from './components/filters/filters';
import Gallery from './components/gallery/gallery';
import Header from './components/header/header';
import Pagination from './components/pagination/pagination';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const [paintings, setPaintings] = useState([]);
  const [totalPaintingsCount, setTotalPaintingsCount] = useState(0);
  const [authors, setAuthors] = useState([]);
  const [locations, setLoactions] = useState([]);

  const search = useSelector((state) => state.filter.search);
  const author = useSelector((state) => state.filter.author);
  const location = useSelector((state) => state.filter.location);
  const timeFrom = useSelector((state) => state.filter.timeFrom);
  const timeBefore = useSelector((state) => state.filter.timeBefore);

  const currentPage = useSelector((state) => state.pagination.currentPage);
  const paintingsPerPage = useSelector((state) => state.pagination.paintingsPerPage);

  const isLight = useSelector((state) => state.theme.isLight);

  useEffect(() => {
    const requestPaintings = async () => {
      setIsLoading(true);
      const res = await axios.get(
        `https://test-front.framework.team/paintings?${`q=${search}`}${
          author.id !== 0 ? `&authorId=${author.id}` : ''
        }${
          location.id !== 0 ? `&locationId=${location.id}` : ''
        }${`&created_gte=${timeFrom}&created_lte=${timeBefore}`}&_limit=${paintingsPerPage}&_page=${currentPage}`,
      );
      setPaintings(res.data);
      setIsLoading(false);
    };

    requestPaintings();
  }, [search, author, location, timeFrom, timeBefore, currentPage, paintingsPerPage]);

  useEffect(() => {
    axios
      .get(
        `https://test-front.framework.team/paintings?${`q=${search}`}${
          author.id !== 0 ? `&authorId=${author.id}` : ''
        }${
          location.id !== 0 ? `&locationId=${location.id}` : ''
        }${`&created_gte=${timeFrom}&created_lte=${timeBefore}`}`,
      )
      .then((res) => {
        setTotalPaintingsCount(res.data.length);
      })
      .catch((err) => {
        alert(err);
      });
  }, [search, author, location, timeFrom, timeBefore]);

  useEffect(() => {
    axios
      .get('https://test-front.framework.team/authors')
      .then((res) => {
        setAuthors(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get('https://test-front.framework.team/locations')
      .then((res) => {
        setLoactions(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <div className={isLight ? 'App' : 'App dark-mode'}>
      <Header />
      <main className="main">
        <Filters authors={authors} locations={locations} />
        <Gallery loading={isLoading} paintings={paintings} />
        <Pagination paintingsCount={totalPaintingsCount} />
      </main>
    </div>
  );
}

export default App;

import { Row, Switch, Tabs, Typography, Empty, message } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Background from "../../component/background/Background";
import BaseLayout from "../../component/common/BaseLayout";
import MovieItem from "../../component/movies/MovieItem";
import { Link } from "react-router-dom";
import { NOW_PLAYING, TOP_RATED } from "../../util/constant";
import { baseUrl, urlSearch } from "../../util/getUrl";

const { Title } = Typography;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [view, setView] = useState(true);
  const [loading, setLoading] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const fetAPIMovies = async (movieType = NOW_PLAYING) => {
    movieType = movieType === NOW_PLAYING ? NOW_PLAYING : TOP_RATED;
    let url = baseUrl(movieType, 1);
    if (searchKey) {
      url = urlSearch(searchKey, 1);
    }
    const response = await axios.get(url);
    if (response.status !== 200) {
      message.error("This is an error message");
    }
    if (response.status === 200) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);

      return response.data.results;
    }
  };

  useEffect(() => {
    (async () => {
      const movieDefault = await fetAPIMovies(NOW_PLAYING);
      setMovies(movieDefault);
    })();
  }, [searchKey]);

  const onTAbClick = async (key, event) => {
    const movieNew = await fetAPIMovies(key);
    setMovies(movieNew);
    setSearchKey("");
  };

  return (
    <BaseLayout>
      <Background setSearchKey={setSearchKey} />
      <div style={{ padding: "50px 10%" }}>
        <Row justify="space-between" align="middle">
          <Tabs defaultActiveKey={NOW_PLAYING} onTabClick={onTAbClick}>
            <Tabs.TabPane tab="Now Playing" key={NOW_PLAYING} />
            <Tabs.TabPane tab="Top Rated" key={TOP_RATED} />
          </Tabs>
          <div className="d-flex">
            <Switch
              defaultChecked
              onChange={(checked) => {
                setLoading(true);
                setView(checked);
                setTimeout(() => {
                  setLoading(false);
                }, 500);
              }}
            />
            <Title level={5} className="ml-2">
              {view ? "List View" : "Vertical View"}
            </Title>
          </div>
        </Row>

        <div
          className={`movieList ${
            view ? "movieList--horizon" : "movieList--vertical"
          }`}
        >
          {movies.length || !searchKey ? (
            movies.map((movie) => {
              const { title, release_date, poster_path, vote_average } = movie;
              return (
                <Link to={`/movie/${movie.id}`}>
                  <MovieItem
                    key={movie.id}
                    title={title}
                    releaseDate={release_date}
                    posterPath={poster_path}
                    voteAverage={vote_average}
                    loading={loading}
                  />
                </Link>
              );
            })
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default MovieList;

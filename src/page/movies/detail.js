import { Col, Row, Typography, Image } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BaseLayout from "../../component/common/BaseLayout";
import { BG_Detail, IMG_POSTER } from "../../util/constant";
import { urlMovieDetail } from "../../util/getUrl";

const { Title, Paragraph } = Typography;

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    (async () => {
      const response = await axios.get(urlMovieDetail(id));
      if (response.status === 200) {
        setMovie(response.data);
      }
    })();
  }, [id]);
  return (
    <BaseLayout>
      <div
        className="header"
        style={{
          backgroundImage: `url("${BG_Detail}${movie?.backdrop_path}")`,
        }}
      >
        <div className="header__bg">
          <Row className="header__container">
            <Col span={6}>
              <Image
                preview={false}
                src={IMG_POSTER + movie.poster_path}
                alt={IMG_POSTER + movie.poster_path}
              />
            </Col>
            <Col span={18}>
              <Title level={3}>{movie?.title}</Title>
              <Paragraph>
                {movie?.status}: {movie?.releaseDate}
              </Paragraph>
              <Title level={5}>Overview</Title>
              <Paragraph>
                <blockquote>{movie?.overview} </blockquote>
              </Paragraph>
              <Row gutter={16}>
                <Col span={12}>
                  <Title level={5}>Companies</Title>
                  {movie?.production_companies?.map((company) => {
                    return (
                      <div
                        style={{ display: "flex", alignItems: "center" }}
                        key={company.id}
                      >
                        <Paragraph className="ml-2">
                          <pre
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            {company.logo_path ? (
                              <Image
                                style={{
                                  width: 100,
                                  marginRight: 10,
                                }}
                                preview={false}
                                src={
                                  "https://image.tmdb.org/t/p/w200/" +
                                  company.logo_path
                                }
                              />
                            ) : (
                              ""
                            )}

                            {company.name}
                            {company.origin_country
                              ? ` - ${company.origin_country}`
                              : ""}
                          </pre>
                        </Paragraph>
                      </div>
                    );
                  })}
                </Col>
                <Col span={12}>
                  <Title level={5}>Countries</Title>
                  {movie?.production_countries?.map((country) => {
                    return (
                      <Paragraph key={country.index}>
                        <pre>{country.name}</pre>
                      </Paragraph>
                    );
                  })}
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </BaseLayout>
  );
};

export default MovieDetail;

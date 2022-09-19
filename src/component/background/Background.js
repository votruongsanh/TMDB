import React from "react";
import { Row, Input, Grid } from "antd";
import BackGround from "../../assets/img/back-ground.jpg";
const { Search } = Input;
const { useBreakpoint } = Grid;

const Background = (props) => {
  const { setSearchKey = () => {} } = props;
  const { lg } = useBreakpoint();
  const fontSizeH1 = lg ? "45px" : "35px";
  const fontSizeH2 = lg ? "36px" : "24px";

  const onSearch = (value) => {
    setSearchKey(value);
  };

  return (
    <div className="Background">
      <img className="img" src={BackGround} alt="back-ground" />
      <div class="overlay" />
      <div className="Background__content">
        <Row style={{ fontSize: fontSizeH1 }} className="h1">
          Welcome.
        </Row>
        <Row style={{ fontSize: fontSizeH2 }} className="h2" level={2}>
          Millions of movies, TV shows and people to discover. Explore now.
        </Row>
        <Search
          placeholder="Search for a movie, tv show, person......"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
      </div>
    </div>
  );
};

export default Background;

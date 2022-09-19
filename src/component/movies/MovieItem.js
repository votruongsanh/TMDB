import VoteAverage from "../common/VoteAverage";
import { Card, Image, Skeleton } from "antd";
const { Meta } = Card;

const MovieItem = ({
  title,
  releaseDate,
  posterPath,
  voteAverage,
  loading,
}) => {
  return (
    <>
      {loading ? (
        <Skeleton.Image
          active
          style={{ minWidth: "240px", height: "491px" }}
        ></Skeleton.Image>
      ) : (
        <Card
          className="MovieItem"
          hoverable
          style={{
            width: 240,
          }}
          cover={
            <Image
              preview={false}
              src={"https://image.tmdb.org/t/p/w300" + posterPath}
              alt={posterPath}
            />
          }
        >
          <VoteAverage voteAverage={voteAverage} />
          <Meta title={title} description={releaseDate} />
        </Card>
      )}
    </>
  );
};

export default MovieItem;

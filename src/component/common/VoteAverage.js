import { Progress } from "antd";

const VoteAverage = ({ voteAverage }) => {
  const percent = (voteAverage * 100) / 10;
  return (
    <Progress
      className="progress"
      type="circle"
      percent={percent}
      strokeColor="#21cd79"
      trailColor="#081c22"
      strokeWidth="8"
      width={35}
      format={(percent) => (
        <span className="progress__percent">{percent}%</span>
      )}
    />
  );
};

export default VoteAverage;

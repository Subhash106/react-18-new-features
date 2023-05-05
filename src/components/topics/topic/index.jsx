import { useParams } from "react-router-dom";

const Topic = () => {
  const { topicId } = useParams();

  return <p>Select topic is {topicId}</p>;
};

export default Topic;

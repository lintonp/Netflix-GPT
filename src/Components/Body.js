import { useSelector } from "react-redux";

const Body = () => {
  const user = useSelector((store) => store.state);
  console.log(user);
  return <div className="text-white mt-14">Hello</div>;
};

export default Body;

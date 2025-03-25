import { useParams } from "react-router-dom";
import DefaultProfile from "./defProfile";
import Spinach from "./spinach";
import Popeye from "./popeye";
import Test from "./test";
import ErrorPage from "./notFound";

const Profile = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "test" ? <Test /> : name === "popeye" ? <Popeye /> : name === "spinach" ? <Spinach /> : <DefaultProfile />}
    </div>
  );
};

export default Profile;

import useFetch from "../hooks/useFetch";
import UserRepos from "./UserRepos";
import UserInfo from "./UserInfo";
import Loader from "./Loader";
import Error404 from "../Error";

function GithubUser({ login }) {
  const [data, loading, error] = useFetch( login ? `https://api.github.com/users/${login}` : null);
  
  if (loading) return <Loader />;
  if (error) return <Error404 message={'something went wrong...'} />;
  if (!data) return;
  return (
    <>
       <UserInfo data={data} />
      <UserRepos login={data.login }/>
    </>
  )
}

export default GithubUser
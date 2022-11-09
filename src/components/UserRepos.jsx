import React from 'react'
import useFetch from '../hooks/useFetch'; 
import Repo from './Repo';
import Loader from './Loader';


function UserRepos({login}) {
    const [data, loading, error] = useFetch(login ? `https://api.github.com/users/${login}/repos` : null);

  if (loading) return <Loader/>;
    if (error) return <h1>Something went wrong...</h1>
    if (!data) return;
    
  return (
      <div className='repos padding-x-sm padding-y-sm '>
          {data && data.map(item => {
            return <Repo key={item.id} name={item.name} description={item.description} visibility={item.visibility} url={ item.svn_url } />
          })}
    </div>    
  )
}

export default UserRepos
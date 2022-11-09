import './App.css';
import GithubUser from './components/GithubUser';
import { useState,useRef } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const user = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    setSearch(user.current.value)
  }
  return (
    <div className='app mx-auto'>
      <form onSubmit={(e) => { handleSubmit(e) }} className='mx-auto'>
        <input ref={user}  type="search" placeholder='Enter username' className='padding-x-md mx-auto' />
      </form>
      <section className='account'>
      <GithubUser login={search}/>
      </section>
    </div>
  )
}

export default App


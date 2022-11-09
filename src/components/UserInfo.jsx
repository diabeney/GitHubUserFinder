import Error404 from "../Error"

function UserInfo({ data }) {
    
    if (data.message) return <Error404 message={data.message} />

    return (
        <div key={data.id} className='details text-cen' >
            <img src={data.avatar_url} alt={data.name} />
            <h1 className="padding-y-md">{data.name}</h1>
            <h4 className="padding-y-sm">@{ data.login}</h4>
            <p className="padding-y-sm">{data.bio}</p>
            <p className="padding-y-sm">{data.location}</p>
            <section className="padding-y-sm">
             <span className="padding-x-sm">Followers: {data.followers }</span>
             <span>Following: {data.following}</span>
            </section>
            <p>Public Repositories {data.public_repos}</p>
         </div>)
}

export default UserInfo

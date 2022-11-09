import React from 'react'

function Repo({name,description,visibility,url}) {
  return (
      <div className='repo-details padding-x-md padding-y-sm'>
      <h2 className='padding-y-sm'><a href={url } target={'_blank'}>{name}</a></h2>
          <p className='padding-y-sm'>{description || 'No description'}</p>
          <span className='padding-y-sm'>{visibility}</span>
    </div>
  )
}

export default Repo
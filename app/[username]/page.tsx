import React from 'react'

interface MyComponentProps {
    params : {
        username: string;
    }
}

const Username : React.FC<MyComponentProps>  = ({params}) => {
  return (
    <div>
        {params.username}
    </div>
  )
}

export default Username

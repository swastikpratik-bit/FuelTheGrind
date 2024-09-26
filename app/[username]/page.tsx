import PaymentPage from '@/components/PaymentPage';
import React from 'react'

interface MyComponentProps {
    params : {
        username: string;
    }
}

const Username : React.FC<MyComponentProps>  = ({params}) => {
  return (

  <>
    <PaymentPage params={params}/>  
  </>
  )
}

export default Username

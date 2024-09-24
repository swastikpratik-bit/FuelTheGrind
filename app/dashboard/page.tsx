"use client"  
import Dashboard from '@/components/Dashboard';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import React from 'react'

const Page = () => {
  const {data : session } = useSession();
  
  if(!session){
    const router = useRouter();
    router.push("/login")
  }

  return (
    <div>
      <Dashboard/>

    </div>
  )
}

export default Page;

"use client";
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { fetchuser, updateProfile } from '@/actions/useractions'
import { notFound } from 'next/navigation';

const Dashboard = () => {
  const { data: session , update } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilePicture: "",
    coverImage: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
    else{
      getData();
    }
  }, []);

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setForm(u)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleAction =  async (e) => {

  
    let a = await updateProfile(e, session.user.name)
    toast('Profile Updated', {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  }



  return (
    <div>
       <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
      />

      <ToastContainer />

      <h1 className="text-center my-5 text-3xl font-bold text-slate-400">
        Welcome to Dashboard
      </h1>

      <form className="max-w-2xl mx-auto flex flex-col gap-3 mb-8" action={handleAction}>
        <div className="my-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
            value={form.name}
            type="text"
            onChange={handleChange}
            name="name"
            id="name"
            className="block w-full p-3 text-gray-200 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email
          </label>
          <input
            value={form.email}
            type="text"
            onChange={handleChange}
            name="email"
            id="email"
            className="block w-full p-3 text-gray-900 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            value={form.username}
            type="text"
            onChange={handleChange}
            name="username"
            id="username"
            className="block w-full p-3 text-gray-900 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="profilePicture"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Profile Picture
          </label>
          <input
            value={form.profilePicture}
            type="text"
            onChange={handleChange}
            name="profilePicture"
            id="profilePicture"
            className="block w-full p-3 text-gray-900 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="coverImage"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cover Picture
          </label>
          <input
            value={form.coverImage}
            type="text"
            onChange={handleChange}
            name="coverImage"
            id="coverImage"
            className="block w-full p-3 text-gray-900 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="razorpayId"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            RazorPay Id
          </label>
          <input
            value={form.razorpayId}
            type="text"
            onChange={handleChange}
            name="razorpayId"
            id="razorpayId"
            className="block w-full p-3 text-gray-900 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="razorpaySecret"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            RazorPay Secret
          </label>
          <input
            value={form.razorpaySecret}
            type="text"
            onChange={handleChange}
            name="razorpaySecret"
            id="razorpaySecret"
            className="block w-full p-3 text-gray-900 border-gray-300 rounded-lg bg-gray-700 text-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="text-white justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Dashboard;

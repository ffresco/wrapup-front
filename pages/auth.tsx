import Head from 'next/head'
import AuthLayout from '../layouts/auth'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../store/actions/login'

export default function Auth() {
  const [formData, setFormData] = useState({})
  const { error } = useSelector((state: any) => state.login)
  const router = useRouter()
  const dispatch = useDispatch()

  const handleClickSignIn = () => {
    dispatch(fetchLogin(formData))
  }

  return (
    <AuthLayout>
      <Head>
        <title>Blockchain - Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full max-w-xs">
        <p className="mb-5 text-center">
          <Image
            src="/logo.svg"
            width={125}
            height={45}
            onClick={() => router.push('/')}
          />
        </p>
        <form className="mb-4 rounded bg-white px-8 pt-6 pb-8 shadow-md">
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Username
            </label>
            <input
              className="focus:shadow-outline focus:outline-none w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow"
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              className="focus:shadow-outline focus:outline-none mb-3 w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow"
              id="password"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          {error && (
            <div
              className="relative mb-3 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
              role="alert"
            >
              <span className="block sm:inline">{error}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg
                  className="h-6 w-6 fill-current text-red-500"
                  role="button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <title>Close</title>
                  <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
              </span>
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline focus:outline-none rounded bg-water-green-500 py-2 px-4 font-bold text-white hover:bg-water-green-700"
              type="button"
              onClick={handleClickSignIn}
            >
              Sign In
            </button>
            <Link href="/forgot-password">
              <a className="inline-block align-baseline text-sm font-bold text-water-green-500 hover:text-water-green-800">
                Forgot Password?
              </a>
            </Link>
          </div>
        </form>
        <p className="text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()}
        </p>
      </div>
    </AuthLayout>
  )
}

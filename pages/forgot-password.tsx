import Head from 'next/head'
import AuthLayout from '../layouts/auth'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function ForgotPassword() {
  const router = useRouter()
  const handleClickForgotPassword = () => {}

  return (
    <AuthLayout>
      <Head>
        <title>Blockchain - Forgot Password</title>
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
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline focus:outline-none rounded bg-water-green-500 py-2 px-4 font-bold text-white hover:bg-water-green-700"
              type="button"
              onClick={handleClickForgotPassword}
            >
              Send
            </button>
            <Link href="/auth">
              <a className="inline-block align-baseline text-sm font-bold text-water-green-500 hover:text-water-green-800">
                Sign In
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

import { Fragment, ReactNode } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { CollectionIcon, TruckIcon, UsersIcon } from '@heroicons/react/solid'

type LayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children, ...props }: LayoutProps) {
  const { name, email } = useSelector((state: any) => state.profile)

  const menuItems: any = [
    {
      groupName: 'Menu',
      group: [
        {
          name: 'Ingredients',
          icon: <CollectionIcon className="h-6 w-6 fill-current" />,
        },
        {
          name: 'Menu',
          icon: <UsersIcon className="h-6 w-6 fill-current" />,
        },
        {
          name: 'Order',
          icon: <TruckIcon className="h-6 w-6 fill-current" />,
        },
      ],
    },
  ]

  return (
    <Fragment>
      <div className="grid h-screen w-full grid-cols-6 gap-4 bg-gray-200">
        <div className="col-span-1 col-start-1 grid h-screen bg-white shadow-md">
          <aside>
            <p className="mt-5 text-center">
              <Image src="/logo.svg" width={200} height={100} />
            </p>
            <div className="border-b p-5  text-center">
              <img
                className="mx-auto h-24 w-24 rounded-full"
                src="/profile.jpg"
                alt="Usuario Invitado"
              />
              <p className="pt-2 text-lg font-semibold">
                <Link href="/profile">
                  <span className="inline-block align-baseline text-sm font-bold text-water-green-500 hover:text-water-green-800">
                    {name}
                  </span>
                </Link>
              </p>
              <p className="text-sm text-gray-600">{email}</p>
              <br />

              <div className="mt-5 mb-2">
                <Link href="/auth">
                  <a className="rounded-full border py-2 px-4 text-xs font-semibold text-gray-700">
                    Log out
                  </a>
                </Link>
              </div>
            </div>
            <div className="py-10 px-10">
              <ul>
                {menuItems.map((item: any) => (
                  <li key={`sidebar_menu_${item.groupName}`}>
                    <span className="font-bold">{item.groupName}</span>
                    <ul>
                      {item.group.map((groupElement: any) => (
                        <li
                          key={`sidebar_menu_${groupElement.name}`}
                          className="ml-5"
                        >
                          <a
                            href="#"
                            className="flex items-start gap-x-4 py-2 text-gray-500 hover:text-water-green-500"
                          >
                            {groupElement.icon}
                            <span>{groupElement.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="col-start-2 col-end-6 grid h-screen">
          <main className="flex-1">
            <div className="flex items-center justify-between py-7 px-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DashboardLayout from '../layouts/dashboard'
import { fetchDasboard, orderMenu } from '../store/actions/dashboard'

import MenuIngredientModal from '../components/modal/menu-ingredients-modal'
import { testWs } from '../store/services/dashboard'

//initial state for for the data used order button, to create a orden
export default function Dashboard() {
  const stateDashboard = useSelector((state: any) => state.dashboard.data)
  const { menus, ingredients, order } = stateDashboard
  console.log('estado dashboard', stateDashboard)

  useEffect(() => {
    console.log('estado dashboard al cargar', menus, ingredients, order)
  }, [menus, ingredients])

  useEffect(() => {
    console.log('estado dashboard al ordernar', menus, ingredients, order)
    dispatch(fetchDasboard())
  }, [order])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchDasboard())
  }, [])

  const [isOpenMenuIngredientModal, setisOpenMenuIngredientModal] =
    useState(false) //state to open and close the timeline modal

  //Ordeno un nuevo pedido
  const handleNewOrder = async (menu: any) => {
    dispatch(orderMenu(menu.cod, 1))
  }

  const handleOpenMenuIngredientModal = async (container: any) => {
    //const timeline = await getContainerHistory(container.id)
    //setTimeLineData(timeline.data)
    setisOpenMenuIngredientModal(true)
  }

  const handleCloseTimeLineModal = () => {
    //setTimeLineData([])
    setisOpenMenuIngredientModal(!isOpenMenuIngredientModal)
  }

  async function handleCallWs() {
    console.log('call ws')
    const response = await testWs(1)
    console.log(response)
  }

  return (
    <DashboardLayout>
      <Head>
        <title>🍔 Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isOpenMenuIngredientModal && (
        <MenuIngredientModal
          onClose={handleCloseTimeLineModal}
        ></MenuIngredientModal>
      )}

      <div className="container mx-auto w-full">
        <div className="mb-16 w-full px-4 leading-normal text-gray-800 md:mt-8 md:px-0">
          <div className="flex flex-wrap">
            <div className="w-full p-3 md:w-1/2 xl:w-1/3">
              <div className="rounded border bg-white p-2 shadow">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded bg-green-600 p-3">
                      <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                    </div>
                  </div>

                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">menus</h5>

                    <h3 className="text-3xl font-bold">
                      {Array.isArray(menus) ? menus.length : 0}
                      <span className="text-green-500">
                        <i className="fas fa-caret-up"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 xl:w-1/3">
              <div className="rounded border bg-white p-2 shadow">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded bg-pink-600 p-3">
                      <i className="fas fa-users fa-2x fa-fw fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Ingredients
                    </h5>
                    <h3 className="text-3xl font-bold">
                      {Array.isArray(ingredients) ? ingredients.length : 0}
                      <span className="text-pink-500">
                        <i className="fas fa-exchange-alt"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-3 md:w-1/2 xl:w-1/3">
              <div className="rounded border bg-white p-2 shadow">
                <div className="flex flex-row items-center">
                  <div className="flex-shrink pr-4">
                    <div className="rounded bg-yellow-600 p-3">
                      <i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
                    </div>
                  </div>
                  <div className="flex-1 text-right md:text-center">
                    <h5 className="font-bold uppercase text-gray-500">
                      Orders
                    </h5>
                    <h3 className="text-3xl font-bold">
                      {Array.isArray(menus)
                        ? menus.reduce((total, menu) => total + menu.orders, 0)
                        : 0}
                      <span className="text-yellow-600">
                        <i className="fas fa-caret-up"></i>
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-3">
            <div className="rounded border bg-white shadow">
              <div className="border-b p-3">
                <h5 className="font-bold uppercase text-gray-600">menus</h5>
              </div>
              <div className="p-5">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-3 px-3 text-left text-blue-900">
                          #ID
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900 ">
                          Description
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Available
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Orders
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Create At
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Last Order
                        </th>
                        <th className="py-3 px-3 text-center text-blue-900">
                          Actions
                          <button
                            onClick={() => handleCallWs()}
                            className="ml-4 rounded-full border py-2 px-2 text-xs font-semibold text-water-green-500"
                          >
                            Add
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Array.isArray(menus) &&
                        menus.map((menu, idx) => (
                          <tr key={`menus_${idx}`}>
                            <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-gray-900">
                              {menu.cod}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-gray-900">
                              {menu.description}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-gray-900">
                              {menu.available ? 'Yes' : 'No'}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-gray-900">
                              {menu.orders}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-gray-900">
                              {menu.createdAt}
                            </td>
                            <td className="whitespace-nowrap px-3 py-3 text-sm font-medium text-gray-900">
                              {menu.updatedAt}
                            </td>

                            <td className="whitespace-nowrap px-3 py-3 text-center text-sm font-medium text-gray-900">
                              <button
                                onClick={() => alert('delete')}
                                className="rounded-full border py-2 px-4 text-xs font-semibold text-red-500"
                              >
                                Del
                              </button>
                              {menu.available && (
                                <button
                                  onClick={() => handleNewOrder(menu)}
                                  className="rounded-full border py-2 px-2 text-xs font-semibold text-blue-500"
                                >
                                  Order
                                </button>
                              )}

                              <button
                                onClick={() =>
                                  handleOpenMenuIngredientModal(menu)
                                }
                                className="rounded-full border bg-blue-300 py-2 px-2 text-xs font-semibold text-white"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-3">
            <div className="rounded border bg-white shadow">
              <div className="border-b p-3">
                <h5 className="font-bold uppercase text-gray-600">
                  Ingredients
                </h5>
              </div>
              <div className="p-5">
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="py-3 px-3 text-left text-blue-900">
                          #Cod
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Description
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Stock
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Create At
                        </th>
                        <th className="py-3 px-3 text-left text-blue-900">
                          Last update
                        </th>
                        <th className="py-3 px-3 text-center text-blue-900">
                          Actions
                          <button
                            onClick={() => alert('create')}
                            className="ml-4 rounded-full border py-2 px-2 text-xs font-semibold text-water-green-500"
                          >
                            Add
                          </button>
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {Array.isArray(ingredients) &&
                        ingredients.map((ingredient, idx) => (
                          <tr key={`ingredients_${idx}`}>
                            <td className="whitespace-nowrap py-3 px-3 text-sm font-medium text-gray-900">
                              {ingredient.cod}
                            </td>
                            <td className="whitespace-nowrap py-3 px-3 text-sm font-medium text-gray-900">
                              {ingredient.description}
                            </td>
                            <td className="whitespace-nowrap py-3 px-3 text-sm font-medium text-gray-900">
                              {ingredient.stock}
                            </td>
                            <td className="whitespace-nowrap py-3 px-3 text-sm font-medium text-gray-900">
                              {ingredient.createdAt}
                            </td>
                            <td className="whitespace-nowrap py-3 px-3 text-sm font-medium text-gray-900">
                              {ingredient.updatedAt}
                            </td>
                            <td className="whitespace-nowrap py-3 px-3 text-center text-sm font-medium text-gray-900">
                              <button
                                onClick={() => alert('delete')}
                                className="rounded-full border py-2 px-4 text-xs font-semibold text-red-500"
                              >
                                Del
                              </button>

                              <button
                                onClick={() =>
                                  handleOpenMenuIngredientModal(ingredient)
                                }
                                className="rounded-full border bg-blue-300 py-2 px-2 text-xs font-semibold text-white"
                              >
                                View
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

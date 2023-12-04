import { Fragment, ReactNode, useEffect, useState } from 'react'
import DropDownList from '../dropDownList/drop-down-list'
import ImageSelector from '../image-selector/image-selector'
import DenseTable from '../table/dense-table'

type LayoutProps = {
  onClose: any
}

export default function MenuIngredientModal({
  onClose,
  ...props
}: LayoutProps) {
  return (
    <Fragment>
      <div
        className="h-modal fixed right-0 left-0 top-4 z-50 flex h-screen items-center justify-center  overflow-y-auto overflow-x-hidden shadow-xl transition-all sm:h-full md:inset-0"
        id="exampleModalScrollable"
        aria-labelledby="exampleModalScrollableLabel"
      >
        {/*fondo gris*/}
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
        ></div>

        {/*h-full w-full control tamaño*/}

        <div className="modal-dialog modal-dialog-scrollable pointer-events-none relative h-full w-auto w-full max-w-4xl px-4 ">
          <div className="outline-none modal-content pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg">
            <div className="modal-header flex flex-shrink-0 items-center justify-between rounded-t-md border-b border-gray-200 p-4">
              <h5
                className="text-xl font-medium leading-normal text-gray-800"
                id="exampleModalScrollableLabel"
              >
                Menu - Ingredients
              </h5>
              <button
                type="button"
                className="focus:outline-none btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>

            <DenseTable />
            <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <button
                type="button"
                className="focus:shadow-outline focus:outline-none ml-2 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

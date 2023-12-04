import { Fragment, ReactNode, useEffect, useState } from 'react'
import DropDownList from '../dropDownList/drop-down-list'
import ImageSelector from '../image-selector/image-selector'

type LayoutProps = {
  onClose: any
  onChange: any
  onSubmit: any
  onImageSubmit: any
  disableSubmitModal: boolean
}

export default function Modal({
  onClose,
  onChange,
  onSubmit,
  onImageSubmit,
  disableSubmitModal,
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
                Container Shipment
              </h5>
              <button
                type="button"
                className="focus:outline-none btn-close box-content h-4 w-4 rounded-none border-none p-1 text-black opacity-50 hover:text-black hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body relative p-4">
              Recipient
              <DropDownList lista={[]} onChange={onChange}></DropDownList>
              <ImageSelector onChange={onChange}></ImageSelector>
              {/*Text Area*/}
              <br />
              <div className="flex justify-center">
                <div className="mb-3 xl:w-96">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label mb-2 inline-block text-gray-700"
                  >
                    Notas del Envio:
                  </label>
                  <textarea
                    className="focus:outline-none form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700"
                    id="exampleFormControlTextarea1"
                    placeholder="Your message"
                    onChange={(e) => {
                      onChange({ note: e.target.value })
                    }}
                  ></textarea>
                </div>
              </div>
            </div>

            {!disableSubmitModal && (
              <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
                <button
                  type="button"
                  className={`focus:shadow-outline focus:outline-none ml-2 rounded bg-water-green-500 py-2 px-4 font-bold text-white hover:bg-water-green-700`}
                  onClick={() => {
                    console.log(disableSubmitModal)
                    onSubmit()
                  }}
                >
                  Ship
                </button>

                <button
                  type="button"
                  className="focus:shadow-outline focus:outline-none ml-2 rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-700"
                  onClick={onClose}
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

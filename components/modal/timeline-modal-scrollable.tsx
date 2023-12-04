import { Dialog, Transition } from '@headlessui/react'
import { Fragment, ReactNode, useEffect, useState } from 'react'
import DropDownList from '../dropDownList/drop-down-list'
import Stepper from '../stepper/stepper'
import TimeLine from '../time-line/timeLine'

type LayoutProps = {
  onClose: any
  onChange: any
  onSubmit: any
  data: any
}

export default function TimeLineModal({
  onClose,
  onChange,
  onSubmit,
  data,
  ...props
}: LayoutProps) {
  const [formData, setFormData] = useState({})

  useEffect(() => {
    onChange(formData)
  }, [formData])

  console.log('data from parent', data)
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
                Container [ID-{data[0].containerId}] Information
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
              <TimeLine data={data}></TimeLine>
            </div>
            <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600">
              <button
                onClick={onClose}
                data-modal-toggle="large-modal"
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

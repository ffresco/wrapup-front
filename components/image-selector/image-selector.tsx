import { Fragment, useState } from 'react'

type LayoutProps = {
  onChange: any
}

const initialValuesFormData = {
  file: '',
}

export default function ImageSelector({ onChange, ...props }: LayoutProps) {
  const [createObjectURL, setCreateObjectURL] = useState('')

  const uploadToClient = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      const imageTemp = event.target.files[0]
      onChange({ file: imageTemp })
      setCreateObjectURL(URL.createObjectURL(imageTemp))
    }
  }

  return (
    <Fragment>
      <br />
      <div className="flex justify-center">
        <div className="mb-3 w-96">
          <label
            htmlFor="formFile"
            className="form-label mb-2 inline-block text-gray-700"
          >
            Selecciones Formulario Envio:
          </label>
          <input
            className="focus:outline-none form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700"
            type="file"
            id="formFile"
            onChange={uploadToClient}
          />
        </div>
      </div>
      <br />
      {createObjectURL && (
        <div className="flex justify-center">
          <img
            key={Date.now()}
            className="h-24 w-24 bg-gray-300 object-none object-center"
            src={createObjectURL}
          />
        </div>
      )}
    </Fragment>
  )
}

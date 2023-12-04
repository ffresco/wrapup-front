import { Fragment, useState } from 'react'

export default function Stepper() {
  const [step, setStep] = useState(0)
  const handleNextStep = () => {
    if (step <= 3) {
      setStep(step + 1)
    }
  }
  const handlePrevtStep = () => {
    if (step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <Fragment>
      <ul
        className="stepper"
        data-mdb-stepper="stepper"
        data-mdb-stepper-type="vertical"
      >
        <li
          className={
            step === 0 ? `stepper-step stepper-active` : `stepper-step`
          }
        >
          <div className="stepper-head">
            <span className="stepper-head-icon"> 1 </span>
            <span className="stepper-head-text"> CIARA </span>
          </div>
        </li>
        <li
          className={
            step === 1 ? `stepper-step stepper-active` : `stepper-step`
          }
        >
          <div className="stepper-head">
            <span className="stepper-head-icon"> 2 </span>
            <span className="stepper-head-text"> PSA </span>
          </div>
        </li>
        <li
          className={
            step === 2 ? `stepper-step stepper-active` : `stepper-step`
          }
        >
          <div className="stepper-head">
            <span className="stepper-head-icon"> 3 </span>
            <span className="stepper-head-text"> ARBAI </span>
          </div>
        </li>
      </ul>
      <div className="stepper-content">
        {step === 0 && <Fragment>Contenido 1 stepper.</Fragment>}
        {step === 1 && <Fragment>Contenido 2 stepper.</Fragment>}
        {step === 2 && <Fragment>Contenido 3 stepper.</Fragment>}
        <button
          onClick={() => handleNextStep()}
          className="rounded-full border py-2 px-2 text-xs font-semibold text-blue-500"
        >
          Next Step
        </button>
        <button
          onClick={() => handlePrevtStep()}
          className="rounded-full border py-2 px-2 text-xs font-semibold text-blue-500"
        >
          Prev Step
        </button>
      </div>
    </Fragment>
  )
}

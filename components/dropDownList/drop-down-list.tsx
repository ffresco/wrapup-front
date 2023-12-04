import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { getChain } from '../../globalvar/globalVar'

//GANACHE
let people: any[]
console.log(getChain())
switch (getChain()) {
  case 'GANACHE':
    people = [
      {
        publicAddress: '0x21AeD39a92AA060d1672542F44811C31089d8Ff3',
        identifier: 'COINBASE',
        name: 'COINBASE',
        chain: 'GANACHE',
      },

      {
        publicAddress: '0xF6476F3b1f1BF732dC5796Aba91Abcf813A4a3C0',
        identifier: 'UYMVD',
        name: 'MONTEVIDEO',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x53D10890EAf6a0f543c5dAAFEc59C2CE4C52f6cD',
        identifier: 'CIARA',
        name: 'ARICA',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x6B8aC478C30b05cE9E19Af66D9afAD248CaedE78',
        identifier: 'PSA',
        name: 'PANAMA',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x9378f71C6D51653E412b9eD01b7181602EB258cC',
        identifier: 'ARBAI',
        name: 'BUENOS AIRES',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x105A34Ae68B841862DC9a683371B0092B761DDb2',
        identifier: 'BRPJW',
        name: 'PORTO ALEGRE',
        chain: 'GANACHE',
      },
    ]
    break

  case 'INFURA':
    people = [
      {
        publicAddress: '0x0Ba74FC96068d353338c7d14AcDc0C535DC59cd4',
        privateKey: '',
        identifier: 'COINBASE',
        name: 'COINBASE',
        CHAIN: 'RINKEBY',
      },

      {
        publicAddress: '0xBBA580dDC575EF489FB0356FDd1B2CBE10AAA35F',
        privateKey: '',
        identifier: 'UYMVD',
        name: 'MONTEVIDEO',
        CHAIN: 'RINKEBY',
      },
      {
        publicAddress: '0xCccfc3B06A61389E82af17eBa20E306f12773964',
        privateKey: '',
        identifier: 'CIARA',
        name: 'ARICA',
        CHAIN: 'RINKEBY',
      },
      {
        publicAddress: '0x70F166a2076D642b530627571790E8EF73554b7a',
        privateKey: '',
        identifier: 'PSA',
        name: 'PANAMA',
        CHAIN: 'RINKEBY',
      },
      {
        publicAddress: '0xf7a8D17a6f93fd6b7D6466E6fb19831972D9cA21',
        privateKey: '',
        identifier: 'ARBAI',
        name: 'BUENOS AIRES',
        CHAIN: 'RINKEBY',
      },
      {
        publicAddress: '0x992ed67848B8b7dD1B051E88d20e60dc6C6c1171',
        privateKey: '',
        identifier: 'BRPJW',
        name: 'PORTO ALEGRE',
        CHAIN: 'RINKEBY',
      },
    ]
    break

  default:
    people = [
      {
        publicAddress: '0x21AeD39a92AA060d1672542F44811C31089d8Ff3',
        identifier: 'COINBASE',
        name: 'COINBASE',
        chain: 'GANACHE',
      },

      {
        publicAddress: '0xF6476F3b1f1BF732dC5796Aba91Abcf813A4a3C0',
        identifier: 'UYMVD',
        name: 'MONTEVIDEO',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x53D10890EAf6a0f543c5dAAFEc59C2CE4C52f6cD',
        identifier: 'CIARA',
        name: 'ARICA',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x6B8aC478C30b05cE9E19Af66D9afAD248CaedE78',
        identifier: 'PSA',
        name: 'PANAMA',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x9378f71C6D51653E412b9eD01b7181602EB258cC',
        identifier: 'ARBAI',
        name: 'BUENOS AIRES',
        chain: 'GANACHE',
      },
      {
        publicAddress: '0x105A34Ae68B841862DC9a683371B0092B761DDb2',
        identifier: 'BRPJW',
        name: 'PORTO ALEGRE',
        chain: 'GANACHE',
      },
    ]

    break
}

type LayoutProps = {
  onChange: any
  lista: any[]
}

export default function DropDownList({
  onChange,
  lista,
  ...props
}: LayoutProps) {
  const [selected, setSelected] = useState(people[0])

  return (
    <Fragment>
      {lista}
      <Listbox
        value={selected}
        onChange={(shipmentData) => {
          setSelected(shipmentData)
          onChange({ to: shipmentData.publicAddress })
        }}
      >
        <div className="relative mt-1">
          <Listbox.Button className="focus:outline-none focus-visible:ring-offset-orange-300 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 sm:text-sm">
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.identifier +
                          ` - ` +
                          person.name +
                          '   ---->   ' +
                          person.publicAddress}
                      </span>
                      {selected ? (
                        <span className="text-amber-600 absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </Fragment>
  )
}

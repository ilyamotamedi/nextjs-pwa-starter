import { Fragment, useState } from "react"
import { Listbox, Transition } from "@headlessui/react"
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid"

export default function Select({ options, ...props }) {
  const [selected, setSelected] = useState(options[0]),
    baseColor = props.color || "blue"

  return (
    <Listbox value={selected} onChange={setSelected}>
      <div className="relative z-20 min-w-max flex-grow">
        <Listbox.Button
          className={`relative min-w-full max-w-full py-2 pl-4 pr-10 text-left bg-white rounded-md cursor-default focus:outline-none focus-visible:ring focus-visible:ring-opacity-50 focus-visible:ring-${baseColor}-500 ring-1 ring-black ring-opacity-25 text-sm font-medium`}
        >
          <span className="block truncate">{selected.name}</span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Listbox.Options className="absolute w-full py-2 mt-1 overflow-auto text-base bg-white rounded-md max-h-60 ring-1 ring-black ring-opacity-25 focus:outline-none sm:text-sm">
            {options.map((option, index) => (
              <Listbox.Option
                key={index}
                className={({ active, selected }) =>
                  `${
                    active ? `text-white bg-${baseColor}-500` : `text-gray-900`
                  } cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-${baseColor}-500 hover:text-white`
                }
                value={option}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`${
                        selected ? "font-medium" : "font-normal"
                      } block truncate`}
                    >
                      {option.name}
                    </span>
                    {selected ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
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
  )
}

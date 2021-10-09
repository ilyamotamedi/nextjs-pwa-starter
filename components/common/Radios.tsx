import { useState, Fragment } from "react"
import { CheckIcon } from "@heroicons/react/solid"
import { RadioGroup, Transition } from "@headlessui/react"

export default function Radios({ optionList, ...props }) {
  const [selected, setSelected] = useState(optionList[0]),
    baseColor = props.color || "blue"

  return (
    <div {...props}>
      <RadioGroup value={selected} onChange={setSelected} {...props}>
        <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
        <div className="space-y-3">
          {optionList.map((option) => (
            <RadioGroup.Option
              key={option.value}
              value={option.value}
              className={({ active, checked }) =>
                `
              ${
                active
                  ? `ring ring-${option.color || baseColor}-500 ring-opacity-50`
                  : ""
              }
              ${
                checked
                  ? `bg-${option.color || baseColor}-500 hover:bg-${
                      option.color || baseColor
                    }-500 text-white ring-${
                      option.color || baseColor
                    }-500 ring-opacity-50`
                  : ""
              }
              relative rounded-md px-5 py-4 cursor-pointer flex
              ring-1 ring-black ring-opacity-25
              hover:bg-gray-100
              focus:outline-none focus:ring focus:ring-${
                option.color || baseColor
              }-500 focus:ring-opacity-50
              `
              }
            >
              {({ active, checked }) => (
                <>
                  <div className="flex items-center gap-4 justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <RadioGroup.Label
                          as="p"
                          className={`font-medium ${
                            checked ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {option.title}
                        </RadioGroup.Label>
                        {option.description && (
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${
                              checked ? "text-gray-100" : "text-gray-500"
                            }`}
                          >
                            {option.description}
                          </RadioGroup.Description>
                        )}
                      </div>
                    </div>
                    <div className="w-6 h-6">
                      <Transition
                        as={Fragment}
                        show={checked}
                        enter="transition ease-out duration-150"
                        enterFrom="transform -rotate-90 scale-0"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform rotate-90 scale-0"
                      >
                        <div className="flex-shrink-0 text-white p-1 bg-white bg-opacity-20 rounded-full">
                          <CheckIcon className="w-4 h-4" />
                        </div>
                      </Transition>
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

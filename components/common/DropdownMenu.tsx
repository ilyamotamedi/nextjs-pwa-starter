import { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/solid"
import Link from "next/link"
import Button from "./Button"

export default function DropdownMenu({ items, ...props }) {
  const baseColor = props.color || "blue"

  return (
    <div {...props}>
      <Menu as="div" className="relative z-30 inline-block">
        <Menu.Button as={Button} color={baseColor} {...props.buttonProps}>
          {props.buttonLabel}
          <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={`absolute ${
              props.dropRight ? "right-0" : "left-0"
            } min-w-full mt-1 origin-top-right bg-white divide-y divide-gray-100 rounded-md ring-1 ring-black ring-opacity-25 focus:outline-none`}
          >
            <div className="py-2 font-medium text-sm">
              {items.map((item, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <Link href={item.href}>
                      <a
                        className={`block px-4 py-2 hover:bg-${
                          item.color || baseColor
                        }-500 hover:text-white ${
                          active
                            ? `bg-${item.color || baseColor}-500 text-white`
                            : `text-${item.color || baseColor}-500`
                        }`}
                      >
                        {item.title}
                      </a>
                    </Link>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

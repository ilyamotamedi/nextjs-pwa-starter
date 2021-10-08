import { Fragment } from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function Accordion({ items, ...props }) {
  const baseColor = props.color || "blue";

  return (
    <div {...props}>
      <div className={`accordion flex flex-col gap-${props.vGap || 1}`}>
        {items.map((item, itemIndex) => (
          <Disclosure key={itemIndex}>
            {({ open }) => (
              <div
                className={`flex flex-col rounded-md focus-within:ring focus-within:ring-${baseColor}-500 focus-within:ring-opacity-50`}
              >
                <Disclosure.Button
                  className={`${
                    open ? "rounded-t-md" : "rounded-md"
                  } flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-${baseColor}-900 bg-${baseColor}-300 hover:bg-${baseColor}-200 focus:outline-none focus:ring-0 relative z-10`}
                >
                  <span>{item.title}</span>
                  <ChevronRightIcon
                    className={`${
                      open ? "rotate-90" : "rotate-0"
                    } transform transition-transform duration-100 w-5 h-5 text-${baseColor}-900`}
                  />
                </Disclosure.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform -translate-y-8"
                  enterTo="transform translate-y-0"
                  leave="transition ease-out duration-75"
                  leaveFrom="transform translate-y-0"
                  leaveTo="transform -translate-y-8"
                >
                  <Disclosure.Panel
                    className={`p-4 text-sm text-gray-900 rounded-b-md bg-${baseColor}-100 relative z-0`}
                  >
                    {item.description}
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
}

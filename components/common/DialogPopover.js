import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

const solutions = [
  {
    name: "Insights",
    description: "Measure actions your users take",
    href: "##",
  },
  {
    name: "Automations",
    description: "Create your own targeted content",
    href: "##",
  },
  {
    name: "Reports",
    description: "Keep track of your growth",
    href: "##",
  },
];

export default function DialogPopover({
  triggerElement,
  panelContent,
  ...props
}) {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="rounded-md">
            {triggerElement}
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute z-30 w-60 sm:w-screen sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl p-4 mt-1 bg-white rounded-md ring-1 ring-black ring-opacity-25 focus:outline-none">
              {panelContent}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

import { useState, Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { QuestionMarkCircleIcon } from "@heroicons/react/solid"
import Button from "./Button"

const DialogBox = ({ ...props }) => {
  let [isOpen, setIsOpen] = useState(false)

  return (
    <div {...props}>
      <div className="inline-block">
        <div onClick={() => setIsOpen(true)}>{props.triggerElement}</div>
      </div>
      <Transition
        as={Fragment}
        show={isOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Dialog
          onClose={() => setIsOpen(false)}
          className="fixed z-50 inset-0 overflow-y-auto"
        >
          <div className="flex items-center justify-center min-h-screen p-4">
            <Dialog.Overlay className="fixed inset-0 backdrop-filter backdrop-blur bg-white bg-opacity-80" />
            <div className="dialog-content relative bg-white rounded-xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto ring-1 ring-black ring-opacity-25">
              <Dialog.Title className="flex gap-1 items-center px-4 py-3 bg-gray-100 rounded-t-xl text-lg text-gray-500 font-bold">
                <QuestionMarkCircleIcon className="h-5 w-5" />
                {props.title || "Are you sure?"}
              </Dialog.Title>

              <Dialog.Description as="div" className="p-4">
                {props.content || "Are you sure you'd like to do this?"}
              </Dialog.Description>

              <div className="flex flex-row-reverse gap-2 items-center p-4">
                <Button
                  onClick={() => {
                    setIsOpen(false)
                    props.confirmFunction()
                  }}
                >
                  {props.confirmButtonText || "Go Ahead"}
                </Button>
                <Button inverted onClick={() => setIsOpen(false)}>
                  {props.cancelButtonText || "Cancel"}
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default DialogBox

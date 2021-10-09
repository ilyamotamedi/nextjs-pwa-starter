import { useState } from "react"
import { Switch } from "@headlessui/react"

export default function ToggleSwitch({ ...props }) {
  const [enabled, setEnabled] = useState(false),
    baseColor = props.color || "blue"

  return (
    <div {...props}>
      <Switch.Group as="div" className="inline-flex items-stretch pt-1 pb-2">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled
              ? `bg-${baseColor}-500 ring-${baseColor}-500`
              : `bg-gray-400 ring-gray-500`
          }
        relative inline-flex flex-shrink-0 mt-1 h-6 w-10 ring-1 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-4" : "translate-x-0"}
          pointer-events-none inline-block h-full w-5 rounded-full bg-white transform transition ease-in-out duration-200 ring-1 ring-${baseColor}-800 ring-opacity-10`}
          />
        </Switch>
        <Switch.Label className="text-sm pl-3 flex flex-col justify-center">
          <span className="block font-medium">{props.label}</span>
          {props.description}
        </Switch.Label>
      </Switch.Group>
    </div>
  )
}

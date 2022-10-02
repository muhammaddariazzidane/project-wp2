import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import ExampleData from "./data/ExampleData";

export default function Example() {
  return (
    <div className="w-full px-4 pt-16">
      <div className="mx-auto w-full max-w-md  p-2">
        {ExampleData.map((item) => {
          return (
            <>
              <Disclosure key={item.id} as="div" className="mt-5">
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between px-4 py-2 text-left text-2xl font-medium focus:outline-none ">
                      <span className={`${open ? "text-secondary duration-500 " : "duration-500 text-white"} font-bold `}>{item.text}</span>
                      <ChevronUpIcon className={`${open ? " text-secondary transform duration-500" : "duration-500 text-white rotate-180"} h-8 w-8 `} />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-500 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-500 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 duration-500 opacity-0"
                    >
                      <Disclosure.Panel className="px-4 py-4 text-lg bg-gray-800 text-white">{item.desc}</Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </>
          );
        })}
      </div>
    </div>
  );
}

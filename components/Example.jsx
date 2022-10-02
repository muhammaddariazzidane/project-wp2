import { Disclosure } from "@headlessui/react";
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
                    <Disclosure.Panel className="px-4 py-4 text-lg bg-gray-800 text-white">{item.desc}</Disclosure.Panel>
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

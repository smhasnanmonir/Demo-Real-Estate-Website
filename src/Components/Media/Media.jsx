import { Tab } from "@headlessui/react";

import CoverPhoto from "./CoverPhoto";
import MediaTemplate from "./MediaTemplate";
import UseMedia from "../Hooks/UseMedia";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const Media = () => {
  const [medias] = UseMedia();
  const news = medias.filter((media) => media.category == "news");
  const events = medias.filter((media) => media.category == "events");

  return (
    <div className="bg-white">
      <CoverPhoto></CoverPhoto>
      <div className="w-full mx-auto px-2 md:py-16 py-5 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex max-w-2xl mx-auto space-x-1 rounded-xl bg-blue-900/20 p-1">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "ring-black",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              All
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              News
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              Events
            </Tab>
          </Tab.List>

          <Tab.Panels className="mt-2">
            <Tab.Panel className={classNames("rounded-xl bg-white p-3", "")}>
              <h1 className="text-yellow-800">
                <MediaTemplate datas={medias}></MediaTemplate>
              </h1>
            </Tab.Panel>
            <Tab.Panel className={classNames("rounded-xl bg-white p-3", "")}>
              <h1 className="text-yellow-800">
                <MediaTemplate datas={news}></MediaTemplate>
              </h1>
            </Tab.Panel>
            <Tab.Panel
              className={classNames("rounded-xl bg-white p-3", "ring-black")}
            >
              <h1 className="text-yellow-800">
                <MediaTemplate datas={events}></MediaTemplate>
              </h1>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default Media;

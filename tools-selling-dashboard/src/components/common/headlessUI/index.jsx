import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { Link } from "react-router-dom";

export default function HeadLessUI({ btnIcon, items }) {
  return (
    <Menu>
      <MenuButton>
        <i className={btnIcon} />
      </MenuButton>
      <Transition
        enter="transition ease-out duration-75"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <MenuItems
          anchor="bottom end"
          className={"z-20 bg-white py-5 px-10 shadow rounded-xl space-y-5"}
        >
          {items.map((el) => (
            <div key={el.id}>
              <MenuItem>
                <Link
                  to={el.url}
                  className="text-primary cursor-pointer font-medium"
                >
                  {el.title}
                </Link>
              </MenuItem>
            </div>
          ))}
        </MenuItems>
      </Transition>
    </Menu>
  );
}

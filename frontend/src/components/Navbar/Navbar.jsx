import { useEffect, useState } from "react";
import {
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import FulcroIcon from "../../assets/FulcroIcon.png"
import FulcroIconBlue from "../../assets/FulcroIconBlue.png"



const servicesMenuItems = [
  { title: "Web Development" },
  { title: "App Development" },
  { title: "AI Solutions" },
];

const aboutMenuItems = [
  { title: "Company" },
  { title: "Team" },
  { title: "Careers" },
];


function DropdownMenu({ title,textColor,items }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} allowHover>
      <MenuHandler>
        <ListItem className={`flex items-center justify-center  gap-2 py-3 px-6 font-semibold ${textColor}`}>
          {title}
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-4 w-4 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </ListItem>
      </MenuHandler>
      <MenuList className="rounded-xl bg-white text-gray-900">
        {items.map((item, key) => (
          <MenuItem key={key}>{item.title}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

function NavList({ textColor }) {
  return (
    <List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row justify-center lg:p-1">
      <DropdownMenu title="Services" textColor={textColor} items={servicesMenuItems} />
      <Typography
        as="a"
        href="#"
        variant="small"
        className={`font-semibold ${textColor}`}
      >
        <ListItem className="flex items-center justify-center text-nowrap gap-2 py-3 pr-6">
          Case Studies
        </ListItem>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        className={`font-semibold ${textColor}`}
      >
        <ListItem className="flex items-center justify-center gap-2 py-3 pr-6">
          Clients
        </ListItem>
      </Typography>
      <DropdownMenu title="About" textColor={textColor} items={aboutMenuItems} />
    </List>
  );
}

function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrollNav(true);
      } else {
        setScrollNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed min-w-full max-w-screen-xl rounded-none transition-all duration-300 ease-in-out px-6 py-4 shadow-lg ${
        scrollNav
          ? "bg-white text-black z-50"
          : "text-white z-50"
      }`}
    >
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-3 cursor-pointer py-1.5 mx-auto"
        >
        <img
            src={scrollNav ? FulcroIconBlue : FulcroIcon}
            alt="fulcro-logo"
            className="w-[70%] md:w-[65%] lg:w-[80%] h-auto"
        />
        </Typography>

        {/* Desktop Navigation ' */}

        <div className="hidden lg:flex me-80 py-0 space-x-10">
          <NavList textColor={scrollNav ? "text-black" : "text-white"} />
          <Button
            className={"text-sm px-6 font-bold py-0 rounded-md"}
          >
            START A PROJECT
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <IconButton
          variant="text"
          className={`${scrollNav ? "text-black" : "text-white"} lg:hidden`}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>

      {/* Mobile Navigation */}
      <Collapse open={openNav}>
      <div className="z-50">
        <div className="flex w-full items-center justify-center  gap-2 mt-4 lg:hidden">
          <NavList textColor={scrollNav ? "text-black" : "text-white"} />
        </div>
        <Button
          className={"bg-black text-white px-5 py-2 w-full lg:hidden rounded-md"}
        >
          START A PROJECT
        </Button>

      </div>
      </Collapse>
    </div>
  );
}

export default NavigationBar;

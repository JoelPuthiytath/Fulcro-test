import React, { useEffect,useState } from "react";
import {
  Navbar,
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

function DropdownMenu({ title, items }) {

  const [isMenuOpen, setIsMenuOpen] =useState(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} allowHover>
      <MenuHandler>
        <ListItem className="flex items-center gap-2 py-3 px-6 font-semibold text-white ">
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

function NavList() {
  return (
<List className="mb-6 mt-4 p-0 lg:mb-0 lg:mt-0 lg:flex-row lg:p-1">
  <DropdownMenu title="Services" items={servicesMenuItems} />
  <Typography
    as="a"
    href="#"
    variant="small"
    className="font-semibold text-white"
  >
    <ListItem className="flex items-center text-nowrap gap-2 py-3 pr-6">
      Case Studies
    </ListItem>
  </Typography>
  <Typography
    as="a"
    href="#"
    variant="small"
    className="font-semibold text-white"
  >
    <ListItem className="flex items-center gap-2 py-3 pr-6">
      Clients
    </ListItem>
  </Typography>
  <DropdownMenu title="About" items={aboutMenuItems} />
</List>
  );
}

function NavigationBar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
  <div className="fixed min-w-full max-w-screen-xl rounded-none  bg-gradient-to-r from-purple-600 to-blue-500 font-sans px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-3 cursor-pointer py-1.5 text-white mx-auto"
        >
          <img
            src="https://fulcro-prod-website-assets.fulcroworld.com/assets/media/IBS_Fulcro_Logo_250x50_02_0ff5ffa377.png"
            alt="ibs fulcro"
            className="h-10"
          />
        </Typography>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex me-80 py-0 space-x-10">
          <NavList />
          <Button className="bg-black text-white text-sm px-6 font-bold py-0 rounded-md">
            START A PROJECT
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <IconButton
          variant="text"
          className="lg:hidden text-white"
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
        <div className="flex w-full items-center justify-center gap-2 mt-4 lg:hidden">
            <NavList />
        </div>
          <Button className="bg-black text-white px-5 py-2 w-full lg:hidden rounded-md">
            START A PROJECT
          </Button>
      </Collapse>
    </div>

  );
}

export default NavigationBar;

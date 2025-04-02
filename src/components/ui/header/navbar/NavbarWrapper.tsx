"use client";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  const hiddenRoutes = ["/login", "/sign-up"];

  return <>{!hiddenRoutes.includes(pathname) && <Navbar />}</>;
};
export default NavbarWrapper;

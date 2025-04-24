import { ThemeToggler } from "./theme-toggler";

export const Navbar = () => {
  return (
    <div className="flex justify-between px-4 md:px-8 py-2 items-center border-b sticky top-0 bg-white dark:bg-[#121212] z-10">
      <p className="text-lg font-medium">Inventory Management</p>
      <ThemeToggler />
    </div>
  );
};

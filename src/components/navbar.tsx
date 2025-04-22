import { ThemeToggler } from "./theme-toggler";

export const Navbar = () => {
  return (
    <div className="flex justify-between px-8 py-2 items-center border-b">
      <p className="text-lg font-medium">Inventory Management</p>
      <ThemeToggler />
    </div>
  );
};

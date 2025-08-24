import { logoKodoTakai } from "../utils";

export default function Navbar() {
  return (
    <header className="w-full bg-transparent">
      <div className="mx-auto max-w-screen-2xl md:px-13 px-5">
        <div className="flex h-20 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <img
              src={logoKodoTakai}
              alt="logo"
              className="h-5 w-auto md:h-10"
            />
          </a>

          <nav
            className="flex items-center gap-6 md:gap-20 text-sm md:text-base"
            aria-label="Main"
          >
            <a href="#" className="font-main-title">
              Gira
            </a>
            <a href="#" className="font-main-title">
              Plans
            </a>
            <a href="#" className="font-main-title">
              Sponsors
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

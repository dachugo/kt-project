import { mainKtLogo, mountainsFooter } from "../utils";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#D5D2CF] overflow-hidden">
      <img
        src={mountainsFooter}
        alt="Mountains Background"
        className="absolute bottom-0 left-0 w-full h-auto opacity-20 z-0"
      />

      <div className="relative z-10">
        <div className="max-w-screen-2xl mx-auto px-5 md:px-13 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex flex-col items-start space-y-6">
                <img
                  src={mainKtLogo}
                  alt="KodoTakai Logo"
                  className="h-16 w-auto"
                />
                <p className="text-gray-700 font-main-title text-sm leading-relaxed max-w-md">
                  Conectando desarrolladores, estudiantes y profesionales tech a
                  través de eventos únicos que inspiran, educan y crean
                  oportunidades de networking excepcionales.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-main-title text-lg font-semibold text-gray-800 mb-4">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#tour"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-main-title"
                  >
                    Gira
                  </a>
                </li>
                <li>
                  <a
                    href="#planes"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-main-title"
                  >
                    Planes
                  </a>
                </li>
                <li>
                  <a
                    href="#sponsors"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-main-title"
                  >
                    Patrocinadores
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-main-title"
                  >
                    Eventos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-main-title text-lg font-semibold text-gray-800 mb-4">
                Contacto
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600 font-main-title">
                    info@kodotakai.com
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600 font-main-title">
                    Perú, PE - Colombia, CO
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg
                    className="w-5 h-5 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-gray-600 font-main-title">
                    Lun - Vie: 9:00 - 18:00
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300">
          <div className="max-w-screen-2xl mx-auto px-5 md:px-13 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-600 font-main-title text-sm">
                © 2025 KodoTakai. Todos los derechos reservados.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-main-title text-sm"
                >
                  Política de Privacidad
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-800 transition-colors duration-200 font-main-title text-sm"
                >
                  Términos de Servicio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

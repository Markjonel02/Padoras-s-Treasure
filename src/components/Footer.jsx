import logo from "../assets/imgs/products/logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-secondary dark:bg-gray-900 border shadow-2 overflow-x-hidden ">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img src={logo} className="w-32 me-3" alt="Pandora Logo" />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 ">
            {[
              { title: "Resources", links: ["Flowbite", "Tailwind CSS"] },
              { title: "Follow us", links: ["Github", "Discord"] },
              {
                title: "Legal",
                links: ["Privacy Policy", "Terms & Conditions"],
              },
            ].map((section, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  {section.title}
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  {section.links.map((link, index) => (
                    <li
                      key={index}
                      className={
                        index === section.links.length - 1 ? "" : "mb-4"
                      }
                    >
                      <a href="#" className="hover:underline">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Pandoras<span>&apos;</span> Treasure™
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:mt-0 space-x-5">
            {[
              { icon: "facebook", label: "Facebook page" },
              { icon: "discord", label: "Discord community" },
              { icon: "twitter", label: "Twitter page" },
              { icon: "github", label: "GitHub account" },
              { icon: "dribbble", label: "Dribbble account" },
            ].map((social, index) => (
              <a
                key={index}
                href="/"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor">
                  <use xlinkHref={`#${social.icon}`} />
                </svg>
                <span className="sr-only">{social.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

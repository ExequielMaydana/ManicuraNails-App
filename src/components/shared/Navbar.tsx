import { useState } from "react";
import styles from "../../styles/navbar.module.css";
import Image from "next/image";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handledMenu = () => {
    if (openMenu == false) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <div className="w-full h-20 flex flex-col bg-white z-10">
      <article className="w-full flex items-center justify-between px-4 py-6">
        <h1 className="font-bold uppercase">Logo</h1>
        <button
          onClick={handledMenu}
          className={`${openMenu ? "btn__show menu__icon" : "menu__icon"}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </article>
      <nav className={`${styles.menu} ${openMenu ? styles.menu__open : ""}`}>
        <ul className="w-full flex flex-col items-center gap-2 pt-8 uppercase">
          <li>¿Quienes somos?</li>
          <li>Servicios</li>
          <li>Salones</li>
          <li>Precios</li>
          <li>Contacto</li>
          <li className="w-full px-8 py-4">
            <hr className="border-red-300 opacity-[.6]" />
          </li>
          <li className="w-full flex items-center justify-evenly">
            <figure className="cursor-pointer">
              <Image
                width={30}
                height={50}
                src="/social_network/instagram.svg"
                alt="instagram.svg"
              />
            </figure>
            <figure className="cursor-pointer">
              <Image
                width={30}
                height={50}
                src="/social_network/facebook.svg"
                alt="facebook.svg"
              />
            </figure>
            <figure className="cursor-pointer">
              <Image
                width={33}
                height={50}
                src="/social_network/youtube.svg"
                alt="youtube.svg"
              />
            </figure>
          </li>
        </ul>
      </nav>
    </div>
  );
};

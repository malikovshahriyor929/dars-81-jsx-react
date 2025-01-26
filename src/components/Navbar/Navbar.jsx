import "./navbar.css";
// icons
import { FaLocationDot } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FiPhone } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <div className="  ">
      <div className=" flex flex-col  ">
        <div className=" bg-[#2b150d] ">
          <div className=" container2 flex  items-center justify-between">
            <div className=" flex  max-[827px]:hidden gap-4">
              <div className=" flex items-center gap-2 text-[13px] font-semibold text-white py-2">
                <FaLocationDot className="text-[#f7d240]" />
                <p>Ваш город: Константинополь</p>
              </div>
              <div className=" flex items-center gap-2 text-[13px] font-semibold text-white py-2">
                <FaLocationDot className="text-[#f7d240]" />
                <p>Ваш город: Константинополь</p>
              </div>
            </div>
            <ul className="  max-[827px]:hidden text-white text-[13px] flex gap-5  items-center">
              <li>
                <a href="#">Статьи</a>
              </li>
              <li>
                <a href="#">Оплата</a>
              </li>
              <li>
                <a href="#">Гарантия</a>
              </li>
              <li>
                <a href="#">Дилерам</a>
              </li>
              <li>
                <a href="#">Вакансии</a>
              </li>
            </ul>
            {/* responsive  */}
            <div className="  max-[827px]:w-full items-center justify-between gap-4  max-[827px]:p-3 hidden max-[827px]:flex">
              <IoMenu className="  text-[40px] text-white " />
              <input
                placeholder="Поиск по каталогу..."
                type="text"
                className="max-[422px]:block hidden  p-1.5 px-3 rounded-lg max-[383px]:w-[150px] bg-white max-[310px]:px-2"
              />
              <FiPhone className="text-[40px] text-white" />
            </div>
          </div>
        </div>
        <div className=" bg-[#f9f8f3]">
        <div className=" container2 py-4  max-[1092px]:flex-col  flex justify-between items-center gap-5">
          <div className="flex max-[1091px]:hidden items-center flex-col">
            <div className="flex items-center gap-2">
              <div className="bg-[#ff7a1b] h-8 w-9 rounded-lg "></div>
              <div className="bg-[#2b150d] h-8 w-9 rounded-lg "></div>
              <div className="bg-[#ffd634] h-8 w-9 rounded-lg "></div>
            </div>
            <p>Логотип вашего магазина</p>
          </div>
          <div className="flex  flex-col gap-2 max-[1091px]:w-full">
            <div className="flex items-center max-[1091px]:justify-between gap-5  max-[644px]:hidden ">
              <div className="flex gap-1">
                <FaCheck className="text-[#ffd634]" />
                <p className=" text-[13px] text-[#2b150d]">Лучшие цены</p>
              </div>
              <div className="flex gap-1">
                <FaCheck className="text-[#ffd634]" />
                <p className=" text-[13px] text-[#2b150d]">
                  Бесплатная доставка
                </p>
              </div>
              <div className="flex gap-1">
                <FaCheck className="text-[#ffd634]" />
                <p className=" text-[13px] text-[#2b150d]">
                  Гарантия от 3х лет
                </p>
              </div>
              <div className="flex gap-1">
                <FaCheck className="text-[#ffd634]" />
                <p className=" text-[13px] text-[#2b150d]">
                  Более 1 000 товаров
                </p>
              </div>
            </div>
            <div className="bg-white p-2 pr-0 rounded-lg flex items-center justify-between  max-[422px]:hidden">
              <input placeholder="Поиск по каталогу..." type="text" />
              <button className=" btnSvg">Найти</button>
            </div>
          </div>
          <div className=" max-[1092px]:hidden flex items-center gap-5">
            <div className="flex flex-col items-center gap-2  ">
              <div
                className="flex
                 items-center gap-2"
              >
                <FaRegClock className="text-[#ffd634]" />
                <p className="text-[13px]">Ежедневно с 9:00 до 21:00</p>
              </div>
              <div className="flex flex-col   text-[18px] font-light">
                <a href="tel:8 (800) 800-00-00">8 (800) 800-00-00</a>
                <a href="tel:8 (495) 700-00-00">8 (495) 700-00-00</a>
              </div>
            </div>
            <div className="flex max-[1320px]:hidden flex-col gap-2 ">
              <div
                className="flex
                 items-center gap-2"
              >
                <IoIosMail className="text-[#ffd634]" />
                <p className="text-[13px]">Ежедневно с 9:00 до 21:00</p>
              </div>
              <button className=" text-center text-white bg-[#ff7a1b] px-6 py-3.5  rounded-md ">
                Заказать звонок
              </button>
            </div>
          </div>
        </div></div>
        <div className="border-y border-[#e8e8e8] ">
          <div className=" container2 flex  gap-2 justify-between max-[402px]:items-center">
            <div className=" max-[402px]:w-full  flex items-center gap-3 hover:bg-[#FFD634] duration-500 *:text-black p-2 rounded-lg cursor-pointer max-[402px]:text-center">

              <IoMenu className="text-[30px]" />
              <p className="max-[402px]:flex items-center flex-col">
                Каталог товаров
              </p>
            </div>
            <div className=" max-[402px]:hidden flex items-center gap-3 hover:bg-[#FFD634] duration-500 *:text-black p-2 rounded-lg cursor-pointer">
              <p>О компании</p>
            </div>
            <div className=" max-[402px]:hidden flex items-center gap-3 hover:bg-[#FFD634] duration-500 *:text-black p-2 rounded-lg cursor-pointer">
              <p>Отзывы</p>
            </div>
            <div className=" max-[570px]:hidden flex items-center gap-3 hover:bg-[#FFD634] duration-500 *:text-black p-2 rounded-lg cursor-pointer">
              <p>Наши работы</p>
            </div>
            <div className=" max-[654px]:hidden flex items-center gap-3 hover:bg-[#FFD634] duration-500 *:text-black p-2 rounded-lg cursor-pointer">
              <p>Доставка</p>
            </div>
            <div className=" max-[744px]:hidden flex items-center gap-3 hover:bg-[#FFD634] duration-500 *:text-black p-2 rounded-lg cursor-pointer">
              <p>Контакты</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

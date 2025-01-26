import "./Showcase.css";

// imgs
import bottomshowcase1 from "../../assets/svg/Иконка (1).svg";
import bottomshowcase2 from "../../assets/svg/Иконка (2).svg";
import bottomshowcase3 from "../../assets/svg/Иконка (3).svg";
import bottomshowcase4 from "../../assets/svg/Иконка (4).svg";
import bottomshowcase5 from "../../assets/svg/Иконка (5).svg";

let Showcase = () => {
  return (
    <div className="bg-[#f9f8f3]">
      <div className="container2 py-5">
        <div className="showcasebg max-[478px]:hidden "></div>
        <div className="bg-[#6E9425] max-[478px]:flex  hidden text-white px-5 text-[30px] py-5 w-full  ">
          Беседки под ключ за 7 дней
        </div>
      </div>
      <div className="bg-white">
        <div className=" container2 py-4 grid grid-cols-5 gap-2 max-[1271px]:grid-cols-4 max-[1024px]:grid-cols-2 max-[346px]:grid-cols-1">
          <div className="flex max-[524px]:flex-col max-[524px]:text-center items-center gap-2">
            <img src={bottomshowcase1} alt="bottomshowcase1" />
            <p className="text-[#2d170c] text-[14px]  max-w-[213px]">
              Изготовливаем конструкции по вашему дизайн-проекту
            </p>
          </div>
          <div className="flex max-[524px]:flex-col max-[524px]:text-center items-center gap-2">
            <img src={bottomshowcase2} alt="bottomshowcase2" />
            <p className="text-[#2d170c] text-[14px]  max-w-[213px]">
              Изготовили более 2 400 деревянных конструкций
            </p>
          </div>
          <div className="flex max-[524px]:flex-col max-[524px]:text-center items-center gap-2">
            <img src={bottomshowcase3} alt="bottomshowcase3" />
            <p className="text-[#2d170c] text-[14px]  max-w-[213px]">
              Собственное производство площадью 6 000 м2
            </p>
          </div>
          <div className="flex max-[524px]:flex-col max-[524px]:text-center items-center gap-2">
            <img src={bottomshowcase4} alt="bottomshowcase4" />
            <p className="text-[#2d170c] text-[14px]  max-w-[213px]">
              Производим изделия из дерева с 1998 года
            </p>
          </div>
          <div className="flex  items-center gap-2 max-[1271px]:hidden ">
            <img src={bottomshowcase5} alt="bottomshowcase5" />
            <p className="text-[#2d170c] text-[14px]  max-w-[213px]">
              Гарантия от 3х лет на все конструкции
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;

import basetka from "../../assets/img/Беседка (1).png";
import baniya from "../../assets/img/Group 475.png";
import cub from "../../assets/img/Пергола.png";
import star from "../../assets/img/Star.png";
import gorka from "../../assets/img/Горка.png";
import house from "../../assets/img/House.png";

let Category = () => {
  return (
    <div className="container2 py-10 ">
      <div className="grid grid-cols-3 gap-3 max-[1208px]:grid-cols-2 max-[808px]:grid-cols-1 ">
        <div className="bg-[#fff7d9] p-5 rounded-lg  flex flex-col justify-between ">
          <div className="flex flex-col gap-3">
            <h2 className="text-[24px] font-semibold ">Беседки</h2>
            <div className="grid grid-cols-2 gap-1.5">
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 1</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 2</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 3</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 4</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 5</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 6</p>
            </div>
          </div>
          <img src={basetka} alt="basetka" />
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-[#fff7d9] p-5 rounded-lg flex justify-between gap-3 max-[339px]:flex-col">
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-semibold ">Беседки</h2>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 1</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 2</p>
              ...
            </div>
            <img src={baniya} alt="" />
          </div>
          <div className="bg-[#fff7d9] p-5 rounded-lg flex justify-between gap-3 max-[339px]:flex-col">
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-semibold ">Перголы</h2>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 1</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 2</p>
              ...
            </div>
            <img src={cub} alt="cub" />
          </div>
          <div className="bg-[#fff7d9] p-5 rounded-lg flex justify-between gap-3 max-[339px]:flex-col">
            <div className="flex flex-col gap-1">
              <h2 className="text-[24px] font-semibold ">Бренды</h2>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 1</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 2</p>
              ...
            </div>
            <img src={star} alt="star" />
          </div>
        </div>
        <div className="flex flex-col max-[1208px]:flex-row max-[1208px]:col-span-2 max-[808px]:col-span-1 max-[1208px]:w-full  max-[808px]:flex-col  gap-3">
          <div className="bg-[#fff7d9] max-[1208px]:w-full   max-[808px]:justify-between   p-5 rounded-lg flex items-center gap-1   max-[339px]:flex-col">
            <div className="flex flex-col gap-1">
              <h2 className="text-[21px] font-semibold ">Детские площадки</h2>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 1</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 2</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 3</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 4</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 5</p>
            </div>
            <img src={gorka} alt="gorka" />
          </div>
          <div className="bg-[#fff7d9] max-[1208px]:w-full  p-5 rounded-lg flex items-center gap-1  justify-between h-full max-[339px]:flex-col ">
            <div className="flex flex-col gap-1">
              <h2 className="text-[21px] font-semibold ">Дома</h2>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 1</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 2</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 3</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 4</p>
              <p className="max-[394px]:hidden text-[14px]">Подкатегория 5</p>
            </div>
            <img src={house} alt="house" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

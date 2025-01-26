import card from "../utils/card-data";
import img from "../../assets/img/cards.png";

// card  svgs
import razmer from "../../assets/svg/card/razmer.svg";
import round from "../../assets/svg/card/round.svg";
import yil from "../../assets/svg/card/yil.svg";
import grand from "../../assets/svg/card/grand.svg";

function Cards() {
  return (
    <div className="container2 py-5">
      <div className=" flex flex-col gap-4 ">
        <div
          className="flex
         justify-between items-center gap-5 "
        >
          <h1 className="text-[32px] max-[528px]:text-[23px]">Хиты продаж</h1>
          <p className="text-[#bbb] ">Все товары</p>
        </div>
        <div className="flex  bg-[#F9F8F3] rounded-lg">
          <div className=" bg-white rounded-md">
            <p className="text-[18px] border-b-2 w-fit p-5 border-[#FF7A1B] ">
              Беседки
            </p>
          </div>
          <div className=" px-3">
            <p className="text-[18px] font-light border-b  p-5 border-[#E8E8E8] ">
              Бани
            </p>
          </div>
          <div className=" max-[378px]:hidden px-3">
            <p className="text-[18px] font-light border-b  p-5 border-[#E8E8E8] ">
              Площадки
            </p>
          </div>
          <div className="max-[528px]:hidden px-3">
            <p className="text-[18px] font-light border-b  p-5 border-[#E8E8E8] ">
              Дома
            </p>
          </div>
          <div className="max-[647px]:hidden px-3">
            <p className="text-[18px] font-light border-b  p-5 border-[#E8E8E8] ">
              Перголы
            </p>
          </div>
          <div className=" px-3 max-[854px]:hidden">
            <p className="text-[18px] font-light border-b  p-5 border-[#E8E8E8] ">
              Бренды
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 max-[1112px]:grid-cols-3 max-[854px]:grid-cols-2 max-[572px]:grid-cols-1">
        {card.map((value) => {
              return (
                <div  key={value.id} className=" border-[#e8e8e8] bg-[#f8f8f8] border p-4 flex flex-col gap-3">
                <div className="rounded-lg">
                  <img src={img} className="w-full" alt="" />
                </div>
                <div className="flex flex-col gap-2">
                  <h1 className="text-[18px] font-semibold max-w-[278px]">
                  {value.name}
                  </h1>
                  <div
                    className="flex
                   flex-col gap-1"
                  >
                    <div className=" flex items-center justify-between ">
                      <div className=" flex items-center  gap-1">
                        <img src={razmer} alt="" />
                        <p className="text-[13px] font-light">Размеры:</p>
                      </div>
                      <div>
                        <p className="text-[13px] font-light">{value.dimensions}
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between ">
                      <div className=" flex items-center  gap-1">
                        <img src={round} alt="" />
                        <p className="text-[13px] font-light">Площадь:</p>
                      </div>
                      <div>
                        <p className="text-[13px] font-light">{value.area}</p>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between ">
                      <div className=" flex items-center  gap-1">
                        <img src={yil} alt="" />
                        <p className="text-[13px] font-light">Вместимость:</p>
                      </div>
                      <div>
                        <p className="text-[13px] font-light">{value.capacity}</p>
                      </div>
                    </div>
                    <div className=" flex items-center justify-between ">
                      <div className=" flex items-center  gap-1">
                        <img src={grand} alt="" />
                        <p className="text-[13px] font-light">Гарантия:</p>
                      </div>
                      <div>
                        <p className="text-[13px] font-light">{value.warranty}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div  className="flex  justify-between gap-2">
                    <div>
                      <div className="flex  gap-2 items-center">
                        <p className="text-[14px] text-[#bbb]">{value.price_original}</p>
                        <p className="bg-[#ffd634] text-[11px] flex items-center pt-1 justify-center px-1  w-fit rounded-sm">
                          {value.discount}
                        </p>
                      </div>
                      <p className=" text-[#ff3838] text-[22px] font-semibold ">
                        {value.price_discounted}
                      </p>
                    </div>
                    <button className="bg-[#ffd634] rounded-md  py-2.5 px-7">
                    Купить
                    </button>
                  </div>
                </div>
              </div>
              )
              })}
        </div>
      </div>
    </div>
  );
}

export default Cards;

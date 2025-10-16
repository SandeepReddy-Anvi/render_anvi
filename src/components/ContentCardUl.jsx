export const ContentCardUl = ({ infoList }) => {
  return (
    <ul className="content-Card-ul max-w-6xl mx-auto flex flex-col gap-[70px] lg:gap-[90px]">
      {infoList?.map((item, index) => (
        <li
          key={item.title + (index + 1)}
          className="flex flex-col md:flex-row md:items-center place-items-center gap-[20px] md:gap-[40px] lg:gap-[60px] xl:gap-[100px]"
        >
          <div className="md:w-1/2">
            {item.index && <i>0.{index + 1}</i>}
            <h2 className="text-[48px] font-normal leading-[61.6px] tracking-[-1px] text-[#0D1F21] mb-[32px]">
              {item.title}
            </h2>
            <p className="text-[#0D1F21] text-[18px] font-normal">
              {item.desc}
            </p>
          </div>
          <div className="w-full md:w-1/2 md:max-w-[444px] place-items-center">
            <img
              loading="lazy"
              src={item.imgUrl}
              alt={item.title}
              className="w-full h-full max-w-[400px] lg:max-h-[518px] object-contain"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

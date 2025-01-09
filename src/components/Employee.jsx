import Popup from "./Popup";
export default function Employee(props) {
  return (
    <>
      <div className="py-8 px-8 max-w-sm mx-auto space-y-2 bg-white rounded-xl shadow-lg sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
        <img
          className="block object-cover w-[80px] h-[80px] mx-auto h-24 sm:mx-0 sm:shrink-0 rounded-full"
          src={props.img}
          alt="Woman's Face"
        />
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">{props.name}</p>
            <p className="text-slate-500 font-medium">{props.role}</p>
          </div>
          <Popup />
        </div>
      </div>
    </>
  );
}

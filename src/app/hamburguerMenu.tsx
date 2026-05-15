'use client';
export default function HamburguerMenu(props: propsState) {
  return (
    <div
      onClick={props.click}
      className="fixed top-[18px] left-[20px] z-[1000] transition-all sm:hidden"
    >
      {!props.state ? (
        <button className="w-6 h-[28px] flex flex-col justify-around  z-50">
          <div className="w-full h-1 bg-white"></div>
          <div className="w-full h-1 bg-white"></div>
          <div className="w-full h-1 bg-white"></div>
        </button>
      ) : (
        <button className="w-0 h-0 border-t-[14px] border-b-[14px] border-r-[24px]  border-b-transparent border-t-transparent border-r-white  relative z-[1000] transition-all"></button>
      )}
    </div>
  );
}

import { propsState } from '@/app/utils/types';

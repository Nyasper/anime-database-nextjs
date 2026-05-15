'use client';
export default function HamburguerMenu(props: propsState) {
  return (
    <div
      onClick={props.click}
      className="cursor-pointer z-[1000] transition-all sm:hidden flex items-center justify-center w-8 h-8"
    >
      {!props.state ? (
        <button className="w-6 h-[22px] flex flex-col justify-between z-50">
          <div className="w-full h-0.5 bg-white rounded-full"></div>
          <div className="w-full h-0.5 bg-white rounded-full"></div>
          <div className="w-full h-0.5 bg-white rounded-full"></div>
        </button>
      ) : (
        <button className="w-6 h-6 relative z-[1000] flex items-center justify-center">
          <div className="absolute w-full h-0.5 bg-white rounded-full rotate-45"></div>
          <div className="absolute w-full h-0.5 bg-white rounded-full -rotate-45"></div>
        </button>
      )}
    </div>
  );
}

import { propsState } from '@/app/utils/types';

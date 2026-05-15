'use client';
export default function OrderLayout({ children }: any) {
  const [activedMenu, setActivedMenu] = useState(false);
  const changeMenu = () => setActivedMenu(!activedMenu);
  const hiddenMenu = () => {
    if (activedMenu) setActivedMenu(false);
  };

  return <div className="flex flex-row bg-purple-800 ">{children}</div>;
}

import { useState } from 'react';

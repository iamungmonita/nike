import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { IconButton, Sidebar } from '@/core/components';
import useApi from '@/hooks/useApi';
import useScreenWidth from '@/hooks/UseScreenWidth';
import { Header } from '@/models/Header';
import { heart, login, menu, search, shoppingBag } from '@/public/icons';
import { getHeaderMiddle } from '@/service/header';
import svgStyle from '@/styles/SVG.module.scss';

import SearchItem from '../SearchItem';

export default function HeaderMiddle() {
  const router = useRouter();
  const PromiseAll = () => Promise.resolve(getHeaderMiddle());
  const { response } = useApi({ service: PromiseAll, effects: [] });
  const [openSearch, setOpenSearch] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const screen = useScreenWidth();

  useEffect(() => {
    if (screen >= 640) {
      setOpenSearch(false);
      setOpenSideBar(false);
    }
  }, [screen]);

  function toggleSearch() {
    setOpenSearch(!openSearch);
  }
  function onCancelSearch() {
    setOpenSearch(false);
  }
  function toggleSideBar() {
    setOpenSideBar(!openSideBar);
  }
  function onCancelSideBar() {
    setOpenSideBar(false);
  }
  function pushRouter(url: string) {
    router.push(url);
  }
  return (
    <section>
      <div className="pr-[4%] pl-[5%] bg-white flex justify-between items-center h-20 relative">
        <div className="grid group">
          <Link href="/">
            <svg className={`${svgStyle.svg}`} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="135.5 361.38 1000 356.39">
              <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z" />
            </svg>
          </Link>
        </div>
        <div className="items-center justify-end hidden md:flex min-w-[700px] h-[80%]">
          <ul className="flex justify-end h-20 gap-x-5 items-center ">
            {response?.map((item: Header, index) => (
              <div
                className="py-3 cursor-pointer font-medium group/item hover:border-b-black hover:border-b-2"
                key={index}
                onClick={() => pushRouter(item.routePath)}>
                <p> {item.name}</p>
                <div className=" hidden group-hover/item:flex z-20 justify-between gap-x-10 top-20 absolute left-[50%] -translate-x-[50%] bg-white w-full overflow-x-hidden min-h-[60vh] hover:block px-[10%]">
                  {item.subCategories
                    .filter((sub_item) => sub_item.categoryId === item.id)
                    .map((sub_item, index) => (
                      <div key={index} className="animate__animated animate__fadeInDownBig">
                        <li onClick={() => pushRouter(sub_item.routePath)} className="flex flex-col">
                          <p className="text-left">{sub_item.name}</p>
                          {sub_item.subCategories &&
                            sub_item.subCategories.map((sub_sub_item, index) => (
                              <Link className="font-light text-sm" key={index} href={sub_sub_item.routePath}>
                                {sub_sub_item.name}
                              </Link>
                            ))}
                        </li>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-end ">
          <div className="flex gap-x-3 justify-between">
            <div className="bg-header rounded-full hidden lg:flex justify-end gap-x-3">
              <IconButton IconImage={search} IconWidth={25} IconHeight={25} />
              <input type="text" placeholder="Search..." className="w-32 bg-transparent outline-none hover:bg-header rounded-full" />
            </div>
            <ul className="flex gap-x-3 list-none ">
              <IconButton onClick={toggleSearch} IconImage={search} IconWidth={25} IconHeight={25} IconLargeHidden />
              <IconButton IconImage={heart} IconWidth={25} IconHeight={25} IconHidden />
              <IconButton IconImage={shoppingBag} IconWidth={25} IconHeight={25} onClick={() => pushRouter('/cart')} />
              <IconButton IconImage={menu} IconWidth={25} IconHeight={25} IconMediumHidden onClick={toggleSideBar} />
              <IconButton IconImage={login} IconWidth={25} IconHeight={25} IconMediumHidden onClick={() => pushRouter('/sign_in')} />
            </ul>
          </div>
        </div>
        {openSearch && <SearchItem onCancel={onCancelSearch} />}
      </div>
      <div
        className={`top-0 right-0 w-[350px] bg-white shadow z-30 h-full overflow-scroll animate__animated fixed ${
          openSideBar ? 'animate__fadeInRightBig' : 'animate__fadeOutRightBig'
        }`}>
        <Sidebar onCancelSideBar={onCancelSideBar} />
      </div>
    </section>
  );
}

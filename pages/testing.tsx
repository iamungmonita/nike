import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import useApi from '@/hooks/useApi';
import { Footer } from '@/models/Footer';
import { getFooter } from '@/service/footer';

type Props = {};

export default function testing({}: Props) {
  const [toggleLogo, setToggleLogo] = useState<boolean>(false);
  const { response } = useApi({ service: getFooter, effects: [] });
  const [result, setResult] = useState<Footer[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    if (response?.length) {
      setResult(response);
    }
  }, [response?.length, refresh]);

  function toggleExpanded(index: number) {
    setToggleLogo(!toggleLogo);
    if (result.length) {
      result[index].isExpanded = !result[index].isExpanded;
      setResult(result);
    }
  }

  return (
    <div>
      {result?.map((res, index) => (
        <div className="max-w-[500px] mx-auto" key={res.id}>
          <span className="flex justify-between" onClick={() => toggleExpanded(index)}>
            <p className="font-medium">{res.name} </p>
            {res.subCategories && (
              <Image src={res.isExpanded && toggleLogo ? '/icons/arrow_down.svg' : '/icons/arrow_up.svg'} height={25} width={25} alt="" />
            )}
          </span>
          {res.isExpanded && res.subCategories.map((sub) => <p className="text-sm bg-red-200">{sub.name}</p>)}
        </div>
      ))}
    </div>
  );
}

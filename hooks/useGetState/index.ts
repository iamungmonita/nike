import { useEffect, useState } from 'react';

export function useGetState(store: any, callback: any) {
  const [state, setState] = useState<any>();
  const result = store(callback);
  useEffect(() => {
    setState(result);
  }, [result]);
  return state;
}

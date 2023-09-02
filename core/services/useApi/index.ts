import { useEffect, useState } from 'react';

import { GET } from '../';

export type HookTypeParam = {
    service: <T, P = any> (param: P) => Promise<T>
    params: any,
    effects: Array<any>
}
export type ReturnHookType<T> = {
    loading: boolean;
    loaded: boolean,
    response: T | any,
    error: any
}


export default function useApi<T>(url: string): ReturnHookType<T> {
    const [loading, setLoading] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [response, setResponse] = useState<T | any>([])
    const [error, setError] = useState(false)

    useEffect(() => {
        setLoading(true)
        GET<T>(url)
            .then((res: T) => {
                setResponse(res)
                setLoading(false)
                setLoaded(true)
            }).catch((error: any) => {
                setError(error)
                setLoading(false)
                setLoaded(true)
            })
        return () => { }
    }, [])
    return {
        loading,
        loaded,
        response,
        error
    }
}

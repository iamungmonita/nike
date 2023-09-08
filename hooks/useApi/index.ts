import { useEffect, useState } from 'react';

export type HookTypeParam<T> = {
    service: () => Promise<T>
    effects: any[]
}
export type ReturnHookType<T> = {
    loading: boolean;
    loaded: boolean,
    response: T | null,
    error: any
}

export default function useApi<T>(params: HookTypeParam<T>): ReturnHookType<T> {
    const { service, effects } = params;
    const [loading, setLoading] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [response, setResponse] = useState<T | null>(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true)
        service()
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
    }, effects)
    return {
        loading,
        loaded,
        response,
        error
    }
}

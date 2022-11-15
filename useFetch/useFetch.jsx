import React from 'react'
import { useEffect, useState } from 'react'
export const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        isLoanding: true,
        hasError: null
    })
    const getFetch = async () => {
        setState({
            ...state, isLoanding: true
        })
        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            data,
            isLoanding: false,
            hasError: null
        })
    }
    useEffect(() => {



        getFetch()

    }, [url])

    return {
        data: state.data,
        isLoanding: state.isLoanding,
        hasError: state.hasError
    }
}

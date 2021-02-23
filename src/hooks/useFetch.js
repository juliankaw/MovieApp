/* eslint-disable no-unsafe-finally */
import SingleMovie from 'pages/SingleMovie/SingleMovie'
import React from 'react'
import { useLocalStorageState } from './useLocalStorage'

const useFetch = (key) => {
  const [data, setData] = useLocalStorageState(key)
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  const request = React.useCallback(
    async (url, options) => {
      let response
      let json
      try {
        SingleMovie
        setError(null)
        setLoading(true)
        setData(null)
        response = await fetch(url, options)
        json = await response.json()
        if (response.ok === false) throw new Error(json.message)
      } catch (err) {
        json = null
        setError(err.message)
      } finally {
        setData(json)
        setLoading(false)
        return { response, json }
      }
    },
    [setData],
  )

  return {
    data,
    loading,
    error,
    request,
  }
}

export default useFetch

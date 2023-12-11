import React from 'react';

const useFetch = (url) => {

    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [controller, setController] = React.useState(null)
    
    React.useEffect( () => {
        const abortController = new AbortController() 
        setController(abortController)
        
        setLoading(true)
        
        fetch(url, {signal: abortController.signal})
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => {
                if(error.name === "AbortError"){
                    //console.log("Request Cancelled")
                }
                else
                    setError("Ocurrio un error...")
            })
            .finally(()=> setLoading(false))
        
        // para cancelar peticiones al desmontar el componente
        return () => abortController.abort()
    }, [])


    const handleCancelRequest = () => {
        if(controller){
            controller.abort()
            setError("Request Cancelled")
        }
    }

    return {data, loading, error, handleCancelRequest}
}

export { useFetch }
import {useState,useEffect} from 'react'

function currencyApiInfo(currency) {
    const [data,setData] = useState([])


    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/74880aa99ce819a75abe767a/latest/${currency}`)
        .then(res => res.json())
        .then(res => setData(res.conversion_rates))
        // console.log(data)
    }, [currency])

    return data

}



export default currencyApiInfo
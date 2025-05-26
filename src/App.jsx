import { useState, useEffect } from "react";


function App() {

  const [countries, setCountries] = useState()

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/region/europe')
      .then(data => data.json())
      .then(data => {
        data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        console.log(data);

        //   {
        //   if (a.name.common < b.name.common) {
        //     return -1
        //   } else if (a.name.common > b.name.common) {
        //     return 1
        //   } else {
        //     return 0
        //   }
        // })
        setCountries(data)

      }
      )
      .catch(err => console.log(err)
      )

  }, [])

  // try {
  //   const response = await fetch('https://restcountries.com/v3.1/region/europe')
  //   const data = await response.json()

  //   console.log(data);

  // } catch (error) {
  //   console.log(error);

  // }



  return (
    <div className="min-h-screen bg-slate-500">
      <div className="max-w-7xl mx-auto py-20 px-4">
        <h1 className="text-gray-50 text-4xl">Europe Countries Data</h1>
        <p className="text-gray-100 text-xl mb-8">Click on a card to reveal a country's information.</p>
      </div>
    </div>
  )
}

export default App

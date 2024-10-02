import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProduct(json))
  }, [])

  return (
    <>
      <div className="p-10 bg-slate-300 min-h-screen">
        <div className="flex flex-wrap justify-center gap-5">
          {product.map((item, index) => (
            <div
              className="flex flex-col items-center p-6 border-2 bg-white rounded-lg sw-full sm:w-[45%] md:w-[30%] lg:w-[20%] "
              key={index}
            >
              <div className="mb-3 p-2 flex flex-col items-center">
                <p className="text-lg font-semibold text-center mb-2">{item.title}</p>
                <img src={item.image} className="w-20 h-20 object-cover mb-3" alt={item.title} />
                <p className="text-center mb-1">Price: ${item.price}</p>
                <p className="text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App

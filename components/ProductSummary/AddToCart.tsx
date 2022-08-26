import { useCartMutations } from "@store/Cart"
import { useState } from "react"
import { FaCartPlus } from 'react-icons/fa'
type AddToCartProps = {
  product: TProduct
}

const addToCartRequest = () => new Promise((res, rej) => {
  window.setTimeout(res, 600)
})

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [visible, setVisible] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { addToCart } = useCartMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }
  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
        })
        .catch((e: Error) => {
          setError(e.message)
          setLoading(false)
        })
    }
  }
  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
  setQuantity(parseInt(target.value, 10))


  return (
    <>
    <input type='number' placeholder="quantity" value={quantity} min='1' step={1} onChange={handleChange} className='w-32 h-10 mr-3 text-gray-400' />
    {
      error && (
        <div>{error}</div>
      )
    }
    <button className="w-32 bg-green-400 rounded-lg h-10 hover:bg-green-500" type="button"><FaCartPlus style={{ display: 'inline-block', marginRight: '2px' }}/>Add</button>
    </>
  )
}

export default AddToCart
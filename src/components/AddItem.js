import * as Bootstrap from 'react-bootstrap';
import { useState } from 'react'
const AddItem = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [quantity, setQuty] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert('Please Add Name')
            return
        }
        if (!quantity) {
            alert('Please Add Quantity')
            return
        }
        if (!price) {
            alert('Please Set Price')
            return
        }
        if (!img) {
            alert('Please Add Image')
            return
        }
        onAdd({ quantity, price, img })
    }
    return (
        <Bootstrap.Row className="justify-content-center">
            <Bootstrap.Form className="col-md-6" onSubmit={onSubmit}>
                <Bootstrap.Form.Group>
                    <Bootstrap.Form.Label>Name:</Bootstrap.Form.Label>
                    <Bootstrap.Form.Control type="text" placeholder="Set Name" value={name} onChange={(e) => setName(e.target.value)} />
                </Bootstrap.Form.Group>
                <Bootstrap.Form.Group>
                    <Bootstrap.Form.Label>Quantity:</Bootstrap.Form.Label>
                    <Bootstrap.Form.Control type="number" placeholder="Set Quantity" value={quantity} onChange={(e) => quantity >= 0 ? setQuty(e.target.value) : setQuty(0)} />
                </Bootstrap.Form.Group>
                <Bootstrap.Form.Group>
                    <Bootstrap.Form.Label>Price:</Bootstrap.Form.Label>
                    <Bootstrap.Form.Control type="number" placeholder="Set Price" value={price} onChange={(e) => price >= 0 ? setPrice(e.target.value) : setPrice(0)} />
                </Bootstrap.Form.Group>
                <Bootstrap.Form.Group>
                    <Bootstrap.Form.Label>Image:</Bootstrap.Form.Label>
                    <Bootstrap.Form.Control type="text" placeholder="Set Image URL" value={img} onChange={(e) => setImg(e.target.value)} />
                </Bootstrap.Form.Group>
                <div>
                    <Bootstrap.Button className="mr-2" variant="primary" type="submit" value="Save Item">
                        Add Item
                    </Bootstrap.Button>
                </div>
            </Bootstrap.Form>
        </Bootstrap.Row>
    )
}

export default AddItem

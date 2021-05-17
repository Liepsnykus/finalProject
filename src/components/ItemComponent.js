import * as Bootstrap from 'react-bootstrap';
import {useState} from 'react'
const ItemComponent = ({ item, id, onDelete, favourites, onUpdate}) => {
    const [quantity, setQuty] = useState(item.quantity)
    const [price, setPrice] = useState(item.price)
    // const [id, setid] = useState(item.id)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!quantity) {
            alert('Please Add Quantity')
            return
        }
        if (!price) {
            alert('Please Set Price')
            return
        }
        console.log(id);
        onUpdate({ quantity, price, id})
    }
    return (
        <div className="d-md-flex myCard m-auto w-md-50">
            <div className="col-lg-8 align-items-center">
                <h2>{item.name}</h2>
                <Bootstrap.Form className="d-flex" onSubmit={onSubmit}>
                    <Bootstrap.Row>
                        <Bootstrap.Form.Group>
                            <Bootstrap.Form.Label>Quantity:</Bootstrap.Form.Label>
                            <Bootstrap.Form.Control type="number" value={quantity} onChange={(e) => quantity >= 0 ? setQuty(e.target.value) : setQuty(0)} />
                        </Bootstrap.Form.Group>

                        <Bootstrap.Form.Group>
                            <Bootstrap.Form.Label>Price:</Bootstrap.Form.Label>
                            <Bootstrap.Form.Control type="number" value={price} onChange={(e) => price >= 0 ? setPrice(e.target.value) : setPrice(0)} />
                        </Bootstrap.Form.Group>
                        <div>
                        <Bootstrap.Button className="mr-2" variant="primary" size="sm" type="submit">
                            Update
                    </Bootstrap.Button>
                        <Bootstrap.Button className="mr-2" variant="danger" size="sm" onClick={()=>onDelete(item.id)}>
                            Delete
                    </Bootstrap.Button>
                        <Bootstrap.Button className="mr-2" variant="warning" size="sm" onClick={()=>favourites(item.id)}>
                            Add To Favourites
                    </Bootstrap.Button>
                    {item.favourites? <i className="fas fa-star text-warning"></i> : <i className="far fa-star text-warning"></i>}
                        </div>
                    </Bootstrap.Row>
                </Bootstrap.Form>
            </div>
            <div className="col-lg-4 cardImgDiv">
                <img className="cardImg" src={item.img} alt=""/>
            </div>
        </div>
    )
}

export default ItemComponent

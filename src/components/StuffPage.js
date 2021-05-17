import * as Bootstrap from 'react-bootstrap';
import ItemComponent from './ItemComponent'

const StuffPage = ({ items, favs, onDelete, favourites, onUpdate }) => {

    console.log(favs);
    return (

        <div className="stuffContainer">
            {favs ?
                items.map((item) => (
                    item.favourites ?
                    <ItemComponent key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} favourites={favourites} /> : ''
                ))
                :
                items.map((item) => (
                    <ItemComponent key={item.id} item={item} onDelete={onDelete} onUpdate={onUpdate} favourites={favourites} />
                ))
            }
        </div>
    )
}

export default StuffPage

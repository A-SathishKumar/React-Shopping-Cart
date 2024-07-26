import data from './data.json';
import Item from './item';
const Items = () => {

    return (
        <>
            {data.map((itemlist) => (
                <Item key={itemlist.id}
                    name={itemlist.name}
                    image={itemlist.image}
                    price={itemlist.price}
                />
            ))}
        </>
    );
};

export default Items;
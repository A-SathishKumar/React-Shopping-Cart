const Item = ({name, image, price}) => {

    return (
        <div className="card" style={{height: 300, width:200, display:'inline-block', border:'1px solid', margin:4}}>
            <img src={image} alt={name} style={{height: 200, width:200}}/>
            <h2>{name}</h2>
            <h4>{price}</h4>
            <button>Add to cart</button>
        </div>
    );
};

export default Item;
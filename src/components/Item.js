import "./item.css";
import Star from '../image/icon-star.svg';

function Item({ num, name }) {
    return (
        <div className="item">
            <div className="star">
                {(new Array(num)).fill(0).map((_, index) => (
                    <img key={index} src={Star} alt="star"></img>
                ))}
            </div>
            <div className="words">
                <p>Rated {num} Stars in {name}</p>
            </div>
        </div>
    );
}

export default Item;
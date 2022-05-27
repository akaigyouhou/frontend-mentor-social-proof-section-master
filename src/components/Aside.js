import "./aside.css";
import Item from './Item';

function Aside() {
    const items = [
        {
            number: 5, name: "Reviews"
        },
        {
            number: 5, name: "Report Guru"
        },
        {
            number: 5, name: "BestTech"
        }
    ];

    return (
        <aside>
            {items.map((item, index) => (
                <Item key={item.name} num={item.number} name={item.name} />
            ))}
        </aside>
    );
}

export default Aside;

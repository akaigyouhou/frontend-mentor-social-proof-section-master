import "./usercard.css";

function UserCard({ user }) {
    return (
        <div className="usercard">
            <div className="profile">
                <img src={user.image} alt={user.name}></img>
                <div className="info">
                    <div className="name">{user.name}</div>
                    <div className="role">Verified Buyer</div>
                </div>
            </div>
            <div className="comments">
                <p>{"“ " + user.comments} ”</p>
            </div>
        </div>
    );
}

export default UserCard;
import UserCard from './UserCard';
import "./section.css";
import users from '../users.json';

function Section() {
    return (
        <section>
        {users.map((user, index) => (
            <UserCard key={user.name} user={user} />
        ))}

        </section>
    );
}

export default Section;
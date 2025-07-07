import { Link } from "react-router-dom";

const posts = [
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "React is awesome" },
];

export default function Home() {
    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(p => (
                    <li key={p.id}>
                        <Link to={`/post/${p.id}`}>{p.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

import { useParams } from "react-router-dom";

const posts = [
    { id: 1, title: "First Post", content: "Hello World" },
    { id: 2, title: "Second Post", content: "React is awesome" },
];

export default function Post() {
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id));

    if (!post) return <h2>Post not found</h2>;

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </div>
    );
}

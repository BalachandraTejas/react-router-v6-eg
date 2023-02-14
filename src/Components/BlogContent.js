import { useParams } from "react-router-dom";

export default function BlogContent() {
  const { blogId } = useParams();
  return (
    <h2>This is Blog Content is about: {blogId}</h2>
  );
};
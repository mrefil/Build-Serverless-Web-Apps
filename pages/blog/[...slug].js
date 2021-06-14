import { useRoter } from 'next/router';

function BlogPostPage() {
    const router = useRoter();
    console.log(router.query);
    
    return <div>
        <h1>Blog Pages</h1>
    </div>
}

export default BlogPostPage;
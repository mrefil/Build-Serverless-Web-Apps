import { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();
    console.log(router.pathname);
    console.log(router.query);

    // router.query.projectid

    return <di>
        <h1>Portfolio Project Page</h1>
    </di>
}

export default PortfolioProjectPage;
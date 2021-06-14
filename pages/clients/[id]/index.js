import { useRouter } from 'next/router';

function ClientProjectPage() {
    const router = useRouter();

    function LoadProjectHandler() {
        // load data...
        // first method
        // router.push("/clients/mehmet/projecta");
        router.push({
            pathname: '/clients/[id]/[clientprojectid]',
            query: {id: 'mehmet', clientprojectid: 'projecta'}
        })
    }
    return <di>
        <h1>Client Projectt Page</h1>
        <button onClick={LoadProjectHandler}>Load project A</button>
    </di>
}

export default ClientProjectPage;
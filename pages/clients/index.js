import Link from 'next/link';

function ClientsPage() {
    const clients = [
        {id: "mehmet", name: "Mehmet"},
        {id: "ahmet", name: "Ahmet"}
    ];

    return <div>
        <h1>Clients Page</h1>
        <ul>
            {clients.map((client) => (
                <li key={client.id}>
                    <Link href={`/clients/${client.id}`}>{client.name}</Link>
                </li>
            ))}
        </ul>
    </div>
}

export default ClientsPage;
import { getFeaturedEvenrts} from '../dummy-data';

function HomePage() {
    const featuredEvents = getFeaturedEvenrts();
    
    return (
        <div>
            <ul></ul>
        </div>
    )
}

export default HomePage;
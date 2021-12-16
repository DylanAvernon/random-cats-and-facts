const Card = () => {
    const [image, setImage] = React.useState(null);
    const [fact, setFact] = React.useState(null);
    const fetchData = async () => {
        try {
            const image = await axios('https://thatcopy.pw/catapi/rest/');
            setImage(image.data);
        }
        catch(error) {
            console.log('Error retrieving image');
        }

        try {
            const fact = await axios('https://uselessfacts.jsph.pl/random.json?language=en');
            setFact(fact.data);
        }
        catch(error) {
            console.log('Error retrieving fact');
        }
    };
    React.useEffect(() => {
        fetchData();
    }, []);
    const nextCard = () => {
        setImage(null);
        setFact(null);
        fetchData();
    }
    return (
        <div className='card mx-auto shadow'>
            {image && <img src={image.url} className='card-img-top' alt='random image of a cat' />}
            {
                fact &&
                <div className='card-body'>
                    <p className='card-text'>{fact.text}</p>
                    <button className='btn btn-primary' onClick={nextCard}>Next Card</button>
                </div>
            }
        </div>
    );
}
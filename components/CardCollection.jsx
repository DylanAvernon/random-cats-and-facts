const CardCollection = () => {
    const [cards, setCards] = React.useState(null);
    return (
        <div className='container h-100'>
            <div className='row align-items-center h-100'>
                <div className='col-6 mx-auto'>
                    <Card />
                    {/* <div className='text-center'>
                        Hello
                    </div> */}
                </div>
            </div>
        </div> 
    );
}
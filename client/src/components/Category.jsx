import Card from 'react-bootstrap/Card';
function Category({ data }) {

    return (
        <>
            <Card style={{ width: '18rem' }} className='flex-wrap border-0 my-3 mx-2'>
                <Card.Img variant="top" src={data.photo} className='card-img mx-auto' />
                <Card.Body className='text-center'>
                    <Card.Title className='card-text'>{data.name}</Card.Title>
                    <Card.Text className='text-muted text-decoration-none'>
                        {data.number}+ Products
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default Category;
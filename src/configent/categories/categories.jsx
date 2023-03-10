import React, { useEffect, useState } from 'react'
import { instence } from './../../API/api';
import CategoryItem from './item-categories';

const Categoris = () => {


    const [categoriysData, setCategoriys] = useState([]);
    useEffect(() => {
        instence.get("/categories").then(respons => setCategoriys(respons.data))
    }, [])

    return (
        <div>
            <Container>
                <div className='d-flex justify-content-between mt-5' >
                    {
                        categoriysData.map(cat => <CategoryItem img={cat.image} text={cat.name} />)

                    }
                </div>

            </Container>
        </div>
    )
}

export default Categoris

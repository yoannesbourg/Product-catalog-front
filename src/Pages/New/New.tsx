import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createProduct } from '../../service/ActualProduct/actions';
import styled from 'styled-components';

import { ProductPageContainer, InfoWrapper, EditWrapper } from './StyledComponents';

const New = (): JSX.Element => {
    //product states
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [photo, setPhoto] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);
    //domstates
    const dispatch = useDispatch();

    const PhotoWrapper = styled.div`
        background-image: url(${''});
        background-size: cover;
        background-repeat: no-repeat;
        background-color: white;
        width: 50%;
        height: 50vh;
        border-radius: 24px;
    `;

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const createNewProduct = () => {
        const newProduct = {
            name,
            description,
            photo,
            price,
            active,
        };
        dispatch(createProduct(newProduct));
    };

    return (
        <ProductPageContainer>
            {/* <label htmlFor="file" className="pencil banner_button">
                upload
            </label>

            <input
                onChange={async (e: any) => {
                    console.log(e.target.files[0]);
                }}
                type="file"
                name="file"
                id="file"
                hidden
                height={0}
            /> */}
            <PhotoWrapper />

            <InfoWrapper>
                <EditWrapper>
                    <input value={name} onChange={(e) => handleEdit(e, setName)} />
                    <input value={description} onChange={(e) => handleEdit(e, setDescription)} />
                    <input value={price} onChange={(e) => setPrice(parseInt(e.target.value))} />
                    <input type="checkbox" checked={active} value={'active'} onChange={() => setActive(!active)} />
                    <button onClick={createNewProduct}>Create</button>
                </EditWrapper>

                {/* <p>{description}</p>
                <p>{price}</p> */}
            </InfoWrapper>
        </ProductPageContainer>
    );
};

export default New;

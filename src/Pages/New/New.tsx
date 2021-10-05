import React, { Dispatch, SetStateAction, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../service/ProductList/actions';

import { ProductPageContainer, InfoWrapper, EditWrapper, PhotoWrapper } from './StyledComponents';
import { uploadImage } from '../../helpers/uploadImage';

import { StoreState } from '../../service/StoreState';

const New = (): JSX.Element => {
    //product states
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [photo, setPhoto] = useState<string>('/');
    const [price, setPrice] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);
    const productList = useSelector((state: StoreState) => state.ProductList.data);

    //domstates
    const dispatch = useDispatch();

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>, setter: Dispatch<SetStateAction<string>>) => {
        setter(e.target.value);
    };

    const resetFields = () => {
        setName('');
        setDescription('');
        setPhoto('');
        setPrice(0);
        setActive(false);
    };

    const handleSuccess = () => {
        resetFields();
        alert('Success');
        console.log(productList[productList.length - 1]);
        // window.location.replace(`/product/${productList[productList.length - 1]._id}`);
    };

    const createNewProduct = () => {
        if (name && description && price && photo) {
            const newProduct = {
                name,
                description,
                photo,
                price,
                active,
            };
            dispatch(createProduct(newProduct));
            handleSuccess();
        } else {
            alert('Please fill all fields');
        }
    };

    const handleUploadImage = async (event: any) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        formData.append('upload_preset', 'dr973rmw');
        const response = await uploadImage(formData);
        if (response.status !== 200) {
            alert(response.message);
        }
        setPhoto(response.url);
    };

    return (
        <ProductPageContainer>
            <PhotoWrapper
                onChange={(event) => handleUploadImage(event)}
                type="file"
                name="file"
                id="file"
                height={0}
                photo={photo}
            ></PhotoWrapper>

            <InfoWrapper>
                <EditWrapper>
                    <input value={name} onChange={(e) => handleEdit(e, setName)} />
                    <input value={description} onChange={(e) => handleEdit(e, setDescription)} />
                    <input
                        value={price}
                        onChange={(e) => {
                            if (parseInt(e.target.value) !== NaN) {
                                setPrice(parseInt(e.target.value));
                            }
                        }}
                    />
                    <div>
                        <label>Active</label>
                        <input type="checkbox" checked={active} value={'active'} onChange={() => setActive(!active)} />
                    </div>
                    <button onClick={createNewProduct}>Create</button>
                </EditWrapper>
            </InfoWrapper>
        </ProductPageContainer>
    );
};

export default New;

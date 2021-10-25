import React, { Dispatch, SetStateAction, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createProduct } from '../../service/ProductList/actions';
import { uploadImage } from '../../service/UploadImageHandler/actions';

import { ProductPageContainer, InfoWrapper, EditWrapper, PhotoWrapper } from './StyledComponents';
import { Loader, LoaderWrapper } from '../../components/Loader/Loader';

import { StoreState } from '../../service/StoreState';

const New = (): JSX.Element => {
    //product states
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [photo, setPhoto] = useState<string>('/');
    const [price, setPrice] = useState<number>(0);
    const [active, setActive] = useState<boolean>(false);

    //upload handler
    const UploadImageHandlerResponse = useSelector((state: StoreState) => state.UploadImageHandler.data);
    const isUploadImageLoading = useSelector((state: StoreState) => state.UploadImageHandler.loading);
    const UploadImageHandlerStatus = useSelector((state: StoreState) => state.UploadImageHandler.status);

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
        window.location.replace('/');
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
        dispatch(uploadImage(event));
    };

    useEffect(() => {
        if (UploadImageHandlerResponse) {
            setPhoto(UploadImageHandlerResponse);
        } else if (UploadImageHandlerStatus && UploadImageHandlerStatus !== 200) {
            alert('error');
        }
    }, [UploadImageHandlerResponse]);

    return (
        <ProductPageContainer>
            {isUploadImageLoading ? (
                <LoaderWrapper>
                    <Loader width={30} />
                </LoaderWrapper>
            ) : (
                <PhotoWrapper
                    onChange={(event) => handleUploadImage(event)}
                    type="file"
                    name="file"
                    id="file"
                    height={0}
                    photo={photo}
                ></PhotoWrapper>
            )}

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

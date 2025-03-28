import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useGetProductQuery } from "../../features/api/apiSlice";
import {ROUTES} from '../../utils/routes'
import Product from "./Product";

const SingleProduct = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const {data , isLoading, isFetching, isSuccess} = useGetProductQuery({id});
    // console.log(data )
    // console.log(data?.category?.name )

    useEffect(() => {
        if(!isFetching && isLoading && !isSuccess){
            navigate(ROUTES.HOME);
        }
    }, [isLoading, isFetching, isSuccess ])

    return !data?(<section className="preloader">Loading...</section>):(<><Product {...data}/></>)
}

export default SingleProduct
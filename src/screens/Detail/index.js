import React from "react";
import { HomeList,Hero,SCreenScrollConatiner,GoBack } from "~/components";
import { useDataStore } from "~/services/stores";


export const Detail = () => {
    const {selectData} = useDataStore()
    return(
        <SCreenScrollConatiner aling="flex-start" just="flex-start">
            <Hero item={selectData} withoutLogo={true} onDetail={true}/>
            <GoBack/>
        </SCreenScrollConatiner>
    )
}
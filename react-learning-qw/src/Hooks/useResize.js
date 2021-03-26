import React, {useEffect, useState} from 'react';

export default function useResize(myRef){
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        function handleResize(){
            setWidth(myRef.current.offsetWidth);
        }
        window.addEventListener('resize', handleResize);

        return ()=>{
            window.removeEventListener('resize', handleResize);
        }
    },[myRef]);

    return {width};
}
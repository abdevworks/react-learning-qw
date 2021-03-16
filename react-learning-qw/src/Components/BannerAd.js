import React, {useState, useEffect} from "react";
import {useTransition, animated, config} from 'react-spring';


const slides = [
    { id: 0, url: 'photo-1615219956414-e27b6952d635?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80' },
    { id: 1, url: 'photo-1615194876336-681d4c2fb462?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, url: 'photo-1612831455546-a87cb4d6b276?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=925&q=80' },
    { id: 3, url: 'photo-1615212886093-b3ad2e57f916?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
];

export default function BannerAd(){

    const [index, set] = useState(0);
    const  [direction, setDirection] = useState(1);
    const transitionsLeft = useTransition(slides[index], item => item.id, {
        from: {opacity: 0, transform: `translateX(100%)` },
        enter: { opacity: 1, transform: `translateX(0%)` },
        leave: { opacity: 0, transform: `translateX(-100%)` },
    });

    const transitionsRight = useTransition(slides[index], item => item.id, {
        from: {opacity: 0, transform: `translateX(-100%)` },
        enter: { opacity: 1, transform: `translateX(0%)` },
        leave: { opacity: 0, transform: `translateX(100%)` },
    });
    

    useEffect(() =>{
        const intervalId = setInterval(() => {
            setDirection(1);
            set(state => (state + 1) % slides.length);
        }, 5000);
        return ()=>{
            //cleanup function
            clearInterval(intervalId);
        }
    },[]);


    function handleRightClick(){
        setDirection(1);
        set(state => (state + 1) % slides.length);
    }

    function handleLeftClick(){
        setDirection(-1);
        if(index > 1){
            set(state => (state - 1) % slides.length); 
        }else{
            set(slides.length-1);
        }
        
    }

    return(
        <div className="flex items-center rounded-xl overflow-hidden">
            
            <div 
                className="absolute z-10 left-0 border-1 border-black rounded-full h-10 w-10 flex items-center justify-center font-bold bg-white shadow-md cursor-pointer  select-none" 
                onClick={handleLeftClick}>
                {"<"}
            </div>

            <div className="h-44 relative">
                {
                direction === 1 && transitionsLeft.map(({ item, props, key }) => (
                        <animated.div
                            key={key}
                            className="h-44 w-screen bg-cover bg-center absolute"
                            style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url})`}}
                        />
                ))}
                {
                direction === -1 && transitionsRight.map(({ item, props, key }) => (
                    <animated.div
                        key={key}
                        className="h-44 w-screen bg-cover bg-center absolute"
                        style={{ ...props, backgroundImage: `url(https://images.unsplash.com/${item.url})`}}
                    />
                ))
                }
            </div>

            <div 
                className="absolute z-10 right-0 border-1 border-black rounded-full h-10 w-10 flex items-center justify-center  font-bold bg-white shadow-md cursor-pointer select-none" 
                onClick={handleRightClick}>
                {">"}
            </div>
        </div>

    );
}


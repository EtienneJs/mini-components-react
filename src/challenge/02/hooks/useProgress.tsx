import React, { useEffect, useState } from 'react'
import { btnInterface,btn,circle,useProgressType } from '../interface';


export const useProgress = (circles:circle[] = []):useProgressType => {
    const [pogress, setPogress] = useState<string>("0%");
    const [currentActive,setCurrentActve ] = useState<number>(1);
    const [circlesState,setCirclesState] = useState<circle[]>(circles);
    const [btn,setBtn] = useState<btnInterface>({
        next:{
            disable:false,
            nombre:"next"
        },
        prev:{
            disable:true,
            nombre:"prev"
        }
    });

    const handleClickNext = ():void =>{
        const newCurreentActive =1+currentActive; 
        setCurrentActve(newCurreentActive);
    }
    const handleClickPrev = ():void =>{
        setCurrentActve(currentActive-1);
        
    }
    useEffect(() => {
        if(currentActive < 1){
            setCurrentActve(circles.length);
        }
        if(currentActive > circles.length){
            setCurrentActve(circles.length);
        }
        handleUpdate();
    }, [currentActive])
    
    useEffect(() => {
        setPogress((circlesState.filter((x:circle)=>x.active == true).length - 1)/(circles.length - 1)*100 + "%");
    }, [circlesState])
    
    const handleUpdate = ():void =>{
        const newCircle = [...circlesState];
        const updateCircles = newCircle.map((circleArr:circle, idx:number) =>{
           return {
            ...circleArr,active: idx < currentActive
           }
        });
        setCirclesState(updateCircles);
        if(currentActive === 1){
            setBtn(
                {
                    ...btn,prev:{...btn.prev,disable:true}
                }
            )
        } else if(currentActive === circles.length){
            setBtn(
                {
                    ...btn,next:{...btn.next,disable:true}
                }
            )
        } else {
            setBtn({next:{...btn.next,disable:false},prev:{...btn.prev,disable:false}});
        }
    }


  return [pogress,circlesState,btn,handleClickNext,handleClickPrev];
}

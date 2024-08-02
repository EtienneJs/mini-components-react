import React from 'react'
import './styleProgress.css'
import { circle } from './interface'
import { useProgress } from './hooks/useProgress';

export const ProgessSteps = () => {
    const initialValue:circle[] = [{active:true,className:"circle",value:"1"},{active:false,className:"circle",value:"2"},{active:false,className:"circle",value:"3"},{active:false,className:"circle",value:"4"}];
    const [pogress,circlesState,btn,handleClickNext,handleClickPrev] = useProgress(initialValue);
    return (
        <div className='body-progress'>
            <div className="container-progress">
                <div className="progress-container">
                    <div style={{width:pogress}} className="progress" id="progress"></div>
                    {
                        circlesState?.map((circle,idx)=>(
                            <div className={circle.active ? circle.className + ' active' : circle.className} key={idx}>{circle.value}</div>
                        ))
                    }
                </div>

                <div className='flex'>
                    <button className="btn" id="prev" onClick={handleClickPrev} disabled={btn.prev.disable}>Prev</button>
                    <button className="btn" onClick={handleClickNext} disabled={btn.next.disable} id="next">Next</button>
                </div>
            </div>
        </div>
    )
}

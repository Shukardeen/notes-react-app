import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import copyIcon from '../assets/copysvg.svg'
import toast from 'react-hot-toast';

function ViewPaste() {
    const pasteId = useParams();
    // console.log(pasteId);
    const paste = useSelector((state) => state.paste.pastes).filter((item) => item.id === pasteId.id);
    // console.log(paste);
    // const paste = pastes.filter((item) => item.id === pasteId.id);
    // console.log(paste);
    
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-[90%] md:w-[70%] flex justify-center items-center'>
                <input 
                    type="text" 
                    placeholder='Title'
                    // value={title}
                    value={paste[0].title}
                    // onChange={(e) => setTitle(e.target.value)}
                    className='h-10 pl-2 border-1 rounded-sm mt-3 w-full'
                    disabled
                />
            </div>

            <div className='w-[90%] md:w-[70%] flex flex-col items-center mt-3'>
                <div className='h-10 w-full border-1 rounded-t-sm flex'>
                    <div className='w-[50%] h-full gap-1 pl-2 flex items-center'>
                        <div className='w-5 h-5 rounded-full bg-red-700'></div>
                        <div className='w-5 h-5 rounded-full bg-yellow-500'></div>
                        <div className='w-5 h-5 rounded-full bg-green-700'></div>
                    </div>
                    <div className='w-[50%] flex justify-end items-center pr-2'>
                        <button className='cursor-pointer' onClick={() => {
                            if(!paste[0].content) {
                                alert("No content to copy.");
                            } else {
                                navigator.clipboard.writeText(paste[0].content);
                                toast.success("Content copied to clipboard");
                            }
                        }}><img src={copyIcon} alt="copy icon" className='opacity-100' /></button>
                    </div>
                </div>
                <div className='w-full'>
                    <textarea 
                        className='w-full md:h-90 h-130 p-1.5 border-1 rounded-b-sm'
                        name="pasteContent" 
                        id="pasteContent" 
                        value={paste[0].content}
                        placeholder='Write your content here'
                        disabled
                    />
                </div>
            </div>
        </div>
    )
}

export default ViewPaste

import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { addPaste, updatePaste } from '../slices/pasteSlice';
import copyIcon from '../assets/copysvg.svg'
import toast from 'react-hot-toast';

function Home() {
    const [title, setTitle] = useState('');
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const [searchParam, setSearchParam] = useSearchParams();
    const pasteId = searchParam.get('pasteId');
    const dispatch = useDispatch();
    const id = nanoid();
    const allPastes = useSelector((state) => state.paste.pastes);

    const createPaste = () => {
        if(!title || !value || !description) {
            alert("Title, description and content are required");
        } else {
            const paste = {
                title: title,
                content: value,
                id: pasteId || id,
                createdAt: new Date().toLocaleDateString(),
                description: description
            }
            
            if(pasteId) {
                //update
                dispatch(updatePaste(paste));
            } else {
                //create
                dispatch(addPaste(paste));
            }
    
            //after creation/updation
            setTitle('');
            setValue('');
            setDescription('');
            setSearchParam({});
        }
    }

    useEffect(() => {
        if(pasteId) {
            const paste = allPastes.filter((item) => item.id === pasteId);
            const newTitle = paste[0]?.title;
            const newDescription = paste[0]?.description;
            setTitle(newTitle);
            setDescription(newDescription);
            setValue(paste[0]?.content);
        } else {
            setTitle('');
        }
    }, [pasteId]);

    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-[89%] md:w-[70%] flex justify-center items-center gap-3 px-1'>
                <input 
                    type="text" 
                    placeholder='Note title'
                    // value={title}
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='h-10 pl-2 border-1 rounded-sm mt-3 w-[68%] md:w-[85%]'
                    required
                />

                <button className='w-[32%] md:w-[15%] h-10 border-1 rounded-sm mt-3 cursor-pointer bg-blue-500 text-white' onClick={createPaste}>
                    {pasteId ? "Update Note" : "Create Note"}
                </button>
            </div>

            <div className='w-[90%] md:w-[70%] flex flex-col items-center mt-1 p-1.5'>
                <div className='h-10 w-full border-1 rounded-t-sm flex'>
                    <div className='w-[50%] h-full gap-1 pl-2 flex items-center'>
                        <div className='w-5 h-5 rounded-full bg-red-700'></div>
                        <div className='w-5 h-5 rounded-full bg-yellow-500'></div>
                        <div className='w-5 h-5 rounded-full bg-green-700'></div>
                    </div>
                    <div className='w-[50%] flex justify-end items-center pr-2'>
                        <button className='cursor-pointer' onClick={() => {
                            if(!value) {
                                alert("No content to copy.");
                            } else {
                                navigator.clipboard.writeText(value);
                                toast.success("Content copied to clipboard");
                            }
                        }}><img src={copyIcon} alt="copy icon" className='opacity-100' /></button>
                    </div>
                </div>

                <div  className='w-full'>
                <input 
                    type="text" 
                    placeholder='Description'
                    // value={title}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='h-10 pl-2 w-full border-x-1'
                />
                </div>

                <div className='w-full'>
                    <textarea 
                        className='w-full md:h-85 h-110 p-1.5 border-1 rounded-b-sm'
                        name="pasteContent" 
                        id="pasteContent" 
                        value={value}
                        placeholder='Write your content here'
                        onChange={(e) => setValue(e.target.value)}
                        required
                    />
                </div>
            </div>
        </div>
    )
}

export default Home

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {removePaste,resetPaste} from '../slices/pasteSlice'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { copysvg, editsvg, deletesvg, viewsvg, calendersvg } from '../assets/index';

function Pastes() {
    const [searchTerm, setSearchTerm] = useState('');

    const pastes = useSelector((state) => state.paste.pastes);
    // console.log(pastes);

    const dispatch = useDispatch();

    const filterData = pastes.filter((paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleDelete = (pasteId) => {
        dispatch(removePaste(pasteId));
    }

    return (
        <div className='w-full flex flex-col items-center sticky'>
            <div className='w-[90%] md:w-[70%] sticky top-12 bg-white py-3'>
            <input 
                type="search" 
                placeholder='Search a note...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='h-10 border-1 rounded-sm w-full p-2'
            />
            </div>

            <div className='w-[90%] md:w-[70%] border-1 my-3 rounded-sm'>
                <div className='w-full h-20 border-b-1 px-5 flex items-center'>
                    <div className='w-[50%] h-full flex items-center text-3xl font-bold'>
                    All Notes
                    </div>
                    <div className='w-[50%] flex justify-end'>
                        <button className='border-1 border-red-300 cursor-pointer p-1.5 rounded-sm bg-red-300' title='Delete all notes' onClick={() => dispatch(resetPaste())}><img src={deletesvg} alt='deleteIcon' /></button>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center p-4 gap-3'>
                    {
                        filterData.length > 0 ? filterData.map((data) => (
                            <div className='w-full flex md:flex-row flex-col rounded-xs p-5 border-1' key={data?.id}>
                                <div className='md:w-[50%] w-full mb-5 md:mb-0'>
                                    <h1 className='text-xl font-bold'>{data.title}</h1>
                                    <p>{data.description}</p>
                                </div>
                                <div className='md:w-[50%] w-full flex flex-col gap-1.5'>
                                    <div className='w-full flex md:justify-end justify-start gap-1'>
                                        <button className='cursor-pointer border-1 rounded-sm w-9 md:w-8 h-8 hover:border-green-600 flex justify-center items-center' title='Edit note'>
                                            <Link to={`/?pasteId=${data?.id}`}><img src={editsvg} alt='editImg' /></Link>
                                        </button>

                                        <button className='cursor-pointer border-1 rounded-sm w-9 md:w-8 h-8 hover:border-green-600 flex justify-center items-center' title='View note'>
                                            <Link to={`${data?.id}`}><img src={viewsvg} alt='viewImg' /></Link>
                                        </button>

                                        <button className='cursor-pointer border-1 rounded-sm w-9 md:w-8 h-8 hover:border-green-600 flex justify-center items-center' onClick={()  => handleDelete(data?.id)} title='Delete note'><img src={deletesvg} alt='deleteImg' />
                                        </button>

                                        <button className='cursor-pointer border-1 rounded-sm w-9 md:w-8 h-8 hover:border-green-600 flex justify-center items-center' title='Copy note content' onClick={() => {
                                            navigator.clipboard.writeText(data?.content);
                                            toast.success("Content copied to clipboard");
                                        }}><img src={copysvg} alt='copysvg' />
                                        </button>
                                    </div>
                                    <div className='w-full flex justify-start md:justify-end pt-2'>
                                        <div className='w-full md:w-[50%] flex items-center justify-start md:justify-end'>
                                            <img src={calendersvg} alt="calenderIcon" />
                                            <p>Created at: <b>{data.createdAt}</b></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <h1>No notes to show</h1>
                    }
                </div>
            </div>

        </div>
    )
}

export default Pastes

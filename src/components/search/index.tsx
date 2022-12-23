import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Search: React.FunctionComponent = () => {

    const [isSearch, setIsSearch] = useState<boolean>(false);

    return (
        <>
            <SearchIcon fontSize='medium' sx={{ cursor: 'pointer' }} onClick={() => setIsSearch(!isSearch)} />
            {
                isSearch &&

                <div className='fixed top-0 left-0 w-full h-full bg-slate-300 z-50 flex items-center justify-center'>
                    <button
                        className='fixed top-10 left-1/2 p-3 rounded-full border border-gray-400 transition-all duration-500 hover:bg-gray-400'
                        onClick={() => setIsSearch(false)}
                    >
                        <CloseOutlinedIcon />
                    </button>
                    <input className='w-full text-center mx-4 lg:w-1/2 bg-transparent text-4xl border-b border-gray-500 pb-2 focus:outline-none' placeholder='Search...' />
                </div>
            }
        </>
    )
}

export default Search
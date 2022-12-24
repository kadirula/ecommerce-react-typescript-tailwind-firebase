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

                <div className='fixed top-0 left-0 w-full h-full bg-slate-400 bg-opacity-95 z-50 flex items-center justify-center'>
                    <div className='p-7 bg-white rounded-lg w-1/2'>

                        <button
                            className='fixed top-10 left-1/2 p-3 rounded-full border border-white transition-all duration-500 hover:bg-white'
                            onClick={() => setIsSearch(false)}
                        >
                            <CloseOutlinedIcon />
                        </button>
                        <input
                            className='w-full text-center inline-block mx-4 bg-transparent text-4xl border-b border-orange-500 placeholder:text-orange-500 pb-2 focus:outline-none' placeholder='Search...'
                            autoFocus={true}
                        />
                    </div>
                </div>
            }
        </>
    )
}

export default Search
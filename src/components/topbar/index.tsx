const Topbar = () => {


    return (
        <div className='bg-orange-500 py-1'>
            <div className='container mx-auto'>
                <div className="flex items-center justify-end">
                    <div className='flex items-center gap-2'>
                        <a href="" className="text-xs text-white pr-2 border-r border-white">
                            Siparişlerim
                        </a>
                        <a href="" className="text-xs text-white pr-2">
                            Favorilerim
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Topbar
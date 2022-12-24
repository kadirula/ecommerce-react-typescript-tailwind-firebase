import './style.css';

interface IProductSkeletonProps {
    productCount: number
}

const ProductSkeleton: React.FunctionComponent<IProductSkeletonProps> = ({ productCount }) => {

console.log(productCount);

    const RenderProductSkeleton = () => {
        return (
            <div className='skeleton w-full rounded-md overflow-hidden shadow-md' >
                <div className='w-full h-52 bg-gray-500'></div>
                <div className='text-center py-3 flex flex-col items-center justify-center px-4'>
                    <span className='w-14 h-4 inline-block bg-gray-500'></span>
                    <span className='w-full h-6 block bg-slate-500 my-2'></span>
                    <div className="w-40 h-4 bg-gray-500 mb-2"></div>
                    <div className='w-14 h-4 bg-gray-500'></div>
                </div>
            </div >
        )
    }
    return Array(productCount).fill(<RenderProductSkeleton />)
}

export default ProductSkeleton
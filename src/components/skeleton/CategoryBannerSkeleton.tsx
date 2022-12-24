import './style.css';

interface ICategoryBannerSkeletonProps {
    category: any
}
const CategoryBannerSkeleton: React.FunctionComponent<ICategoryBannerSkeletonProps> = ({ category }) => {
    return (
        <div className={`skeleton w-full bg-gray-500 h-64 ${category.size === 'lg' ? 'lg:h-full lg:row-span-2 lg:col-span-3' : 'lg:col-span-2'} flex items-center justify-start`}>
            <div className='pl-6'>
                <div className='h-9 w-52 bg-gray-700'></div>
                <div className='h-6 w-40 bg-gray-700 mt-3'></div>
            </div>
        </div>
    )
}

export default CategoryBannerSkeleton
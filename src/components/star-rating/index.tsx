import React, { useState, useEffect } from 'react'
import { FaStar, FaRegStar } from 'react-icons/fa'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
interface IStarRatingProps {
    rating: number
}
const StarRating: React.FunctionComponent<IStarRatingProps> = ({ rating }) => {

    const [starIcons, setStarIcons] = useState<Array<any>>([]);
    useEffect(() => {
        for (let i = 0; i < rating; i++) {
            setStarIcons(oldItem => [...oldItem, <StarIcon fontSize='small' />])
        }

    }, [])

    return (
        <div className='flex items-center justify-center'>
            <div className="relative">
                <StarBorderIcon fontSize='small' />
                <StarBorderIcon fontSize='small' />
                <StarBorderIcon fontSize='small' />
                <StarBorderIcon fontSize='small' />
                <StarBorderIcon fontSize='small' />
                <div className="absolute left-0 top-0 h-full overflow-hidden text-orange-500">
                    {
                        starIcons.map((icon, index) => (
                            <React.Fragment key={index}>
                                {icon}
                            </React.Fragment>
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}

export default StarRating
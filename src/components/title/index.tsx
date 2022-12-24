import React from 'react'


interface ITitleProps {
    title: string
}

const Title: React.FunctionComponent<ITitleProps> = ({ title }) => {
    return (
        <div className="relative pb-1 inline-block">
            <h4 className='uppercase text-2xl font-semibold tracking-widest'>{title.replace('-', ' ')}</h4>
            <span className='absolute bottom-0 left-0 w-1/3 h-0.5 bg-orange-500'></span>
        </div>
    )
}

export default Title
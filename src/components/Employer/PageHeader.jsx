import { Typography } from '@material-tailwind/react'
import React from 'react'

function PageHeader({ header }) {
    return (
        <>
            <div className="text-center md:p-10 border-b border-black">
                <Typography variant="h1" className="text-3xl font-bold">
                    {header}
                </Typography>
            </div>
        </>
    )
}

export default PageHeader

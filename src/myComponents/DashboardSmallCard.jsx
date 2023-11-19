import React from 'react'
import { Typography, Card, CardBody, Button } from '@material-tailwind/react';


function DashboardSmallCard() {
    return (
        <Card className="mt-6 w-80">
            <CardBody className='text-center'>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                    Followers
                </Typography>
                <Typography>
                    count
                </Typography>
                <Typography>
                    Additional
                </Typography>
            </CardBody>
        </Card>
    )
}

export default DashboardSmallCard

import React, { useEffect, useState } from 'react'
import { Popover, PopoverHandler, PopoverContent, Button, Input, Typography, } from "@material-tailwind/react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi"

function EmployerAction({ index, user }) {

    const [employer, setEmployer] = useState(null)

    console.log(user);

    if (!user) {
        return
    }

    return (
        <Popover placement="bottom">
            <PopoverHandler>
                <button><PiDotsThreeOutlineVerticalLight /></button>
            </PopoverHandler>
            <PopoverContent className="w-96">

                <Typography
                    variant="small"
                    color="blue-gray"
                    className="mb-1 font-bold"
                >
                    Block User : {user.username}
                </Typography>
                <div className="flex gap-2">
                    <Input
                        size="lg"
                        placeholder="Reason"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: "before:content-none after:content-none",
                        }}
                    />
                    <Button className="flex-shrink-0 bg-red-500">
                        Block
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default EmployerAction

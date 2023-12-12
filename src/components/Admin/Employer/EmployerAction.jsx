import React, { useEffect, useState } from 'react';
import { Popover, PopoverHandler, PopoverContent, Button, Input, Typography } from "@material-tailwind/react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { manageUserApi } from '../../../api/UserApi';
import { toast } from 'react-toastify'

function EmployerAction({ user }) {
    const [is_active, setIs_active] = useState(true);

    const handleActive = () => setIs_active(prevState => !prevState);

    const handleAction = (userId) => {
        if (user) {
            const values = {
                'is_active': !is_active,
            }
            manageUserApi(userId, values)
                .then(() => handleActive());
            toast.success("Status updated")
        }
    }

    useEffect(() => {
        if (user) {
            setIs_active(user.is_active);
        }
    }, [user]);

    if (!user) {
        return null;
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
                    Block User: {user.username}
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
                    <Button className="flex-shrink-0 bg-red-500" onClick={() => handleAction(user.id)}>
                        {is_active ? 'Block' : 'Unblock'}
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

export default EmployerAction;

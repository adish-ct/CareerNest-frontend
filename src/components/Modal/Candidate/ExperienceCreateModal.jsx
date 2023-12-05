// ExperienceDialog.jsx
import React, { useState } from 'react'
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea, Select } from "@material-tailwind/react";

function ExperienceDialog({ open, handleOpen }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("working");
        handleOpen();
    }

    return (
        <>
            <Dialog open={open} handler={handleOpen}>
                {/* form should be inside the Dialog block */}
                <form onSubmit={handleSubmit}>
                    <DialogHeader>Edit Experience</DialogHeader>
                    <DialogBody>
                        <div className="grid grid-cols-2 gap-4">
                            <Input type="text" label="Job Role" />
                            <Input type="text" label="Organization" />
                            <Select label="Job Type">
                                <option value="full-time">Full Time</option>
                                <option value="part-time">Part Time</option>
                                <option value="freelance">Freelance</option>
                            </Select>
                            <Input type="text" label="Location" />
                            <Select value='' name='workType'>
                                <option value="office">Office</option>
                                <option value="remote">Remote</option>
                            </Select>
                            <Input type="text" label="State" />
                            <Input type="date" label="Start Date" />
                            <Input type="date" label="End Date" />
                            <div className="flex justify-start gap-2 items-center">
                                <label htmlFor="checkbox">Currently working here </label>
                                <input name='checkbox' type="checkbox" className='w-5 h-5 text-green-500' style={{ color: 'blue' }} />
                            </div>
                            <Input type="text" label="Time Period" />
                            <Textarea label="Description" rows={4} />
                            <Textarea label="Skills" rows={2} />
                        </div>
                        <div className="grid grid-cols-1 mt-5">
                            <div className="flex gap-2 justify-start items-center">
                                <label htmlFor="document">Related document:</label>
                                <input type="file" label="Documents" name='document' />
                            </div>
                        </div>
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button color="green" type='submit'>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </form>
            </Dialog>
        </>
    )
}

export default ExperienceDialog;

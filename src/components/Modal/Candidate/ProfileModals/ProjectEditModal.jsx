import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Input, Spinner, Textarea } from '@material-tailwind/react'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import * as Yup from 'yup'
import getLocal from '../../../../helper/Auth'
import axios from 'axios'
import { baseUrl } from '../../../../api/Api'

function ProjectEditModal({ open, handler, selectedProject }) {

    const formik = useFormik({
        initialValues: {
            project_name: selectedProject?.project_name || '',
            category: selectedProject?.category || '',
            start_date: selectedProject?.start_data || null,
            end_date: selectedProject?.end_date || null,
            currently_working: selectedProject?.currently_working || false,
            collab_project: selectedProject?.collab_project || false,
            git_link: selectedProject?.git_link || '',
            website_link: selectedProject?.website_link || '',
            description: selectedProject?.description || '',
            features: selectedProject?.features || '',
        },
        validationSchema: Yup.object({
            project_name: Yup.string().required("* required field"),
            category: Yup.string().matches(/^[a-zA-Z\s$-]+$/, 'category should only contain alphabets').required("* required field"),
            start_date: Yup.date().required("* required field"),
            description: Yup.string().required("* required field"),
            features: Yup.string().required("* required field"),
        }),
        onSubmit: async (values) => {
            try {
                const token = getLocal()
                if (selectedProject) {
                    // token autherization
                    const response = await axios.put(`${baseUrl}/project/${selectedProject.id}/`, values, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    console.log(response.data);
                }
                toast.success("Document updated")
            } catch (error) {
                console.log(error);
            } finally {
                handler();
            }
        }
    })

    useEffect(() => {
        if (selectedProject) {
            formik.setValues({
                project_name: selectedProject?.project_name || '',
                category: selectedProject?.category || '',
                start_date: selectedProject?.start_date || null,
                end_date: selectedProject?.end_date || null,
                currently_working: selectedProject?.currently_working || false,
                collab_project: selectedProject?.collab_project || false,
                git_link: selectedProject?.git_link || '',
                website_link: selectedProject?.website_link || '',
                description: selectedProject?.description || '',
                features: selectedProject?.features || '',
            })
        }
    }, [selectedProject, open])


    return (
        <>
            <ToastContainer />
            <Dialog open={open}>
                <ToastContainer />

                {/* form should be inside the Dialog block */}
                {selectedProject && (
                    <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                        <DialogHeader>Edit Project</DialogHeader>
                        <DialogBody>
                            <div className="grid grid-cols-2 gap-4">

                                {/* project_name */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="text"
                                        label="Project Name"
                                        name="project_name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.project_name}
                                        className={
                                            formik.errors.project_name && formik.touched.project_name
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    />
                                    {formik.errors.project_name && formik.touched.project_name && (
                                        <small className="text-red-500 text-xs italic">{formik.errors.project_name}</small>
                                    )}
                                </div>
                                {/* project_name */}

                                {/* category */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="text"
                                        label="category"
                                        name="category"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.category}
                                        className={
                                            formik.errors.category && formik.touched.category
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    />
                                    {formik.errors.category && formik.touched.category && (
                                        <small className="text-red-500 text-xs italic">{formik.errors.category}</small>
                                    )}
                                </div>
                                {/* category */}


                                {/* start date */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="date"
                                        label="Start Date"
                                        name="start_date"  // Added name attribute
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.start_date ? formik.values.start_date : ''}
                                        className={
                                            formik.errors.start_date && formik.touched.start_date
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    />
                                    {formik.errors.start_date && formik.touched.start_date && (
                                        <small className="text-red-500 text-xs italic">{formik.errors.start_date}</small>
                                    )}
                                </div>
                                {/* start date */}

                                {/* end date */}
                                <Input
                                    type="date"
                                    label="End Date"
                                    name="end_date"  // Added name attribute
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.currently_working ? '' : formik.values.end_date}
                                    disabled={formik.values.currently_working
                                    }
                                />
                                {/* end date */}

                                {/* check box */}
                                <div className="flex justify-start gap-3 items-center">
                                    <label htmlFor="checkbox">Currently working </label>
                                    <input
                                        name='currently_working'
                                        onChange={e => {
                                            formik.handleChange(e);
                                            if (e.target.checked) {
                                                formik.setFieldValue('end_date', null)
                                            }
                                        }}
                                        onBlur={formik.handleBlur}
                                        type="checkbox"
                                        className='w-5 h-5 text-green-500'
                                        style={{ color: 'blue' }}
                                        checked={formik.values.currently_working}
                                    />
                                </div>
                                {/* check box */}

                                {/* collab check box */}
                                <div className="flex justify-start gap-3 items-center">
                                    <label htmlFor="checkbox">Collab Project </label>
                                    <input
                                        name='collab_project'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        type="checkbox"
                                        className='w-5 h-5 text-green-500'
                                        style={{ color: 'blue' }}
                                        checked={formik.values.collab_project}
                                    />
                                </div>
                                {/* collab check box */}


                                {/* git_link */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="text"
                                        label="git_link"
                                        name="git_link"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.git_link}
                                        className='form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                </div>
                                {/* git_link */}

                                {/* website_link */}
                                <div className="flex flex-col gap-1">
                                    <Input
                                        type="text"
                                        label="website_link"
                                        name="website_link"  // Added name attribute
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.website_link}
                                        className='form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                </div>
                                {/* website_link */}



                                {/* Description */}
                                <div className="flex flex-col gap-1" aria-label="Description Section">
                                    <Textarea
                                        label="Description"
                                        name="description"  // Added name attribute
                                        rows={2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.description}
                                        className={
                                            formik.errors.description && formik.touched.description
                                                ? 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-red-500'
                                                : 'form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                        }
                                    />
                                    {formik.errors.description && formik.touched.description && (
                                        <small className='text-red-500 text-xs- italic'> {formik.errors.description} </small>
                                    )}
                                </div>
                                {/* description */}

                                {/* Features */}
                                <div className="flex flex-col gap-1" aria-label="Features Section">
                                    <Textarea
                                        label="Features"
                                        name="features"
                                        rows={2}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.features}
                                        className='form-control shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                    />
                                </div>
                                {/* Features */}
                            </div>
                        </DialogBody>
                        <DialogFooter>
                            <Button
                                variant="text"
                                color="red"
                                onClick={handler}
                                className="mr-1"
                            >
                                <span>Cancel</span>
                            </Button>
                            <Button color="green" type='submit'>
                                <span>Confirm</span>
                            </Button>
                        </DialogFooter>
                    </form>
                )}
            </Dialog>
        </>
    )
}

export default ProjectEditModal

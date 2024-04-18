import {useLoaderData, useLocation, useParams} from "react-router-dom";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveJobApplication} from "../../utility/localstorage.js";


const JobDetails = () => {

    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    const handleApplyJob = () => {
        saveJobApplication(idInt)
        toast('You have applied successfully')
    }

    return (
        <div>

            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3 ">
                    <h2>Job Details of: {job.job_title}</h2>
                    <h2 className="text-4xl">Details: </h2>
                    <p>{job.job_description}</p>
                </div>
                <div className=" border">
                    <h2 className="text-4xl">Side things: </h2>
                    <p>{job.educational_requirements}</p>
                    <button onClick={handleApplyJob} className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";
import {getStoredJobApplication} from "../../utility/localstorage.js";
import job from "../Job/Job.jsx";


const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(jobs => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }


    useEffect(() => {
        const storedJobIds = getStoredJobApplication();
        if (jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for (const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if (job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

            //console.log(jobsApplied)
        }
    }, [jobs]);

    return (
        <div>
            <h2 className="text-2xl">Jobs I applied: {appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                    <li onClick={() => handleJobsFilter('all')}><a>All</a></li>
                    <li onClick={() => handleJobsFilter('remote')}><a>Remote</a></li>
                    <li onClick={() => handleJobsFilter('onsite')}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {
                    displayJobs.map(job => <li key={job.id}>
                        <p>Job: {job.job_title}</p>
                        <p>Company: <span> {job.company_name}</span></p>
                        <p>Type: {job.remote_or_onsite}</p>
                        <br/>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;
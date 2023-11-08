import React from 'react';

import "../styles/JobsPage.css"; 
import Navbar from '../components/Header';

function JobsPage() {
    return (
        <div className="job-main">
        {/* Navbar */}
        <Navbar />
        <p> job page</p>
        </div>
    );
}

export default JobsPage;
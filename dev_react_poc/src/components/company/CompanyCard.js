// --------------------- Imports ---------------------
import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

// --------------------- CompanyCard component ---------------------
class CompanyCard extends React.component {
    constructor(props) {
        console.log('CompanyCard constructed');
        super(props);
        this.state = {
            company: props.company
        }
    }
    
    componentDidMount() {
        console.log('CompanyCard mounted')
    }
    
    render() {
        return (
            <Link to={`/company/${this.state.company.company_id}`}>
                <div>
                    <span className='custom-company-card-title'>[{ this.state.company.company_id }]{ this.state.company.company_id }</span>
                </div>
            </Link>
        )
    }
}

export default CompanyCard;
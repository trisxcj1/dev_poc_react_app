// --------------------- Imports ---------------------
import React from 'react';
import axios from 'axios';

import CompanyCard from './CompanyCard';
import Config from '../../config/config.js';

// --------------------- CompanyList component ---------------------
class CompanyList extends React.component {
    constructor(props) {
        super(props);
        this.state = {
            company_list: []
        }
    }
    
    componentDidMount() {
        //query for companies
        console.log(`${Config().company}`);
        axios.get(`${Config().company}`).then(res => {
            console.log(res.data);
            this.setState({
                company_list: res.data
            });
        });
    }
    
    render() {
        return (
            <div className='container'>
                <div
                    style={{
                        marginTop: '60px',
                        marginBotton: '40px'
                    }}
                >
                    <h1>Companies Directory</h1>
                    <hr />
                    <div>
                        {
                            this.state.company_list.map(company => {
                                return <CompanyCard key={company.company_id} company={company} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default CompanyList;
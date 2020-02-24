import React, {Component} from 'react';
import FundationRestApiServices from "../services/FundationRestApiServices";
import OrganizationRestApiServices from "../services/OrganizationRestApiServices";
import LocalRestApiServices from "../services/LocalRestApiServices";

export class WhoWeHelpMain extends Component {
    state = {
        currentPage: 1,
        fundation: [],
        organization: [],
        local: [],
        err: ""
    };

    componentDidMount() {
        FundationRestApiServices.getFundation(
            fundation => this.setState({fundation: fundation}),
            err => this.setState({err: err})
        );
        OrganizationRestApiServices.getOrganization(
            organization => this.setState({organization: organization}),
            err => this.setState({err: err})
        );
        LocalRestApiServices.getLocal(
            local => this.setState({local: local}),
            err => this.setState({err: err})
        );
    }

    handleChangePage = (e) => {
        this.setState({
            currentPage: parseInt(e.target.value)
        })
    };

    render() {
        const {currentPage, fundation, organization, local} = this.state;
        let data = null;
        let dataPage = null;
        if (this.props.currentMain === 'Fundation') {
            data = fundation.map((data) => {
                if (currentPage === data.page) {
                    return (
                        <li key={data.id} className='who-we-help-li'>
                            <p className='who-we-help-title'>{data.name}</p>
                            <p className='who-we-help-mission'>{data.mission}</p>
                            <p className='who-we-help-stuff'>{data.stuff}</p>
                            <hr/>
                        </li>
                    )
                }
            });
            dataPage = <div className='who-we-help-pages'>
                <button value='1' onClick={this.handleChangePage}
                        className={currentPage === 1 ? 'btn-choose-page checked' : 'btn-choose-page'}>1
                </button>
                <button value='2' onClick={this.handleChangePage}
                        className={currentPage === 2 ? 'btn-choose-page checked' : 'btn-choose-page'}>2
                </button>
                <button value='3' onClick={this.handleChangePage}
                        className={currentPage === 3 ? 'btn-choose-page checked' : 'btn-choose-page'}>3
                </button>
            </div>
        }
        if (this.props.currentMain === 'Organization') {
            data = organization.map(data => {
                if (currentPage === data.page) {
                    return (
                        <li key={data.id} className='who-we-help-li'>
                            <p className='who-we-help-title'>{data.name}</p>
                            <p className='who-we-help-mission'>{data.mission}</p>
                            <p className='who-we-help-stuff'>{data.stuff}</p>
                            <hr/>
                        </li>
                    )
                }
            });
            dataPage = <div className='who-we-help-pages'>
                <button value='1' onClick={this.handleChangePage}
                        className={currentPage === 1 ? 'btn-choose-page checked' : 'btn-choose-page'}>1
                </button>
                <button value='2' onClick={this.handleChangePage}
                        className={currentPage === 2 ? 'btn-choose-page checked' : 'btn-choose-page'}>2
                </button>
            </div>
        }
        if (this.props.currentMain === 'Local') {
            data = local.map(data => {
                if (currentPage === data.page) {
                    return (
                        <li key={data.id} className='who-we-help-li'>
                            <p className='who-we-help-title'>{data.name}</p>
                            <p className='who-we-help-mission'>{data.mission}</p>
                            <p className='who-we-help-stuff'>{data.stuff}</p>
                            <hr/>
                        </li>
                    )
                }
            });
            dataPage = <div className='who-we-help-pages'>
                <button value='1' onClick={this.handleChangePage}
                        className={currentPage === 1 ? 'btn-choose-page checked' : 'btn-choose-page'}>1
                </button>
            </div>
        }

        return (
            <div className='who-we-help-content'>
                <h3>W naszej bazie znajdziesz listę zweryfikowanych {this.props.currentMain}, z <br/> którymi
                    współpracujemy.
                    Możesz sprawdzić czym się zajmują, <br/> komu pomagają i czego potrzebują.
                </h3>
                <ul className='who-we-help-list'>
                    {data}
                </ul>
                {dataPage}
            </div>
        )
    }
}
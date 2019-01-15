
import React from 'react';
import { NavLink } from 'react-router-dom';
import validator from 'validator';
import axios from 'axios';
import Modal from 'react-modal';
import Notifications, { notify } from 'react-notify-toast';
import _remove from 'lodash/remove';
import _includes from 'lodash/includes';
import _difference from 'lodash/difference';
import _isEqual from 'lodash/isEqual';

import '../../../public/assets/css/material-dashboard.css';
import AdminSidebar from '../../common/AdminSidebar.jsx';
import Footer from '../../common/Footer.jsx';
import Header from '../../common/Header.jsx';
import { API_BASE_URL } from '../../constant/constant.js';
import Pagination from "react-js-pagination";

class EnableUser extends React.Component {
    constructor(props) {
        super(props);
        let sessionData = JSON.parse(sessionStorage.getItem('userData'));
        this.state = {
            loading: false,
            userInfo: '',
            fromSession: sessionData,
            page: 1,
            cb1: false,
            selected: [],
            isChecked: false,
            perPage: 10,
            sele: '',
            enabledUserHistory: [],
            isOpenModal: false
        };

        if (sessionStorage.getItem('userData') == null) {
            props.history.push('/login');
        }
        this.receivePagechange = this.receivePagechange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onEnable = this.onEnable.bind(this);
    }

    receivePagechange(page) {
        this.setState({ page })

    }



    handleChange(event) {
        const sList = this.state.selected;
        if (_isEqual(sList, _difference(sList, [event.target.id]))) {
            sList.push(event.target.id);
            this.setState({ selected: sList });
        }
        else {
            this.setState({ selected: _difference(sList, [event.target.id]) });
        }
    }

    onEnable() {


        event.preventDefault();

        let set = this;
        set.setState({ loading: true });
        var apiBaseUrl = API_BASE_URL + "vlcoinuser/update/istokentransfer";

        let apiData = {
            "sessionId": this.state.fromSession.sessionId,
            "ids": this.state.selected
        }

        let props = this.props;

        axios.post(apiBaseUrl, apiData)
            .then(response => {
                console.log(response);
                if (response.status == 200) {

                    this.setState({selected: []})
                    let myColor = { background: 'green', text: "#FFFFFF" };
                    notify.show(response.data.message, "custom", 5000, myColor);
                    set.setState({ loading: false });
                    setTimeout(() => set.setState({ sucResponse: '' }), 5000);
                }
                else {
                    set.setState({ loading: false });
                    if (response.data.message === 'Session expired!') {
                        sessionStorage.removeItem('userData');
                        set.props.history.push('/login');
                        let myColor = { background: 'red', text: "#FFFFFF" };
                        notify.show(response.data.message, "custom", 5000, myColor);

                    }
                    set.setState({ errResponse: response.data.message });
                    setTimeout(() => set.setState({ errResponse: '' }), 5000);
                }
            })
            .catch(function (error) {
                console.log(error)
            });


        console.log('onEnable....', this.state.selected, apiData)
        console.log("data ", apiData);
    }

    componentDidMount() {
        //this.setState({ loading: true });
        if (sessionStorage.getItem('userData') != null) {
            const userSession = JSON.parse(sessionStorage.getItem('userData'));
            this.setState({ userInfo: userSession });

        }
        // this.setState({ loading: false });

        this.setState({ loading: true });
        let self = this;
        let set = this;

        let sessionInfo = JSON.parse(sessionStorage.getItem('userData'));

        const tokenUrl = API_BASE_URL + "vlcoinuser/get/allusers";

        let data = {
            "sessionId": sessionInfo.sessionId
        }
        let usersInfo = [];
        axios.post(tokenUrl, data)
            .then(response => {

                if (response.data.status == "success") {
                    set.setState({ loading: false });
                    let list = response.data.userRegisterDTO;
                    if (list.length > 0) {
                        list.map((enabledUsers, key) => {
                            usersInfo.push(enabledUsers);
                        })
                    }
                    this.setState({ enabledUserHistory: usersInfo });
                }
                else {
                    this.setState({ loading: false });
                    if (response.data.message == 'Session Expired') {
                        history.push('/login');
                    }
                    // notify.show(response.data.message, "error");
                    self.setState({ errorResponse: response.data.message });
                    setTimeout(() => self.setState({ errorResponse: '' }), 5000);
                }
            })
    }


    componentWillMount() {

    }

    render() {
        return (
            <div className="wrapper">
                <Notifications />
                {this.state.loading &&
                    <div className="loader-bgclr">
                        <div id="cssload-loader">
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                            <div className="cssload-dot"></div>
                        </div>
                    </div>
                }
                <AdminSidebar />
                <div className="main-panel">
                    <Header props={this.props} />
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">
                                {/* <Notifications /> */}

                                <div className="limiter">
                                    <div className="container-table100">
                                        <div className="wrap-table100">
                                            <div className="similar_card">
                                                <div className="enable_user" data-background-color="green">
                                                    <h4 className="title">Enable User</h4>
                                                </div>
                                                <div className="table100 bg_color">
                                                    <table className="table table-bordered">
                                                        <thead>
                                                            <th className="column1">Select</th>
                                                            <th className="column1">ID</th>
                                                            <th className="column1">User ID</th>
                                                            <th className="column1">User Name</th>
                                                            <th className="column1">Email ID</th>
                                                            <th className="column5">Coins</th>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.enabledUserHistory.map((enable, key) =>
                                                                    this.state.page * this.state.perPage > key
                                                                    && (this.state.page - 1) * this.state.perPage <= key
                                                                    &&
                                                                    <tr key={key}>

                                                                        <td className="column1">
                                                                            <input name="isGoing"
                                                                                type="checkbox"
                                                                                value={_includes(this.state.selected, enable.id.toString())}
                                                                                id={enable.id}
                                                                                checked={_includes(this.state.selected, enable.id.toString())}
                                                                                onChange={this.handleChange} />
                                                                        </td>

                                                                        <td className="column1">{enable.id}</td>
                                                                        <td className="column1">{enable.userId}</td>
                                                                        <td className="column1">{enable.userName}</td>
                                                                        <td className="column1">{enable.email}</td>
                                                                        <td className="column1">{enable.coin}</td>
                                                                    </tr>
                                                                )
                                                            }
                                                        </tbody>
                                                    </table>
                                                    <div>
                                                        <Pagination
                                                            activePage={this.state.page}
                                                            itemsCountPerPage={this.state.perPage}
                                                            totalItemsCount={this.state.enabledUserHistory.length}
                                                            pageRangeDisplayed={5}
                                                            onChange={this.receivePagechange} />

                                                    </div>
                                                </div>



                                                <div className="enable_butt">
                                                    <button type="button" onClick={this.onEnable} className="btn btn-success">Enable</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>

        )
    }
}

export default EnableUser;

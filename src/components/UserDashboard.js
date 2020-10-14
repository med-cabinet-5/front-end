//display user details/strains
//dependencies & hooks
import React, { useState, useEffect, useContext } from "react";
import Sidebar from './DashboardSideBar';

//styles
import { AppBody, DashboardContainer, DashboardBody } from "../styles"

//icons
import avatar from "../icons/avatar.png";
import edit from "../icons/edit.png";


function UserDashboard() {

    return (
        <AppBody>
            <DashboardContainer>
                <Sidebar />
                <DashboardBody>

                </DashboardBody>
            </DashboardContainer>
        </AppBody>
    )
}
export default UserDashboard;
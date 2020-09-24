//display user details/strains
//dependencies & hooks
import React, { useState, useEffect, useContext } from "react";

//router
import { NavLink } from "react-router-dom";

//components
import SavedStrains from "./SavedStrains";
import StrainSelector from "./StrainSelector";

//actions
import { fetchSavedStrains, deleteSavedStrains, updateUser } from "../actions";

//contexts
//savedstrains, user

//styles
import styled from "styled-components"
import { Drawer, Button, Form, Input } from "antd";

//icons
import avatar from "../icons/avatar.png";
import edit from "../icons/edit.png";


const DashboardContainer = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
color: white;
`

const UserResults = styled.div`
display: flex;
flex-direction: column;
background-color: #918383;
width: 50%;
`

const NavLogo = styled.span`
display: flex;
margin-bottom: 8%;
`



function UserDashboard() {

    const [visible, setVisible] = useState(false);
    const [editVisible, setEditVisible] = useState(false)

    const showDrawer = () => {
        setVisible(true)
    };
    
    const onClose = () => {
        setVisible(false)
    };

    const showEditDrawer = () => {
        setEditVisible(true)
    };

    const onEditDrawerClose = () => {
        setEditVisible(false);
        setVisible(false)
    };

    return (
    <DashboardContainer>
    {/* <NavContainer>
        <NavLink to="/" style={{color: "#1497AB", textDecoration: "underline", }}> Home </NavLink>
        <NavLink to="/search" style={{color: "#1497AB", textDecoration: "underline", }} > Explore </NavLink>
        <NavLink to="/logout" style={{color: "#1497AB", textDecoration: "underline", }} >Logout </NavLink>
    </NavContainer> */}

        <div>
        <NavLogo  onClick={showDrawer}>
        <img src={avatar} alt="avatar" />
        </NavLogo>

        <Drawer
            title="Hello (Name)"
            width={320}
            closable={true}
            onClose={onClose}
            visible={visible}
        >   
            <p>Edit User Details: (username)
                <span  onClick={showEditDrawer}>
                <img src={edit} alt="edit pencil" /> 
                </span>
            </p>
            <Drawer
                title="Edit User Details"
                width={520}
                closable={false}
                onClose={onEditDrawerClose}
                visible={editVisible}
                bodyStyle={{ paddingBottom: 80 }}
            > 

            <div>
            <Form layout="vertical" hideRequiredMark>
                <Form.Item label="First Name">
                <Input placeholder= "Please enter first name to update" />     
                </Form.Item>

                <Form.Item label="Last Name">
                <Input placeholder= "Please enter last name to update" />     
                </Form.Item>

                <Form.Item label="E-mail">
                <Input placeholder= "Please enter e-mail to update" />     
                </Form.Item>

                <Form.Item label="Password">
                <Input placeholder= "Please enter updated password" />     
                </Form.Item>
            </Form>
            </div>


            <div className="button-div"
                style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
                }}
            >
                <Button
                style={{
                    marginRight: 8,
                }}
                onClick={onEditDrawerClose}
                >
                Cancel
                </Button>
                <Button onClick={onClose} type="primary">
                {/* <Button onClick={submit put req}> */}
                Submit
                </Button>
            </div>
        </Drawer>
    
        </Drawer>
        </div>
    
  

    <UserResults>
        {/* map results context, display in strain selector as a list, post to saved strains endpoint */}
    <StrainSelector />
    </UserResults>
        {/* display get of saved strains */}
    <SavedStrains />
    </DashboardContainer>
    )
}
export default UserDashboard;
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";

const ButtonGroup = Button.Group;

const ProfileActions = () => {
  return (
    <ButtonGroup>
      <Button>
        <Link to="/edit-profile">
          <i className="fas fa-user-circle primary-color" /> Edit Profile
        </Link>
      </Button>
      <Button>
        <Link to="/add-experience">
          <i className="fab fa-black-tie primary-color" /> Add Experience
        </Link>
      </Button>
      <Button>
        <Link to="/add-education">
          <i className="fas fa-graduation-cap primary-color" /> Add Education
        </Link>
      </Button>
    </ButtonGroup>
  );
};

export default ProfileActions;

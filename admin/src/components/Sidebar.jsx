import React from "react";
import styled from "styled-components";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaCalendarAlt, FaPlus } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import { darkThemeColor } from "../utils";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650173777/blog-4_lpj6u7.jpg" />
        <Name>Administrator</Name>
        <Badge content="FIT Formula" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link to="/">
            <Navigation_Link>
              <RiHomeLine />
              <h3 style={{ textDecoration: "none" }}>Dashboard</h3>
            </Navigation_Link>
          </Link>

          <Link to="/trainers">
            <Navigation_Link>
              <RiFileCopyLine />
              <h3>Trainers</h3>
            </Navigation_Link>
          </Link>

          <Link to="/all">
            <Navigation_Link>
              <FaCalendarAlt />
              <h3>Schedules</h3>
            </Navigation_Link>
          </Link>

          <Link to="/add">
            <Navigation_Link>
              <FaPlus />
              <h3>Add Time</h3>
            </Navigation_Link>
          </Link>

          <Link to="/reports">
            <Navigation_Link>
              <AiOutlinePieChart />
              <h3>Reports</h3>
            </Navigation_Link>
          </Link>
        </Links>
        {/* <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer> */}
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
  text-decoration: none;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Navigation_Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;

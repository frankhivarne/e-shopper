/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
import React from "react";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/reducers/admin";

const Index = (props) => {
  const dispatch = useDispatch();
  const { toggleSidebar, showSidebar } = props;
  const [activeTab, setActiveTab] = React.useState("Dashboard");
  const active = sessionStorage.getItem("tab");

  React.useEffect(() => {
    setActiveTab(active);
  }, [active]);

  const handleTabClick = (value) => {
    sessionStorage.setItem("tab", value);
  };

  return (
    <Container showSidebar={showSidebar}>
      <div className="header_group">
        <h1>
          <b>SHOPPER</b>
        </h1>
      </div>
      <div className="menu_group">
        {sidebarTabs.slice(0, 4).map((tab) => {
          const { id, name, link } = tab;
          return (
            <Link key={id} href={link}>
              <SidebarTabs
                onClick={() => handleTabClick(name)}
                className={activeTab === name ? "active" : ""}
              >
                {name}
              </SidebarTabs>
            </Link>
          );
        })}
      </div>
      <div className="bottom_menu">
        {sidebarTabs.slice(-1).map((tab) => {
          const { id, name, icon } = tab;
          return (
            <LogoutTab key={id} onClick={() => dispatch(logout())}>
              <div className="icon">{icon}</div>
              <p>{name}</p>
            </LogoutTab>
          );
        })}
      </div>
      <div className="overlay" onClick={toggleSidebar} />
    </Container>
  );
};

export default Index;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background: var(--primary-color);
  display: flex;
  flex-direction: column;
  z-index: ${({ showSidebar }) => (showSidebar ? 9000 : 0)};

  .header_group {
    padding: 1rem 1rem 0 1rem;
  }

  @media screen and (max-width: 768px) {
    display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};

    .overlay {
      position: fixed;
      right: 0;
      top: 0;
      height: 100vh;
      width: calc(100vw - 250px);
      background: linear-gradient(
        99.11deg,
        rgba(49, 66, 79, 0.71) 0.83%,
        rgba(10, 11, 12, 0.64) 100%
      );
      z-index: 19;
      display: none;

      @media screen and (max-width: 1024px) {
        display: ${({ showSidebar }) => (showSidebar ? "block" : "none")};
      }
      @media screen and (min-width: 1024px) {
        display: none;
      }
    }
  }

  .menu_group {
    margin: 3rem 0;
    h4 {
      font-size: 1rem;
      margin: 0 0 0.5rem 2rem !important;
      color: var(--primary-color);
      font-weight: 300;
    }
  }

  .bottom_menu {
    position: absolute;
    bottom: 1rem;
  }

  img {
    width: 120px;
    height: 40px;
    object-fit: contain;
  }

  .active {
    background: #000000;
    opacity: 1;
    color: #fff;
    font-weight: 600;

    :hover {
      opacity: 0.7;
    }
  }

  .dropdown {
    margin-left: 0.8em;
    color: #fff;
    font-size: 0.9em;
  }

  .user {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    margin-bottom: 3rem;

    .icon {
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
`;

const SidebarTabs = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 120%;
  margin: 0.5rem 0;
  padding: 0.5rem 0 0.5rem 1rem;

  a {
    :hover {
      color: inherit;
    }
  }

  :hover {
    opacity: 0.7;
  }
`;

const LogoutTab = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0 1rem 2rem;
  cursor: pointer;
  margin-right: 1px;
  text-decoration: none;

  .icon {
    font-size: 18px;
    color: var(--light-text-color);
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 120%;
    letter-spacing: 0.0015em;
    color: var(--light-text-color);
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
  }
`;

const sidebarTabs = [
  {
    id: 1,
    name: "Dashboard",
    link: "/admin",
  },
  {
    id: 2,
    name: "Products",
    link: "/admin/products",
  },
  {
    id: 3,
    name: "Users",
    link: "/admin/users",
  },
  {
    id: 4,
    name: "Settings",
    link: "/admin/settings",
  },
  {
    id: 6,
    name: "Logout",
    icon: <FaSignOutAlt />,
    link: "/admin",
  },
];

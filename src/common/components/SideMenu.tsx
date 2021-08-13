import _ from "lodash";
import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from ".";
import routes, { RouteIE } from "../../route/routes";
import { CommonColor, getSelectTabMenuStyle } from "../styles";

/**
 * SideMenu
 * @description 네비게이션 바
 * @param {} props
 * @returns {React.ReactElement}
 */
const SideMenu: React.FC = (): React.ReactElement => {
  const { t } = useTranslation();

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{
        width: 200,
        backgroundColor: CommonColor.WHITE,
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        padding: "30px 15px 15px",
      }}
    >
      <Container.ColumnContainer>
        {!_.isEmpty(routes) &&
          routes.map((route: RouteIE, idx: number) => {
            if (!_.isEmpty(route.i18nKey)) {
              return (
                <Link key={`sidMenu_list_Key${idx}`} to={route.path}>
                  <Navbar.Brand
                    style={{
                      ...getSelectTabMenuStyle(
                        window.location.pathname,
                        route.path
                      ),
                    }}
                  >
                    <img
                      alt=""
                      src="/assets/images/logo.svg"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"
                    />{" "}
                    {t(route.i18nKey)}
                  </Navbar.Brand>
                </Link>
              );
            } else return null;
          })}
      </Container.ColumnContainer>
    </Navbar>
  );
};

export default SideMenu;

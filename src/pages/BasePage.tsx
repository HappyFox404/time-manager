import React from 'react'
import Column from '../ui/Column'
import Columns from '../ui/Columns'
import Menu from "../ui/Menu";
import {MainMenu} from "../modules/main";
import {Route, Routes} from "react-router-dom";
import AppRoutes from "../core/AppRoutes";
import AuthorizationPage from "./AuthorizationPage";
import RegistrationPage from "./RegistrationPage";

export interface IBasePage {
    element?: JSX.Element;
};

export default function BasePage({element} : IBasePage) : JSX.Element {
  return (
      <Column>
        <Columns>
          <Column classes={['is-narrow', 'application-menu']}>
            <MainMenu/>
          </Column>
          <Column>
              { element }
          </Column>
        </Columns>
      </Column>
  )
}
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
          <Column classes={['is-narrow', 'application-menu', 'pr-0']}>
            <MainMenu/>
          </Column>
          <Column classes={['pl-0']}>
              { element }
          </Column>
        </Columns>
      </Column>
  )
}
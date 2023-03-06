import React from 'react'
import Column from '../ui/Column'
import Columns from '../ui/Columns'
import Menu from "../ui/Menu";
import {MainMenu} from "../modules/main";

export default function BasePage() {
  return (
      <Column>
        <Columns>
          <Column classes={['is-narrow', 'application-menu']}>
            <MainMenu/>
          </Column>
          <Column>
            <div>
              Данные
            </div>
          </Column>
        </Columns>
      </Column>
  )
}
import React from 'react'
import Column from '../components/standart/Column'
import Columns from '../components/standart/Columns'
import AuthorizationRouter from '../components/AuthorizationRouter'

export default function Base() {
  return (
    <Column>
      <AuthorizationRouter/>
      <Columns>
        <Column classes={['is-narrow', 'application-menu']}>
          <div>
            Меню
          </div>
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
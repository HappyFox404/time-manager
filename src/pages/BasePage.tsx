import React from 'react'
import Column from '../ui/Column'
import Columns from '../ui/Columns'

export default function BasePage() {
  return (
      <Column>
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
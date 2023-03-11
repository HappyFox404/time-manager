import React from 'react'
import Column from "../../../ui/Column";
import Box from "../../../ui/Box";

export function DefaultComponent(): JSX.Element {
    const styles = {
        height: '99vh',
    };

    return (<Column classes={['m-0', 'p-1']} styles={styles}>
        <Box classes={['mb-3']}>
            <span className='is-flex is-justify-content-center'>Тайм менеджер</span>
        </Box>
        <Box classes={['mt-1']}>
            <p>
                Выберите действие для работы
            </p>
        </Box>
    </Column>)
}
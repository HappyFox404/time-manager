import React from 'react'
import Column from "../../../ui/Column";
import Box from "../../../ui/Box";

export function AddSchedule(): JSX.Element {
    const styles = {
        height: '99vh',
    };

    return (<Column classes={['m-0', 'p-1']} styles={styles}>
        <Box classes={['mb-3']}>
            <span className='is-flex is-justify-content-center'>Добавление нового расписания</span>
        </Box>
        <Box classes={['mt-1']}>
            <p>
                
            </p>
        </Box>
    </Column>)
}
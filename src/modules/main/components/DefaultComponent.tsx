import React from 'react'
import Column from "../../../ui/Column";
import Box from "../../../ui/Box";

export function DefaultComponent(): JSX.Element {
    const styles = {
        height: '99vh',
    };

    return (<div className='m-0 p-1 is-flex is-flex-direction-column is-justify-content-center' style={styles}>
        <span className='is-flex is-justify-content-center is-size-1'>Тайм менеджер</span>
    </div>)
}
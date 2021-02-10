import React from 'react'
import { MidHeaderSection,MidHeaderElement } from '../styled-components/StyledElements'
import Header from './Header'

const MidHeader = () => {
    return (
        <MidHeaderSection>
            <MidHeaderElement>
                <h2>
                Select a Scenario
                </h2>
            </MidHeaderElement>
        </MidHeaderSection>
    )
}

export default MidHeader

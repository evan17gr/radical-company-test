import React from 'react'
import { HomeButton, HomeButtonSection, NavBar, OpportunityIndicator } from '../styled-components/StyledElements'

const Header = () => {
    return (
        <header>
            <NavBar>
                <HomeButton className="fas fa-home"></HomeButton>
                <a>About</a>
                <a>Geting<br/> Started</a>
                <a>Running a <br/>project</a>
                <a>Design<br/> Principles</a>
                <a>Case<br/> studies</a>
                <a>Data<br/> Dashboard</a>
                <a>Contacts<br/> and FAQ'S</a>
                <OpportunityIndicator>Opportunity<br/> Indicator</OpportunityIndicator>
            </NavBar>
        </header>
    )
}

export default Header

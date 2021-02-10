import React from 'react'
import { Article, ArticleHeader, Section} from '../styled-components/StyledElements'

const Section1 = () => {
    return (
        <Section>
            <Article>
                <ArticleHeader>
                    <h1>Opportunity Indicator</h1>
                </ArticleHeader>
                <p>Welcome to the Opportunity Indicator – our handy tool to help you estimate the amount of space you need, typical project costs and the benefits your
                project could deliver. To use the Opportunity Indicator, simply input the information for your project below. You can then select the scenario which best
                fits your project by clicking on the appropriate box below, or create your own custom scenario using the slider bars.
                </p>
            </Article>
        </Section>
    )
}

export default Section1

'use client'

import React from 'react'
import * as styles from './style'
import { WORK_CASE_STUDIES } from '../../constant'

export default () => (
    <styles.Body_Content>
        <styles.Work_Container>
            <styles.Kicker>Selected Work</styles.Kicker>
            <h1>Frontend architecture for enterprise products</h1>
            <p>These examples summarize the kind of work I lead: modernizing complex applications, building reusable UI foundations, improving testing reliability, and helping product teams deliver with stronger frontend architecture.</p>
            <styles.CaseStudyGrid>
                {WORK_CASE_STUDIES.map((item) => (
                    <styles.CaseStudyCard key={item.title}>
                        <styles.Domain>{item.domain}</styles.Domain>
                        <h2>{item.title}</h2>
                        <p>{item.summary}</p>
                        <ul>
                            {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                        </ul>
                        <styles.Stack>{item.stack}</styles.Stack>
                    </styles.CaseStudyCard>
                ))}
            </styles.CaseStudyGrid>
        </styles.Work_Container>
    </styles.Body_Content>
)

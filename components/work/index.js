'use client'

import React from 'react'
import * as styles from './style'
import { WORK_CASE_STUDIES } from '../../constant'

export default () => (
    <styles.Body_Content>
        <styles.Work_Container>
            <styles.Kicker>Selected Work</styles.Kicker>
            <h1>Frontend architecture for enterprise products</h1>
            <p>Selected examples of how I approach complex frontend work: clarify the product problem, define maintainable architecture, build reusable UI foundations, improve test confidence, and help teams ship with less delivery risk.</p>
            <styles.CaseStudyGrid>
                {WORK_CASE_STUDIES.map((item) => (
                    <styles.CaseStudyCard key={item.title}>
                        <styles.CardHeader>
                            <styles.Domain>{item.domain}</styles.Domain>
                            <h2>{item.title}</h2>
                        </styles.CardHeader>
                        <styles.CaseSection>
                            <h3>Context</h3>
                            <p>{item.context}</p>
                        </styles.CaseSection>
                        <styles.CaseSection>
                            <h3>Role</h3>
                            <p>{item.role}</p>
                        </styles.CaseSection>
                        <styles.CaseSection>
                            <h3>Approach</h3>
                            <ul>
                                {item.approach.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                        </styles.CaseSection>
                        <styles.Impact>
                            <h3>Impact</h3>
                            <p>{item.impact}</p>
                        </styles.Impact>
                        <styles.StackList aria-label={`${item.title} technology stack`}>
                            {item.stack.map((technology) => <li key={technology}>{technology}</li>)}
                        </styles.StackList>
                        {item.slug ? (
                            <styles.DetailLink href={`/work/${item.slug}`}>
                                Read case study
                            </styles.DetailLink>
                        ) : null}
                    </styles.CaseStudyCard>
                ))}
            </styles.CaseStudyGrid>
        </styles.Work_Container>
    </styles.Body_Content>
)

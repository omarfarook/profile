'use client'

import React from 'react'
import Link from 'next/link'
import * as styles from './style'

export default function CaseStudy({ caseStudy }) {
    return (
        <styles.Page>
            <styles.Container>
                <styles.BackLink href="/work">Back to Work</styles.BackLink>
                <styles.Header>
                    <styles.Kicker>{caseStudy.eyebrow}</styles.Kicker>
                    <h1>{caseStudy.title}</h1>
                    <p>{caseStudy.summary}</p>
                </styles.Header>

                <styles.Overview>
                    <section>
                        <h2>Context</h2>
                        <p>{caseStudy.context}</p>
                    </section>
                    <section>
                        <h2>Role</h2>
                        <p>{caseStudy.role}</p>
                    </section>
                </styles.Overview>

                <styles.SectionGrid>
                    {caseStudy.sections.map((section) => (
                        <styles.DetailSection key={section.title}>
                            <h2>{section.title}</h2>
                            <ul>
                                {section.points.map((point) => <li key={point}>{point}</li>)}
                            </ul>
                        </styles.DetailSection>
                    ))}
                </styles.SectionGrid>

                <styles.StackList aria-label={`${caseStudy.title} technology stack`}>
                    {caseStudy.stack.map((technology) => <li key={technology}>{technology}</li>)}
                </styles.StackList>

                <styles.FooterCta>
                    <p>Interested in the broader work profile?</p>
                    <Link href="/contactme">Contact me</Link>
                </styles.FooterCta>
            </styles.Container>
        </styles.Page>
    )
}

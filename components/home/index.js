'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import * as styles from './style'
import { NAME, HEADLINE, SUMMARY, PROOF_POINTS, AboutMe, DOWNLOAD_CV } from '../../constant'
import { trackNavigationClick, trackResumeDownload } from '../../lib/gtm'

const Home = ({ latestPost }) => {
    const router = useRouter()

    const navigateToAbout = () => {
        trackNavigationClick({
            section: 'home',
            item: AboutMe,
            path: '/aboutme'
        })
        router.push('/aboutme')
    }

    const navigateToWork = () => {
        trackNavigationClick({
            section: 'home',
            item: 'View Work',
            path: '/work'
        })
        router.push('/work')
    }

    const downloadCv = () => {
        trackResumeDownload({
            section: 'home'
        })
        window.open("/resume.pdf", "_blank")
    }

    return (
        <styles.Body_Content>
            <styles.Home_Container>
                <styles.Kicker>Singapore PR · Frontend Architecture · Enterprise Applications</styles.Kicker>
                <h1>{NAME}</h1>
                <h2>{HEADLINE}</h2>
                <p>{SUMMARY}</p>
                <styles.ProofList>
                    {PROOF_POINTS.map((item) => <li key={item}>{item}</li>)}
                </styles.ProofList>
                <styles.Btn_Group>
                    <styles.AboutButton className="primary" onClick={navigateToWork}>
                        View Work
                    </styles.AboutButton>
                    <styles.AboutButton onClick={navigateToAbout}>
                        {AboutMe}
                    </styles.AboutButton>
                    <styles.AboutButton className="text" onClick={downloadCv}>
                        {DOWNLOAD_CV}
                    </styles.AboutButton>
                </styles.Btn_Group>
                {latestPost ? (
                    <styles.LatestWriting aria-labelledby="latest-writing-title">
                        <h2 id="latest-writing-title">Latest Writing</h2>
                        <h3><Link href={`/blog/${latestPost.slug}`}>{latestPost.title}</Link></h3>
                        <p>{latestPost.description}</p>
                        <Link href="/blog">View Blog →</Link>
                    </styles.LatestWriting>
                ) : null}
            </styles.Home_Container>
        </styles.Body_Content>
    )
}

export default Home

'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './style'
import { NAME, HEADLINE, SUMMARY, PROOF_POINTS, AboutMe, DOWNLOAD_CV } from '../../constant'
import { trackNavigationClick, trackResumeDownload } from '../../lib/gtm'

export default () => {
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
        window.open("/Resume-mvm.pdf", "_blank")
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
            </styles.Home_Container>
        </styles.Body_Content>
    )
}

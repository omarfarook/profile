'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import * as styles from './style'
import { NAME, SUMMARY, AboutMe, DOWNLOAD_CV } from '../../constant'
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

    const downloadCv = () => {
        trackResumeDownload({
            section: 'home'
        })
        window.open("/Resume-mvm.pdf", "_blank")
    }

    return (
        <styles.Body_Content>
            <styles.Home_Container>
                <h1>Hi, I'm {NAME}.</h1>
                <p>{SUMMARY}</p>
                <styles.Btn_Group>
                    <styles.AboutButton onClick={navigateToAbout}>
                        {AboutMe}
                    </styles.AboutButton>
                    <styles.AboutButton onClick={downloadCv}>
                        {DOWNLOAD_CV}
                    </styles.AboutButton>
                </styles.Btn_Group>
            </styles.Home_Container>
        </styles.Body_Content>
    )
}

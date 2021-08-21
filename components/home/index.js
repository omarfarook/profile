import React from 'react';
import Router from 'next-routes';
import * as styles from './style'
import { NAME, SUMMARY, AboutMe, DOWNLOAD_CV } from '../../constant'

export default () => {
    const router = Router()

    return (
        <styles.Body_Content>
            <styles.Home_Container>
                <h1>Hi, I'm {NAME}.</h1>
                <p>{SUMMARY}</p>
                <styles.Btn_Group>
                    <styles.AboutButton onClick={() => router.Router.push('/aboutme')}>
                        {AboutMe}
                    </styles.AboutButton>
                    <styles.AboutButton onClick={() => window.open("../../static/Resume-mvm.pdf", "_blank")}>
                        {DOWNLOAD_CV}
                    </styles.AboutButton>
                </styles.Btn_Group>
            </styles.Home_Container>
        </styles.Body_Content>
    )
}
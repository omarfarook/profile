export const GTM_EVENTS = Object.freeze({
    NAVIGATION_CLICK: 'profile_navigation_click',
    RESUME_DOWNLOAD: 'profile_resume_download',
    CONTACT_LINK_CLICK: 'profile_contact_link_click',
    EXTERNAL_LINK_CLICK: 'profile_external_link_click',
    MOBILE_NAV_TOGGLE: 'profile_mobile_nav_toggle'
})

export const publishGtmEvent = (event, payload = {}) => {
    if (typeof window === 'undefined') {
        return
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
        event,
        ...payload
    })
}

export const trackNavigationClick = ({ section, item, path }) => {
    publishGtmEvent(GTM_EVENTS.NAVIGATION_CLICK, {
        section,
        item,
        path
    })
}

export const trackResumeDownload = ({ section, fileName = 'resume.pdf' }) => {
    publishGtmEvent(GTM_EVENTS.RESUME_DOWNLOAD, {
        section,
        file_name: fileName
    })
}

export const trackContactLinkClick = ({ section, method, url }) => {
    publishGtmEvent(GTM_EVENTS.CONTACT_LINK_CLICK, {
        section,
        method,
        url
    })
}

export const trackExternalLinkClick = ({ section, platform, url }) => {
    publishGtmEvent(GTM_EVENTS.EXTERNAL_LINK_CLICK, {
        section,
        platform,
        url
    })
}

export const trackMobileNavOpen = () => {
    publishGtmEvent(GTM_EVENTS.MOBILE_NAV_TOGGLE, {
        section: 'mobile_nav',
        state: 'open'
    })
}

export const trackMobileNavClose = ({ reason }) => {
    publishGtmEvent(GTM_EVENTS.MOBILE_NAV_TOGGLE, {
        section: 'mobile_nav',
        state: 'closed',
        reason
    })
}

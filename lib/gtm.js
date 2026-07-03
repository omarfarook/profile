export const GTM_EVENTS = Object.freeze({
    NAVIGATION_CLICK: 'profile_navigation_click',
    RESUME_DOWNLOAD: 'profile_resume_download',
    CONTACT_LINK_CLICK: 'profile_contact_link_click',
    EXTERNAL_LINK_CLICK: 'profile_external_link_click',
    CONTACT_FORM_SUBMIT: 'profile_contact_form_submit',
    CONTACT_FORM_SUCCESS: 'profile_contact_form_success',
    CONTACT_FORM_FAILURE: 'profile_contact_form_failure',
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

export const trackResumeDownload = ({ section, fileName = 'Resume-mvm.pdf' }) => {
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

export const trackContactFormSubmit = ({ method = 'emailjs' } = {}) => {
    publishGtmEvent(GTM_EVENTS.CONTACT_FORM_SUBMIT, {
        method
    })
}

export const trackContactFormSuccess = ({ method = 'emailjs' } = {}) => {
    publishGtmEvent(GTM_EVENTS.CONTACT_FORM_SUCCESS, {
        method
    })
}

export const trackContactFormFailure = ({ method = 'emailjs', errorType }) => {
    publishGtmEvent(GTM_EVENTS.CONTACT_FORM_FAILURE, {
        method,
        error_type: errorType
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

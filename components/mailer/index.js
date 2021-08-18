import React, { Component } from 'react'
import emailjs from 'emailjs-com';
import * as style from './style'
import { 
    SEND_MAIL,
    SENDING,
    SENT_TEXT,
    RESET_INTERVAL,
    MAIL_TYPE,
    TEMPLATE_TYPE,
    USER_ID,
    SENT_FAILURE
 } from '../../constant'

class Mailer extends Component {

    constructor() {
        super()
        this.state = {
            emailid: '',
            subject: '',
            message: '',
            buttonText: SEND_MAIL,
            disable: false
        }
    }

    updateState = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
          });
    }
    
     sendMail = (e) => {
        e.preventDefault();

        const {emailid, subject, message} = this.state;

        if(!!emailid && !!subject && !! message) {
            this.setState({
                disable: true,
                buttonText: SENDING
            })

            var templateParams = {
                from: emailid,
                subject: subject,
                body: message
              };

            emailjs.send(MAIL_TYPE, TEMPLATE_TYPE, templateParams, USER_ID)
                .then((res) => {
              if(res.text === 'OK') {
                this.setState({
                    disable: false,
                    buttonText: SENT_TEXT    
                })
              } else {
                this.setState({
                    disable: false,
                    buttonText: SENT_FAILURE
                })
              }
              this.resetField()
          }, (error) => {
            this.setState({
                disable: false,
                buttonText: SENT_FAILURE
            })
            this.resetField()
          });
        }
      }

      resetField = () => {
        setTimeout(() => {
            this.setState({
                emailid: '',
                subject: '',
                message: '',
                buttonText: SEND_MAIL,
                disable: false
            })
          }, RESET_INTERVAL);
      }

    render() {

        const {emailid, subject, message, buttonText, disable} = this.state;

        return(
            <style.Form onSubmit={this.sendMail}>
                <h1>Get In Touch</h1>
                <style.InputField>
                    <style.Label htmlFor="emailid">Email ID <span>*</span></style.Label>
                    <style.Input
                        type="email"
                        id="eailid"
                        name="emailid"
                        value={emailid}
                        onChange={this.updateState}
                        required
                    />
                </style.InputField>
                <style.InputField>
                    <style.Label htmlFor="Subject">Subject <span>*</span></style.Label>
                    <style.Input
                        type="text"
                        id="subject"
                        name="subject"
                        value={subject}
                        onChange={this.updateState}
                        required
                    />
                </style.InputField>
                <style.InputField>
                    <style.Label htmlFor="message">Message <span>*</span></style.Label>
                    <textarea
                        name="message"
                        rows="5"
                        id="message"
                        name="message"
                        value={message}
                        onChange={this.updateState}
                    />
                </style.InputField>
                <style.SendButton>
                    <input
                        type="submit"
                        value={buttonText}
                        disabled={disable}
                    />
                </style.SendButton>
        </style.Form>
        )
    }
}

export default Mailer
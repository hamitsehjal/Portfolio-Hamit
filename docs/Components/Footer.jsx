import React from 'react'
import { Footer } from 'flowbite-react'
import { BsLinkedin, BsGithub, BsTwitter, BsMedium } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg';

import image from '../images/logo.png'
function FooterNew(props) {
    const {
        email,
        gitHub,
        linkedIn,
        medium,
        name,
        twitter
    } = props;
    return (
        <div className="container mx-auto mt-10 text-center" id="contact">

            <Footer className='flex flex-wrap p-4'>

                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright
                        by={name}
                        href='#'
                        year={2023}
                    />
                    <Footer.Brand
                        alt='my-logo'
                        href='#'
                        name='Hamit Sehjal'
                        src={image}
                    />
                    <div className='mt-4 flex space-x-6 sm:mt-0 sm:justify-center'>

                        <Footer.Icon
                            href={`mailto:${email}`}
                            icon={CgMail}
                        />
                        <Footer.Icon
                            href={`https://twitter.com/${twitter}`} target='_blank' rel='noopener noreferrer'
                            icon={BsTwitter}
                        />
                        <Footer.Icon
                            href={`https://www.linkedin.com/in/${linkedIn}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            icon={BsLinkedin}
                        />
                        <Footer.Icon
                            href={`https://github.com/${gitHub}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            icon={BsGithub}
                            className='text-lg'
                        />
                        <Footer.Icon
                            href={`https://medium.com/@${medium}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            icon={BsMedium}
                        />

                    </div>
                </div>

            </Footer>
        </div>
    )
}

export default FooterNew
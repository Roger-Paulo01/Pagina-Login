import { useState } from "react"
import { Input } from "./Input"
import { Link } from "@tanstack/react-router";
import { SocialMediaLink } from "./Header/SocialMediaLink";
import { SiGithub, } from "react-icons/si";
import { SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";

import { FaLinkedin } from "react-icons/fa";
import { Preview } from "./Preview";
import { MainContent } from "./MainContent";





export const EditPage = () => {
    

    return (
        <div>
            <div className="container mx-auto flex">
                <MainContent
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                    links={links}
                    setName={setName}
                    setGithub={setGithub}
                    setLinkedin={setLinkedin}
                    setInstagram={setInstagram}
                    setTiktok={setTiktok}
                    setFacebook={setFacebook}
                    handleLinkChanged={handleLinkChanged}
                    hanleAddLink={hanleAddLink}
                    />

                <Preview
                    name={name}
                    github={github}
                    linkedin={linkedin}
                    instagram={instagram}
                    tiktok={tiktok}
                    facebook={facebook}
                    links={links}
                    />
            </div>
        </div>
    )
}
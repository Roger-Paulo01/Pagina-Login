import React, { createContext, useContext } from "react";
import { MainContent } from "../components/MainContent";
import type { Profiler } from "inspector/promises";
import type { Link } from "../components/interfaces/Links";

interface ProfileContextType {
    name: string;
    github: string;
    linkedin: string;
    instagram: string;
    tiktok: string;
    facebook: string;
    links: Link[];
    setName: (name: string) => void;
    setGithub: (name: string) => void;
    setLinkedin: (name: string) => void;
    setInstagram: (name: string) => void;
    setTiktok: (name: string) => void;
    setFacebook: (name: string) => void;
    handleAddLinnk: () => void;
    handleLinnkChanged: (index: number, field: string, value: string) => void;
}

interface ProfileProviderPropd{
    children: React.ReactNode;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider = ({children}: ProfileProviderProps) => {
    const[name, setName] = useState("Zezinho Barros");
    const [links, setLinks] = useState<Link[]>([]);

    const[instagram, setInstagram] = useState("");
    const[linkedin, setLinkedin] = useState("");
    const[tiktok, setTiktok] = useState("");
    const[facebook, setFacebook] = useState("");
    const[github, setGithub] = useState("");

    const hanleAddLink = () => {
        setLinks([...links, {name: "", url:""}]);
    }

    const handleLinkChanged = (index: number, field: string, value: string) => {
        const updateLinks = [...links];

        updateLinks[index] = {
            ...updateLinks[index],
            [field]: value,
        }

        setLinks(updateLinks);
    }

    return (
        <ProfileContext.Provider value={{
            name,
            github,
            linkedin,
            instagram,
            tiktok,
            facebook,
            links,
            setName,
            setGithub,
            setLinkedin,
            setInstagram,
            setTiktok,
            setFacebook,
            handleAddLink,
            handleLinkChange,
        }}>
            {children}
        </ProfileContext.Provider>
    );

};

export const useProfile = () => {
    return useContext(ProfileContext)
}
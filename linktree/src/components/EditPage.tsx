import { useState } from "react"
import { Input } from "./Input"
import { Link } from "@tanstack/react-router";
import { SocialMediaLink } from "./Header/SocialMediaLink";
import { SiGithub } from "react-icons/si";

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {
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
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 p-4">
                    <form className="space-y-4"
                    onSubmit={(event) => {
                        event.preventDefault();
                    }}
                    >
                        <Input 
                        name="Nome" 
                        id="name" 
                        placeholder="Ex: João" 
                        value={name}
                        onChange={(event) => {setName(event.target.value);}}/>
                        <Input name="GitHub" id="github" placeholder="Ex: jovtrc" value={github}
                        onChange={(event) => {setGithub(event.target.value);}}/>

                        <div className="grid grid-cols-4 gap-4">
                            <Input name="Nome" id="name" placeholder="Ex: João"  />

                            <Input name="Linkedin" id="Linkedin" placeholder="Ex: jovtrc" value={linkedin}
                        onChange={(event) => {setLinkedin(event.target.value);}} />

                            <Input name="instagram" id="instagram" placeholder="Ex: jovtrc" value={instagram}
                        onChange={(event) => {setInstagram(event.target.value);}} />

                            <Input name="Tiktok" id="Tiktok" placeholder="Ex: jovtrc" value={tiktok}
                        onChange={(event) => {setTiktok(event.target.value);}}/>
                            
                            <Input name="Facebook" id="Facebook" placeholder="Ex: jovtrc" value={facebook}
                        onChange={(event) => {setFacebook(event.target.value);}} />
                        </div>

                        <div className="space-y-4">
                            {links.map((link, index) => {
                                    return(
                                        <div className="flex gap-4">
                                            <Input
                                            name= { "Nome dolink" + (index + 1)}
                                            id= {"link-" + name}
                                            value= {"link.url"}
                                            placeholder="Ex: Portfólio"
                                            onChange={(event) => {
                                                handleLinkChanged(index, "name", event.target.value);
                                            }}
                                            />

                                            <Input
                                            name= {"URL do Link"}
                                            id= {"link url" + index}
                                            value= {link.name}
                                            placeholder="Ex: htpp:meusite.com"
                                            onChange={(event) => {
                                                handleLinkChanged(index, "url", event.target.value);
                                            }}
                                            />
                                        </div>  
                                    );
                                })}

                                <button className="bg-white rounded cursor-pointer uppercase px-4 py-2 hover:opacity-90 transition-opacity" onClick={hanleAddLink}> Adicionar Link</button>
                        </div>

                    </form>
                </main>

                <aside className="w-4/12 p-4 ">
                    <div className="rounded border-8 p-4 max-w-lg mx-auto">
                        <div className="flex flex-col gap-2 items-center">
                            <span className="block w-16 h-16 rounded-full bg-blue-200"></span>
                            <h1 className="font-bold ">{name}</h1>
                        </div>

                        <ul className="flex gap-2 justfy-center">
                            {github !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://github.com/" + github}> <SiGithub/></SocialMediaLink>
                                </li>
                            )}

                            {linkedin !== "" && (
                                <li>
                                    <SocialMediaLink link={"https://br.linkedin.com/in" + linkedin}> L</SocialMediaLink>
                                </li>
                            )}

                            

                        </ul>

                    </div>
                </aside>

            </div>
        </div>
    )
}
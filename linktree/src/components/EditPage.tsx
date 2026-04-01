import { useState } from "react"
import { Input } from "./Input"

interface Link {
    name: string,
    url: string
}

export const EditPage = () => {
    const[name, setName] = useState("Zezinho Barros");
    const [links, setLinks] = useState<Link[]>([]);

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
                <main className="w-8/12 bg-red-800 p-4">
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
                        <Input name="GitHub" id="github" placeholder="Ex: jovtrc" />

                        <div className="grid grid-cols-4 gap-4">
                            <Input name="Nome" id="name" placeholder="Ex: João" />

                            <Input name="Linkedin" id="github" placeholder="Ex: jovtrc" />

                            <Input name="Instagram" id="github" placeholder="Ex: jovtrc" />

                            <Input name="TikTok" id="github" placeholder="Ex: jovtrc" />
                            
                            <Input name="Facebook" id="github" placeholder="Ex: jovtrc" />
                        </div>

                        <div className="space-y-4">
                            {links.map((link, index) => {
                                    return(
                                        <div className="flex gap-4">
                                            <Input
                                            name= { "Nome dolink" + index + 1}
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

                <aside className="w-4/12 bg-red-300">
                    seu nome: {name}
                </aside>

                <aside className="w-4/12 bg-red-300 h-96"></aside>
            </div>
        </div>
    )
}
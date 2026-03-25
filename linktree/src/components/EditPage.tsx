import { useState } from "react"
import { Input } from "./Input"

export const EditPage = () => {
    const[name, setName] = useState("Zezinho Barros");


    return (
        <div>
            <div className="container mx-auto flex">
                <main className="w-8/12 bg-red-800 p-4">
                    <form className="space-y-4">
                        <Input name="Nome" id="name" placeholder="Ex: João" 
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
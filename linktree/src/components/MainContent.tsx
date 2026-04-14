import { Input } from "./Input";

interface MainContentProps {
  name: string;
  github: string;
  linkedin: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  links: { name: string; url: string }[];
  setName: (value: string) => void;
  setGithub: (value: string) => void;
  setLinkedin: (value: string) => void;
  setInstagram: (value: string) => void;
  setTiktok: (value: string) => void;
  setFacebook: (value: string) => void;
  handleLinkChanged: (index: number, field: string, value: string) => void;
  hanleAddLink: () => void;
}

export function MainContent({
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
  handleLinkChanged,
  hanleAddLink,
}: MainContentProps) {
  return (
    <>
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
                                                  value= {link.name}
                                                  placeholder="Ex: Portfólio"
                                                  onChange={(event) => {
                                                      handleLinkChanged(index, "name", event.target.value);
                                                  }}
                                                  />
      
                                                  <Input
                                                  name= {"URL do Link"}
                                                  id= {"link url" + index}
                                                  value= {link.url}
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
    </>
  );
}
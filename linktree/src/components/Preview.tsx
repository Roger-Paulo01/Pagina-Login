import { SocialMediaLink } from "./Header/SocialMediaLink";
import { SiGithub, SiInstagram, SiTiktok, SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

interface PreviewProps {
  name: string;
  github: string;
  linkedin: string;
  instagram: string;
  tiktok: string;
  facebook: string;
  links: { name: string; url: string }[];
}

export function Preview({
  name,
  github,
  linkedin,
  instagram,
  tiktok,
  facebook,
  links,
}: PreviewProps) {
  return (
    <>
    <aside className="w-4/12 p-4 ">
                        <div className="rounded border-8 p-4 max-w-lg mx-auto">
                            <div className="flex flex-col gap-2 items-center">
                                <span className="block w-16 h-16 rounded-full bg-blue-200"></span>
                                <h1 className="font-bold ">{name}</h1>
                            </div>
                            <ul className="flex gap-2 justify-center">
                                {github !== "" && (
                                    <li>
                                        <SocialMediaLink link={"https://github.com/" + github}> <SiGithub/></SocialMediaLink>
                                    </li>
                                )}
    
                                {linkedin !== "" && (
                                    <li>
                                        <SocialMediaLink link={"https://br.linkedin.com/in" + linkedin}><FaLinkedin /></SocialMediaLink>
                                    </li>
                                )}
    
                                {instagram !== "" && (
                                    <li>
                                        <SocialMediaLink link={"https://instagram.com/" + instagram}><SiInstagram />
                                        </SocialMediaLink>
                                    </li>
                                )}
    
                                {tiktok !== "" && (
                                    <li>
                                        <SocialMediaLink link={"https://www.tiktok.com/@" + tiktok}><SiTiktok />
                                        </SocialMediaLink>
                                    </li>
                                )}
    
                                {facebook !== "" && (
                                    <li>
                                        <SocialMediaLink link={"https://facebook.com/" + facebook}><SiFacebook />
                                        </SocialMediaLink>
                                    </li>
                                )}
                            </ul>
    
                            <div className="mt-4 flex flex-col gap-2">
                                {links.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        className="bg-gray-200 rounded px-3 py-2 text-center hover:bg-gray-300 transition">
                                        {link.name || "Novo Link"}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </aside>
    </>
  );
}
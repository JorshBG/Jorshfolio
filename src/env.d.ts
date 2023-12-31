/// <reference types="astro/client" />

interface LinkIcon{
    iconName: string;
    link:string;
    text?:string;
    iconPack?:string;
    color?:string;
}

interface TechIcon {
    iconName:string,
    name?:string,
    color?:string,
    hover?:string,
}

interface Project {
    name: string;
    description:string;
    technologies:Array<{name:string, tooltip:string}>;
    image:{src:string;alt:string}
}

interface ContentTabs {
    name:string;
    id:string;
}

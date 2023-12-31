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

interface Tech {
    name:string;
    tooltip:string
}

interface Project {
    name: string;
    description:string;
    technologies:Array<Tech>;
    image:{src:string;alt:string}
}

interface ContentTabs {
    name:string;
    id:string;
}

interface ProExperience {
    enterprise_name:string;
    job_title:string;
    date_start:string;
    date_end:string;
    job_description:string;
    technologies:Array<Tech>;
    goals:Array<string>;
}
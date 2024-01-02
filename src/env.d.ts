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
    link?:string;
}

interface Tabs {
    name:string;
    id:string;
    target:string;
    default?:boolean;
}

interface ProExperience {
    enterprise_name:string;
    job_title:string;
    year:string;
    time?:string;
    job_description:string;
    technologies?:Array<Tech>;
    goals?:Array<string>;
}

interface SchoolExperience {
    date:string;
    title_received:string;
    school:{
        name:string;
        acronym:string;
        web_site?:string;
        facebook?:string;
    }
}

interface Certification {
    title:string;
    from:string;
    badge?:{link?:string, image?:{src:string, alt:string}}
}
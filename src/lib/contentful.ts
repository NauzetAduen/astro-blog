import contentful, { type EntryFieldTypes } from "contentful";

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});


export async function getBlogPosts(){
  return  await contentfulClient.getEntries<BlogPost>({
    content_type: "blogpost",
  });
}
export async function getProjects(){
  return  await contentfulClient.getEntries<Project>({
    content_type: "project",
  });
}


export interface BlogPost {
  contentTypeId: "blogpost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    image: EntryFieldTypes.AssetLink;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    featured: EntryFieldTypes.Boolean;
  };
}
export interface Project {
  contentTypeId: "project";
  fields:{
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    date: EntryFieldTypes.Date;
    description: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    icon: EntryFieldTypes.Text;
  }
}
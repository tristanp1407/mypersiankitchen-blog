export default {
  name: "galleries",
  title: "Image Galleries",
  type: "document",
  fields: [
    {
      title: "First image gallery",
      name: "imageGallery1",
      type: "array",
      of: [{ title: "Image", name: "image", type: "image" }],
      validation: (Rule) => Rule.required().min(6).max(6),
    },
    {
      title: "Second image gallery",
      name: "imageGallery2",
      type: "array",
      of: [{ title: "Image", name: "image", type: "image" }],
      validation: (Rule) => Rule.required().min(6).max(6),
    },
    {
      title: "Third image gallery",
      name: "imageGallery3",
      type: "array",
      of: [{ title: "Image", name: "image", type: "image" }],
      validation: (Rule) => Rule.required().min(6).max(6),
    },
  ],
};

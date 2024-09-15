import pages from "@/static/data/pages";

const getPageData = (title) => {
  if (!title || title === "") return pages[0];
  let data = null;

  pages.forEach((page, i) => {
    if (page.path.substring(1) === title) {
      data = page;
    }
  });

  return data;
};

export default getPageData;

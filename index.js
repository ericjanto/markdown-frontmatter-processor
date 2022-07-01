import matter from "gray-matter";

function processFrontmatter(md, options) {
  const frontmatter = matter(md).data;
  Object.entries(options).forEach(function ([fieldName, value]) {
    if (value === "del" || value === "-") {
      delete frontmatter[fieldName];
    } else {
      frontmatter[fieldName] = value;
    }
  });

  return matter.stringify(matter(md));
}

export default processFrontmatter;

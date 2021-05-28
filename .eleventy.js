const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const moment = require("moment");

moment.locale("en");

const path = require("path");
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes, pageURL) {
  const imgPath = pageURL ? pageURL : "img";
  const metadata = await Image(src, {
    widths: [300, 768, 1000],
    formats: ["jpeg", "webp"],
    urlPath: ".",
    outputDir: "_site/" + imgPath,
    filenameFormat: function (id, src, width, format, options) {
      const extension = path.extname(src);
      const name = path.basename(src, extension);
      return `${name}-${width}w.${format}`;
    },
  });

  const imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);

  // eleventyConfig.addShortcode("first_image", (post) => extractFirstImage(post));

  // eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("blog/*/*/*/*/*");
  // AKA /blog/year/month/day/postname/*.jpeg

  eleventyConfig.addShortcode("excerpt", (article) => extractExcerpt(article));

  eleventyConfig.addFilter("dateIso", (date) => {
    return moment(date).toISOString();
  });

  eleventyConfig.addFilter("dateReadable", (date) => {
    return moment(date).utc().format("LL"); // E.g. May 31, 2019
  });

  eleventyConfig.addPlugin(syntaxHighlight);

  const markdownIt = require("markdown-it");
  const markdownItOptions = {
    html: true,
    linkify: true,
  };

  const md = markdownIt(markdownItOptions)
    .use(require("markdown-it-footnote"))
    .use(require("markdown-it-attrs"))
    .use(function (md) {
      // Recognize Mediawiki links ([[text]])
      md.linkify.add("[[", {
        validate: /^([\w\s/-]+)(.\w+)?\s?(\|\s?([\w\s/]+))?\]\]/,
        normalize: (match) => {
          const parts = match.raw.slice(2, -2).split("|");
          parts[0] = parts[0].replace(/.(md|markdown)\s?$/i, "");
          match.text = (parts[1] || parts[0]).trim();
          match.url = `/notes/${parts[0].trim()}/`;
        },
      });
    });

  eleventyConfig.addFilter("markdownify", (string) => {
    return md.render(string);
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addCollection("notes", function (collection) {
    return collection.getFilteredByGlob(["notes/**/*.md", "index.md"]);
  });

  eleventyConfig.addPassthroughCopy("assets");

  return {
    useGitIgnore: false,
    dir: {
      input: "./",
      output: "_site",
      layouts: "layouts",
      includes: "includes",
      data: "_data",
    },
    passthroughFileCopy: true,
  };
};

function extractExcerpt(article) {
  if (!article.hasOwnProperty("templateContent")) {
    console.warn(
      'Failed to extract excerpt: Document has no property "templateContent".'
    );
    return null;
  }

  let excerpt = null;
  const content = article.templateContent;

  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: "<!-- Excerpt Start -->", end: "<!-- Excerpt End -->" },
    { start: "<p>", end: "</p>" },
  ];

  separatorsList.some((separators) => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);

    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content
        .substring(startPosition + separators.start.length, endPosition)
        .trim();
      return true; // Exit out of array loop on first match
    }
  });

  return excerpt;
}

// function extractFirstImage(doc) {
//   if (!doc.hasOwnProperty("templateContent")) {
//     console.warn(
//       "❌ Failed to extract image: Document has no property `templateContent`."
//     );
//     return;
//   }

//   const content = doc.templateContent;

//   if (content.includes("<img")) {
//     const imgTagBegin = content.indexOf("<img");
//     const imgTagEnd = content.indexOf(">", imgTagBegin);

//     return content.substring(imgTagBegin, imgTagEnd + 1);
//   }

//   return "";
// }

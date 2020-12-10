const visit = require(`unist-util-visit`);

const defaultOptions = {
  width: 600,
  className: 'youtube-thumbnail',
  title: 'Click to watch video on youtube.com',
};
module.exports = async ({ markdownAST }, options) => {
  options = Object.assign(defaultOptions, options);
  options = { ...defaultOptions, ...options };

  visit(markdownAST, `inlineCode`, async (node, parentIndex, parent) => {
    const { value } = node;
    if (value.startsWith(`youtube:`)) {
      const videoId = value.substr(8).trim();

      parent.type = `html`;
      parent.value = `<div class="youtube-thumbnail-container"><img src="https://img.youtube.com/vi/${videoId}/0.jpg" alt="Thumbnail of Youtube video ${videoId}" title="Click to watch video on youtube.com" class="youtube-thumbnail"/><a href="https://www.youtube.com/watch?v=${videoId}" title="Link to the video on YouTube" target="_blank"><div class="youtube-thumbnail-overlay"></div></a><div class="youtube-thumbnail-text">Watch on YouTube</div></div>`;
    }
  });

  return markdownAST;
};

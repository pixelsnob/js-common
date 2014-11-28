/** 
 * Configures markdown
 * 
 */
define([ 'markdown' ], function(markdown) {
  if (window.cms.markdown_opts) {
    markdown.setOptions(window.cms.markdown_opts);
  }
  return markdown;
});

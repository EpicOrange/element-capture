__Note__ This was an old project, it was used to retrieve selected elements for sites using JS-generated DOM. If you're looking to just grab selectors for sites serving static HTML, I'd recommend curl + [pup](https://github.com/ericchiang/pup)

# element-capture
Command line utility. Given URL and jQuery selector, return element innerHTML. Uses CasperJS.

# Setup and use

- `npm install -g casperjs`
- `alias cap='casperjs ~/path/to/this/repo/cap.js'`
- `cap 'https://www.youtube.com/watch?v=WUvTyaaNkzM' 'div.watch-view-count'`
- `cap 'https://www.reddit.com/user/Poem_for_your_sprog/' 'div#siteTable>div>div>form>div.usertext-body>div>p'`
- `cap 'https://en.wikipedia.org/wiki/Special:Random' 'div#mw-content-text>p:nth-of-type(1)'`

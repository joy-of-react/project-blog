# Project Blog

The final project from The Joy of React.

# Notes:

- Sandpack should be a stretch goal (with provided solution)
- Parsing frontmatter with Gray Matter (maybe the original MDX shouldn't have any frontmatter? We can provide the markup in the README, and some broad instructions for using gray-matter)
- Substituting `<a>` for Next Link (Early?)
- Tags! Could be a good way to have them implement dynamic route segments, if they haven't already?
- `loading.js` for improved UX!
- RSS Feed + dark/light buttons: polymorphism review! Create a button that can act as either.
- Dark/light toggle? Using cookies and RSC. Sounds tricky, maybe make this the final exercise.
- Deploy! Final exercise

# Exercise 1: List of posts on the homepage

- Use the `file-helpers`. Render a card for each one.

# Exercise 2: Viewing the blog post

- Update `postslug/page.js` to use MDXRemote and the file helpers to load the current blog post and render it.
- Same thing in layout.
- Cache with `React.cache`

# Exercise 3: Add metadata!

- In Root layout, add generic title
- In blog post layout, use specific title for blog post

# Exercise 4: Code snippets with Bright

- Add support to MDX with `components`. Pass through the pre-built component.

# Exercise 5: Animated Division widget

- Use Framer Motion to add animations to the currently-static division thing.

# Exercise X: Error handling

What happens if I go to `localhost:3000/hfjvdskfhnsdkf`? Right now it gives an `ENOENT` error. Should use `error.js`.

- Not something we've explicitly covered, but this'll be a good chance for them to do some independent research!

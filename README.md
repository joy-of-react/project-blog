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
- `key` comes from filename. Guaranteed unique! In every major OS
- `delegated` pros and cons.

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

- MDX Integration
  - Create an `mdx-helpers.js` file since it feels weird to import `DivisionWhatever` into the blog post layout.js file
  - Lazy loading! use next/dynamic in the `index.js`.
- Use Framer Motion to add animations to the currently-static division thing:
  - Add `motion.div`, layout.
  - Include index as children, talk through what I want.
  - Show how to calculate it.
  - Use `useId()` to avoid issues with `0`, and for global uniqueness
  - Use `LayoutGroup` to prevent teleporting.
  - **Prevent motion by default with `MotionConfig`**

# 5B: Remainder section

- Uncomment 2nd `DivisionGroupsDemo`, delete TODO.
- Show that it's busted, explain why
- Calculate `layoutId` and apply
- Reverse the array, as a nice-to-have.

# Exercise 6: Circular Colors widget

- Start by adding a state variable for `timeElapsed`
- Derive the currentColor, explain that it shouldn't be its own state
- Test by manually changing default `timeElapsed`
- Add an interval. Cleanup.
- **IDEA:** start from here, to keep the video shorter?
- Add `status`, bail out early if status isn't `playing`
- Wire up buttons
- Increase `timeElapsed` when playing, maybe?
  - Explain that we can spam-click the button to go faster than 1x/second, but that it's fine given the use case, the goal of this widget.

# Exercise 7: Dark Mode

- Start by making the edits in `layout.js` to switch tokens. Read from cookie. Edit in devtools
- Add dynamic changes step by step in `Header`.
- Create new `DarkLightToggle` component which abstracts it out.
- IDEA: Maybe _start_ with the naive implementation and walk the user through it?

# Exercise 8: Deploy!

No solution required.

---

# Stretch Goal 1: RSS Feed

- Polymorphic button tweak
- Self-guided, maybe recommend an NPM package?
- Maybe film a _short_ video walking through my solution, no live coding?

# Stretch Goal 2: 404 page for gibberish URL

- the `notFound()` function, and `not-found.js`
- Maybe film a _short_ video walking through my solution, no live coding?

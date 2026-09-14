# Idiom illustrations

Drop one image per idiom here, named exactly after the idiom + `.png`:

```
images/画蛇添足.png
images/守株待兔.png
images/狐假虎威.png
...
```

The game auto-loads `images/<idiom>.png` for each card. If the file is missing,
it gracefully shows a clean placeholder with the English `visual_prompt` as a
hint — so the game is fully playable before any art is added.

Recommended: consistent 16:10 aspect ratio (matches the illustration card),
~800×500px, same flat / storybook style across all 20 for visual cohesion.

To use a different extension, change `IMAGE_EXT` in `index.html`.

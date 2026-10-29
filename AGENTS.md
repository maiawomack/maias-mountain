<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All resume content (projects/trails, roles, skills, map path coordinates) lives in `src/lib/resume.ts`; pages only render it, so content edits happen in one place.
- Trail paths and label positions use the 1920x1200 coordinate space of `src/assets/mountain-map.jpg`; replacing the map image means re-plotting them.
- Each bullet carries a lens tag (eng/product) consumed by `useLens`; keep tagging new bullets so the Engineering/Product toggle stays meaningful.

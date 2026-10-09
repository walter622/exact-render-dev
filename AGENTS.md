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

- Landing page editable content (WhatsApp numbers, @s, photos, placeholders, Pixel ID) lives in src/config/site.ts — why: owner edits one file without touching layout.
- Uploaded photography is served through CDN asset pointers and generated illustrative images through bundled imports, all referenced in the site configuration; testimonial portraits remain empty until supplied — why: preserve uploaded subjects and avoid depicting fictional people as actual customers.
- Render product-care steps from one ordered list with row-major desktop order and sequential mobile order — why: maintain an unambiguous progression and consistent sizing.

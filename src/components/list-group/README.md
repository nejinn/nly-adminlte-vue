# List group

> List groups are a flexible and powerful component for displaying a series of content. List group
> items can be modified to support just about any content within. They can also be used as
> navigation via various props.

```html
<nly-list-group>
  <nly-list-group-item>Cras justo odio</nly-list-group-item>
  <nly-list-group-item>Dapibus ac facilisis in</nly-list-group-item>
  <nly-list-group-item>Morbi leo risus</nly-list-group-item>
  <nly-list-group-item>Porta ac consectetur ac</nly-list-group-item>
  <nly-list-group-item>Vestibulum at eros</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group.vue -->
```

## Active items

Set the `active` prop on a `<nly-list-group-item>` to indicate the current active selection.

```html
<nly-list-group>
  <nly-list-group-item>Cras justo odio</nly-list-group-item>
  <nly-list-group-item active>Dapibus ac facilisis in</nly-list-group-item>
  <nly-list-group-item>Morbi leo risus</nly-list-group-item>
  <nly-list-group-item>Porta ac consectetur ac</nly-list-group-item>
  <nly-list-group-item>Vestibulum at eros</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-active.vue -->
```

## Disabled items

Set the `disabled` prop on a `<nly-list-group-item>` to make it appear disabled (also works with
actionalable items. see below).

```html
<nly-list-group>
  <nly-list-group-item disabled>Cras justo odio</nly-list-group-item>
  <nly-list-group-item>Dapibus ac facilisis in</nly-list-group-item>
  <nly-list-group-item>Morbi leo risus</nly-list-group-item>
  <nly-list-group-item disabled>Porta ac consectetur ac</nly-list-group-item>
  <nly-list-group-item>Vestibulum at eros</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-disabled.vue -->
```

## Actionable list group items

Turn a `<nly-list-group-item>` into an actionable _link_ (`<a href="...">`) by specifying either an
`href` prop or [router-link](/docs/reference/router-links) `to` prop.

```html
<nly-list-group>
  <nly-list-group-item href="#some-link">Awesome link</nly-list-group-item>
  <nly-list-group-item href="#" active>Link with active state</nly-list-group-item>
  <nly-list-group-item href="#">Action links are easy</nly-list-group-item>
  <nly-list-group-item href="#foobar" disabled>Disabled link</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-link.vue -->
```

Or if you prefer `<button>` elements over links, set the `button` prop to `true`.

```html
<nly-list-group>
  <nly-list-group-item button>Button item</nly-list-group-item>
  <nly-list-group-item button>I am a button</nly-list-group-item>
  <nly-list-group-item button disabled>Disabled button</nly-list-group-item>
  <nly-list-group-item button>This is a button too</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-button.vue -->
```

**Notes:**

- When the prop `button` is `true`, all [link related props](/docs/components/link) (other than
  `active`) and the `tag` prop will have no effect.
- When `href` or `to` are set, the `tag` prop has no effect.

Refer to the [Router support](/docs/reference/router-links) reference page for router-link specific
props.

## Contextual variants

Use contextual variants to style list items with a stateful background and color, via the `variant`
prop.

```html
<nly-list-group>
  <nly-list-group-item>Default list group item</nly-list-group-item>
  <nly-list-group-item variant="primary">Primary list group item</nly-list-group-item>
  <nly-list-group-item variant="secondary">Secondary list group item</nly-list-group-item>
  <nly-list-group-item variant="success">Success list group item</nly-list-group-item>
  <nly-list-group-item variant="danger">Danger list group item</nly-list-group-item>
  <nly-list-group-item variant="warning">Warning list group item</nly-list-group-item>
  <nly-list-group-item variant="info">Info list group item</nly-list-group-item>
  <nly-list-group-item variant="light">Light list group item</nly-list-group-item>
  <nly-list-group-item variant="dark">Dark list group item</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-variant.vue -->
```

Contextual variants also work with action items. Note the addition of the hover styling here not
present in the previous example. Also supported is the `active` state; set it to indicate an active
selection on a contextual list group item.

```html
<nly-list-group>
  <nly-list-group-item href="#">Default list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="primary">Primary list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="secondary">Secondary list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="success">Success list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="danger">Danger list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="warning">Warning list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="info">Info list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="light">Light list group item</nly-list-group-item>
  <nly-list-group-item href="#" variant="dark">Dark list group item</nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-variant-action.vue -->
```

### Conveying meaning to assistive technologies

Using color to add meaning only provides a visual indication, which will not be conveyed to users of
assistive technologies – such as screen readers. Ensure that information denoted by the color is
either obvious from the content itself (e.g. the visible text), or is included through alternative
means, such as additional text hidden using the `.sr-only` class.

## With badges

Add [badges](/docs/components/badge) to any list group item to show unread counts, activity, and
more with the help of some [flex utility classes](/docs/reference/utility-classes).

```html
<nly-list-group>
  <nly-list-group-item class="d-flex justify-content-between align-items-center">
    Cras justo odio
    <nly-badge variant="primary" pill>14</nly-badge>
  </nly-list-group-item>

  <nly-list-group-item class="d-flex justify-content-between align-items-center">
    Dapibus ac facilisis in
    <nly-badge variant="primary" pill>2</nly-badge>
  </nly-list-group-item>

  <nly-list-group-item class="d-flex justify-content-between align-items-center">
    Morbi leo risus
    <nly-badge variant="primary" pill>1</nly-badge>
  </nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-badges.vue -->
```

## List groups inside cards

Incorporate list groups into [cards](/docs/components/card). Use the `<nly-list-group>` prop `flush`
prop when using cards with `no-body` to make the sides of the list group flush with the card.

```html
<nly-card-group deck>
  <nly-card header="Card with list group">
    <nly-list-group>
      <nly-list-group-item href="#">Cras justo odio</nly-list-group-item>
      <nly-list-group-item href="#">Dapibus ac facilisis in</nly-list-group-item>
      <nly-list-group-item href="#">Vestibulum at eros</nly-list-group-item>
    </nly-list-group>

    <p class="card-text mt-2">
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </p>
  </nly-card>

  <nly-card no-body header="Card with flush list group">
    <nly-list-group flush>
      <nly-list-group-item href="#">Cras justo odio</nly-list-group-item>
      <nly-list-group-item href="#">Dapibus ac facilisis in</nly-list-group-item>
      <nly-list-group-item href="#">Vestibulum at eros</nly-list-group-item>
    </nly-list-group>

    <nly-card-body>
      Quis magna Lorem anim amet ipsum do mollit sit cillum voluptate ex nulla tempor. Laborum
      consequat non elit enim exercitation cillum aliqua consequat id aliqua. Esse ex consectetur
      mollit voluptate est in duis laboris ad sit ipsum anim Lorem.
    </nly-card-body>
  </nly-card>
</nly-card-group>

<!-- nly-list-group-card.vue -->
```

## Horizontal list groups

Set the prop `horizontal` to `true` to change the layout of list group items from vertical to
horizontal across all breakpoints. Alternatively, set `horizontal` to a responsive breakpoint (`sm`,
`md`, `lg` or `xl`) to make a list group horizontal starting at that breakpoint's min-width.
Currently horizontal list groups cannot be combined with `flush` list groups.

**ProTip:** Want equal-width list group items when horizontal? Add the class `flex-fill` to each
list group item.

**Always horizontal:**

```html
<div>
  <nly-list-group horizontal>
    <nly-list-group-item>Cras justo odio</nly-list-group-item>
    <nly-list-group-item>Dapibus ac facilisis in</nly-list-group-item>
    <nly-list-group-item>Morbi leo risus</nly-list-group-item>
  </nly-list-group>
</div>

<!-- nly-list-group-horizontal.vue -->
```

**Horizontal at breakpoint `md` and above:**

```html
<div>
  <nly-list-group horizontal="md">
    <nly-list-group-item>Cras justo odio</nly-list-group-item>
    <nly-list-group-item>Dapibus ac facilisis in</nly-list-group-item>
    <nly-list-group-item>Morbi leo risus</nly-list-group-item>
  </nly-list-group>
</div>

<!-- nly-list-group-horizontal-md.vue -->
```

## Custom content

Add nearly any HTML or component within, even for linked list groups like the one below, with the
help of [flexbox utility classes](/docs/reference/utility-classes).

```html
<nly-list-group>
  <nly-list-group-item href="#" active class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mnly-1">List group item heading</h5>
      <small>3 days ago</small>
    </div>

    <p class="mnly-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small>Donec id elit non mi porta.</small>
  </nly-list-group-item>

  <nly-list-group-item href="#" class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">List group item heading</h5>
      <small class="text-muted">3 days ago</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small class="text-muted">Donec id elit non mi porta.</small>
  </nly-list-group-item>

  <nly-list-group-item href="#" disabled class="flex-column align-items-start">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Disabled List group item</h5>
      <small class="text-muted">3 days ago</small>
    </div>

    <p class="mb-1">
      Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
    </p>

    <small class="text-muted">Donec id elit non mi porta.</small>
  </nly-list-group-item>
</nly-list-group>

<!-- nly-list-group-content.vue -->
```

<!-- Component reference added automatically from component package.json -->

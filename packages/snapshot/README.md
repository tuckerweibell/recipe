
# Create Recipe Preview Images

## Installation

Change into the recipe monorepo root directory and run:

```term
yarn install
```

## Generating preview images

Create a template for your preview image. A template is a JSX fenced code block within a markdown file.

```md
    ```jsx
    <div style={{'--zoom': 1.8, marginTop: -30, width: 300}}>
      <EzFormLayout>
          <EzField type="text" label="■■■■■■■■■" />
        <EzField type="text" label="■■■■■■" />
        <EzField type="number" label="■■■■■■■■■■■■■" value="■■" />
      </EzFormLayout>
    </div>
    ```
```

You may wish to add additional markup to position or scale the rendered component to fit the preview image.


From the root of the Recipe repository, you can now run the `create-preview` yarn script providing the filename of the template you created as an argument to the script. Recipe will use this template to generate a preview image and will output the image into the `static/images/preview/` folder of the Recipe doc-site.

The script executes from the `packages/snapshot` directory so the file path to the recipe component should start with `../recipe/src`:

```
yarn workspace @ezcater/recipe-snapshot create-preview ../recipe/src/components/EzFormLayout/EzFormLayout.preview.md
```

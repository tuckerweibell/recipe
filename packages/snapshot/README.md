
# Create Recipe Preview Images

## Installation

Change into the 'packages/snapshot' directory and run

```
npm install
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


From the root of the Recipe repository, you can now run the `create-preview` npm script providing the filename of the template you created as an argument to the script. Recipe will use this template to generate a preview image and will output the image into the `static/images/preview/` folder of the Recipe doc-site.

```
npm run create-preview src/components/EzFormLayout/EzFormLayout.preview.md
```

# Child Theme for OJS 3
The parent of this Child Theme is [Health Sciences](https://github.com/pkp/healthSciences). This Child Theme wish to provide a sidebar in the Issue part, after the annoucements/description of the issue, where to visualize the Custom Blocks (the Plugin Custom Block manager is needed!).
It provides also a different visualization for small devices.

(All in progress)

## Slider

For the slider I used [slick.js](https://kenwheeler.github.io/slick/), with the inizialization and attributes in the `custom.js` file. I also added some css fixes in the `custom.less` file. For it to work is necessary to use the Custom Header plugin, inserting these lines for the jsDelivr CDN, in Custom Header:

```
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
```

in Footer:
```
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
```

In the page when you want to add the slider, you need to add this code:

```
<div class="responsive-slicker">
    <div>your content</div>
    <div>your content</div>
    <div>your content</div>
  </div>
```
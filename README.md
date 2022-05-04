# Image Manipulation Benchmarking

Over COCO 2017 train dataset and Intel® Core™ i7-6900K CPU @ 4.20GHz

## Python projects in test

- [Pillow](https://pillow.readthedocs.io/en/stable/)
- [Skimage](https://scikit-image.org/)

## NodeJS projects in test

- [sharp](https://www.npmjs.com/package/sharp)
- [image-js](https://www.npmjs.com/package/image-js)

# Result

```
  [_skimage.py] Execution time was 10275 seconds.
  [_skimage.py] Execution time was 10274925884322 nanoseconds.

  [_pillow.py] Execution time was 1824 seconds.
  [_pillow.py] Execution time was 1823548743154 nanoseconds.

  [_sharp.js] Execution time was 551 seconds.
  [_sharp.js] Execution time was 550649734974 nanoseconds.

  [_image-js.js] Execution time was 3941 seconds.
  [_image-js.js] Execution time was 3941281175970 nanoseconds.

```

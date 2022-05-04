#!/bin/bash

start_sec=`date +%s`
start_nano=`date +%s%N`

python _skimage.py ~/train2017 > /dev/null

end_nano=`date +%s%N`
end_sec=`date +%s`
echo [_skimage.py] Execution time was `expr $end_sec - $start_sec` seconds.
echo [_skimage.py] Execution time was `expr $end_nano - $start_nano` nanoseconds.

start_sec=`date +%s`
start_nano=`date +%s%N`

python _pillow.py ~/train2017 > /dev/null

end_nano=`date +%s%N`
end_sec=`date +%s`
echo [_pillow.py] Execution time was `expr $end_sec - $start_sec` seconds.
echo [_pillow.py] Execution time was `expr $end_nano - $start_nano` nanoseconds.

start_sec=`date +%s`
start_nano=`date +%s%N`

node _sharp.js ~/train2017 > /dev/null

end_nano=`date +%s%N`
end_sec=`date +%s`
echo [_sharp.js] Execution time was `expr $end_sec - $start_sec` seconds.
echo [_sharp.js] Execution time was `expr $end_nano - $start_nano` nanoseconds.

start_sec=`date +%s`
start_nano=`date +%s%N`

node _image-js.js ~/train2017 > /dev/null

end_nano=`date +%s%N`
end_sec=`date +%s`
echo [_image-js.js] Execution time was `expr $end_sec - $start_sec` seconds.
echo [_image-js.js] Execution time was `expr $end_nano - $start_nano` nanoseconds.

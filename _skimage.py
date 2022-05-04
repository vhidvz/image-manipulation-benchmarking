"""
Install dependencies by below command

$ pip install scikit-image==0.17.2
"""
import sys
import glob

from skimage import io
from skimage import transform

if __name__ == "__main__":
    path = sys.argv[1]

    # list of all images
    files = glob.glob(path + '/*')

    for f in files:
        image = io.imread(f)
        shape = image.shape

        a = transform.resize(image, (100, 100))
        b = transform.resize(image, (200, 200))
        c = transform.resize(image, (300, 300))

        d = transform.resize(image, (shape[0]//2, shape[1]//2))
        e = transform.resize(image, (shape[0]//3, shape[1]//3))
        f = transform.resize(image, (shape[0]//4, shape[1]//4))
        g = transform.resize(image, (shape[0]//5, shape[1]//5))

        # Avoid automatically garbage collection
        print(a.shape, b.shape, c.shape, d.shape, e.shape, f.shape, g.shape)

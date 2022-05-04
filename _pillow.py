"""
Install dependencies by below command

$ pip install pillow==7.2.0
"""
import sys
import glob

from PIL import Image

if __name__ == "__main__":
    path = sys.argv[1]

    # list of all images
    files = glob.glob(path + '/*')

    for f in files:
        image = Image.open(f)
        size = image.size

        a = image.resize((100, 100))
        b = image.resize((200, 200))
        c = image.resize((300, 300))

        d = image.resize((size[0]//2, size[1]//2))
        e = image.resize((size[0]//3, size[1]//3))
        f = image.resize((size[0]//4, size[1]//4))
        g = image.resize((size[0]//5, size[1]//5))

        # Avoid automatically garbage collection
        print(a.size, b.size, c.size, d.size, e.size, f.size, g.size)

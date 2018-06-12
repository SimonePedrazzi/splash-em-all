# !/usr/bin/env python

from setuptools import setup, find_packages

setup(
    name="splashem",
    packages=find_packages("."),
    version="0.1.0",
    description="command line utility to download unsplash images 🚀",
    author="Simone Pedrazzi",
    license="MIT",
    author_email="pedra89@gmail.com",
    keywords=["python", "images", "unsplash", "bulk download"],
    install_requires=[],
    entry_points={
        "console_scripts": ["splashem = splashem:cli"]
    }
)
# -*- coding: utf-8 -*-
"""
Created by Linjianhui on 2017/1/3
"""
from flask import Flask

app = Flask(__name__, static_url_path='')

from . import api_router

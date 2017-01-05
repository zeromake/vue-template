# -*- coding: utf-8 -*-
"""
Created by Linjianhui on 2017/1/3
"""
from flask_restful import Api
from . import app
from .resources.foo import Foo


api = Api(app)
api.add_resource(Foo, '/foo')



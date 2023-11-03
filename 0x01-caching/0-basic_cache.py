#!/usr/bin/env python3

'''
Create a class BasicCache that inherits from BaseCaching and is a caching
system:
'''

from base_caching import BaseCaching


class BasicCache(BaseCaching):
    '''
    Caching function
    '''
    def __init__(self):
        '''
        Function to initialize class
        '''
        BaseCaching.__init__(self)

    def put(self, key, item):
        '''
        Put function
        '''
        if key is None or item is None:
            pass
        else:
            self.cache_data[key] = item

    def get(self, key):
        '''
        Get function
        '''
        if key is not None and key in self.cache_data.keys():
            return self.cache_data[key]
        return None

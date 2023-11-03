#!/usr/bin/env python3

'''
Create a class LRUCache that inherits from BaseCaching and is a caching system
'''

from base_caching import BaseCaching


class LRUCache(BaseCaching):

    def __init__(self):
        '''
        FIFOCache function
        '''
        super().__init__()
        self.usage = []

    def put(self, key, item):
        '''
        Put function
        '''
        if key is None or item is None:
            pass
        else:
            length = len(self.cache_data)
            if length >= BaseCaching.MAX_ITEMS and key not in self.cache_data:
                print("DISCARD: {}".format(self.usage[0]))
                del self.cache_data[self.usage[0]]
                del self.usage[0]
            if key in self.usage:
                del self.usage[self.usage.index(key)]
            self.usage.append(key)
            self.cache_data[key] = item

    def get(self, key):
        '''
        Get function
        '''
        if key is not None and key in self.cache_data.keys():
            del self.usage[self.usage.index(key)]
            self.usage.append(key)
            return self.cache_data[key]
        return None
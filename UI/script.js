// JavaScript source code
; (function () {
    var photoPsts =
        [
            {
                id: '1',
                description: 'post 1',
                createdAt: new Date('2019-01-01T03:00:00'),
                author: 'user1',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'summer', 'sun'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '2',
                description: 'post 2',
                createdAt: new Date('2018-03-05T03:33:00'),
                author: 'user1',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'winter'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '3',
                description: 'post 3',
                createdAt: new Date('2019-01-02T10:37:00'),
                author: 'user2',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'spring', 'love'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '4',
                description: 'post 4',
                createdAt: new Date('2019-01-07T11:00:00'),
                author: 'user2',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'winter', 'cold'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '5',
                description: 'post 5',
                createdAt: new Date('2019-01-19T14:48:01'),
                author: 'user3',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'work'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '6',
                description: 'post 6',
                createdAt: new Date('2019-01-13T09:09:09'),
                author: 'user1',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'friends', 'cafe'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '7',
                description: 'post 7',
                createdAt: new Date('2019-01-21T07:00:00'),
                author: 'user5',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'love', 'relationships'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '8',
                description: 'post 8',
                createdAt: new Date('2019-01-30T21:00:09'),
                author: 'user2',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'summer'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '9',
                description: 'post 9',
                createdAt: new Date('2019-02-01T01:15:00'),
                author: 'user2',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'summer', 'beach'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '10',
                description: 'post 10',
                createdAt: new Date('2019-02-08T03:02:00'),
                author: 'user4',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'work', 'career'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '11',
                description: 'post 11',
                createdAt: new Date('2019-02-07T13:00:00'),
                author: 'user4',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'work', 'success'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '12',
                description: 'post 12',
                createdAt: new Date('2019-01-11T14:00:14'),
                author: 'user1',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'love'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '13',
                description: 'post 13',
                createdAt: new Date('2019-02-01T03:36:00'),
                author: 'user3',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'winter', 'snow'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '14',
                description: 'post 14',
                createdAt: new Date('2019-02-11T09:19:36'),
                author: 'user5',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'winter', 'freshly'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '15',
                description: 'post 15',
                createdAt: new Date('2019-02-15T15:05:01'),
                author: 'user2',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'winter', 'cold'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '16',
                description: 'post 16',
                createdAt: new Date('2019-02-13T03:10:00'),
                author: 'user2',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'spring', 'flowers'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '17',
                description: 'post 17',
                createdAt: new Date('2019-02-20T13:50:20'),
                author: 'user1',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'vacation', 'summer'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '18',
                description: 'post 18',
                createdAt: new Date('2019-02-16T16:16:01'),
                author: 'user3',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'relax', 'cafe'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '19',
                description: 'post 19',
                createdAt: new Date('2019-03-01T03:02:01'),
                author: 'user4',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'funny', 'friends'
                    ],
                likes:
                    [
                        ''
                    ]
            },
            {
                id: '20',
                description: 'post 20',
                createdAt: new Date('2019-03-01T01:02:03'),
                author: 'user5',
                photoLink: 'files\photo.jpg',
                tags:
                    [
                        'work', 'coffee'
                    ],
                likes:
                    [
                        ''
                    ]
            }
        ];

    var testingpost1 = {
        id: '21',
        description: 'post 21',
        createdAt: new Date('2019-03-02T01:02:03'),
        author: 'user5',
        photoLink: 'files\photo.jpg',
        tags:
            [
                'work', 'coffee'
            ],
        likes:
            [
                ''
            ]
    };

    var testingpost2 = {
        id: '21',
        description: 'post 21',
        createdAt: new Date('2019-03-02T01:02:03'),
        author: 'user5',
        photoLink: 'files\photo.jpg',
        tags:
            [
                'work456789012345678901111', 'coffee'
            ],
        likes:
            [
                ''
            ]
    };

    var testposts = [{
        id: '30',
        description: 'post test',
        createdAt: new Date('2019-03-05T01:02:03'),
        author: 'user5',
        photoLink: 'files\photo.jpg',
        tags:
            [
                'work', 'coffee'
            ],
        likes:
            [
                ''
            ]
    },
        {
            id: '31',
            description: 'post test',
            createdAt: new Date('2019-03-05T01:02:03'),
            author: 'user5',
            photoLink: 'files\photo.jpg',
            tags:
                [
                    'work', 'coffee'
                ]
        }
    ];
    //just to mind it
    class PhotoPost {

        /**
         * Creates a new post without validation checking
         * @param {String} id - identifier
         * @param {String} description - description
         * @param {Date} createdAt - date of creation
         * @param {String} author - author name
         * @param {String} photoLink - location of the photo
         * @param {Array<String>} tags - list of tags
         * @param {Array<String>} likes - list of users liked the post
         */
        constructor(id, description, createdAt, author, photoLink, tags, likes) {
            this.id = id;
            this.description = description;
            this.createdAt = createdAt;
            this.author = author;
            this.photoLink = photoLink;
            this.tags = tags;
            this.likes = likes;
        }

        /**
         * Converts post into string
         * @param {PhotoPost} post
         * @returns {String}
         */
        static toString(post) {
            let temp1 = "";
            let temp2 = "";
            let temp = "";
            if (post.id) {
                temp += 'id: ' + post.id;
            }
            if (post.description) {
                temp += '\ndescription: ' + post.description;
            }
            if (post.createdAt) {
                temp += '\ncreation date: ' + post.createdAt.toString();
            }
            if (post.author) {
                temp += '\nauthor: ' + post.author;
            }
            if (post.photoLink) {
                temp += '\nphoto link: ' + post.photoLink;
            }
            if (post.tags) {
                post.tags.forEach(function (item, i, arr) {
                    temp1 += item + " ";
                });
                temp += '\ntags: ' + temp1;
            }
            if (post.likes) {
                post.likes.forEach(function (item, i, arr) {
                    temp2 += item + " ";
                });
                temp += '\nlikes: ' + temp2;
            }
            
            return temp;
        }
    }
    class PostList {

        /**
         * Creates a new collection consisting of valide posts from arrayofposts
         * @param {Array<PhotoPost>} arrayofposts
         */
        constructor(arrayofposts) {
            let tempposts = [];
            arrayofposts.forEach(function (item, i, arr) {
                if (PostList.validate(item)) {
                    tempposts.push(item);
                }
            });
            this._photoPosts = tempposts;
        }

        //the main collection of photoposts
        get photoPosts() {
            return this._photoPosts;
        }

        set photoPosts(value) { }

        //returns an intersection of 2 arrays
        static _intersection = (posttags, filtertags) => posttags.filter(function (tag) {
            return filtertags.indexOf(tag) !== -1;
        });        

        /**
         * Adds all valide posts from arrayofposts to the collection
         * @param {Array<PhotoPost>} arrayofposts
         * @returns {Array<PhotoPost>} - array of invalid posts
         */
        addAll(arrayofposts) {
            let temppostsv = [];//valid posts
            let temppostsinv = [];//invalid posts
            arrayofposts.forEach(function (item, i, arr) {
                if (PostList.validate(item)) {
                    temppostsv.push(item);
                }
                else {
                    temppostsinv.push(item);
                }
            });
            this._photoPosts = this._photoPosts.concat(temppostsv);
            return temppostsinv;
        }

        /**
         * Clears the contents of the collection*/
        clear() {
            this._photoPosts = [];
        }

        /**
         * Get photo posts using pagination params and filter config.
         * @param {any} skip - count of posts to skip in a filtered list
         * @param {any} top - max count of posts to return
         * @param {any} filterConfig - filter config object, supports:
         *  author: string - the author of the post
         *  firstDate: Date - minimal date
         *  lastDate: Date - maximal date
         *  tags: string[] - list of tags
         * @returns {Array<PhotoPost>}
         */
        getPage(skip, top, filterConfig) {
            if (!skip) {
                skip = 0;
            }
            if (!top) {
                top = 10;
            }

            let filteredPosts = this._photoPosts;
            if (filterConfig) {

                if (!filterConfig.firstDate) {
                    filterConfig.firstDate = new Date('1970-01-01T00:00:00');
                }
                if (!filterConfig.lastDate) {
                    filterConfig.lastDate = new Date();
                }

                if (!filterConfig.author && !filterConfig.tags)
                    filteredPosts = filteredPosts.filter(function (item) {
                        return (item.createdAt > filterConfig.firstDate && item.createdAt < filterConfig.lastDate)
                    });
                else if (!filterConfig.author)
                    filteredPosts = filteredPosts.filter(function (item) {
                        return (item.createdAt > filterConfig.firstDate && item.createdAt < filterConfig.lastDate && PostList._intersection(item.tags, filterConfig.tags).length !== 0)
                    });
                else if (!filterConfig.tags)
                    filteredPosts = filteredPosts.filter(function (item) {
                        return (item.createdAt > filterConfig.firstDate && item.createdAt < filterConfig.lastDate && item.author === filterConfig.author)
                    });
                else
                    filteredPosts = filteredPosts.filter(function (item) {
                        return (item.createdAt > filterConfig.firstDate && item.createdAt < filterConfig.lastDate && item.author === filterConfig.author && PostList._intersection(item.tags, filterConfig.tags).length !== 0)
                    });
            }

            return filteredPosts.sort(function compareDates(a, b) {
                return b.createdAt - a.createdAt;
            }).slice(skip, top + skip);
        }

        /**
         * Gets an index of post in the collection by its identifier 
         * Returns null when the post wasn't found
         * @param {String} id - identifier
         * @returns {Number} - index
         */
        _getIndexById(id) {
            let index = this._photoPosts.findIndex(function (item, i, arr) { return item.id === id; });
            if (index === -1) {
                return null;//post not found
            }
            else {
                return index;
            }
        }

        /**
         * Gets a post from the collecntion by its identifier
         * Returns null when the post wasn't found
         * @param {String} id - identifier
         * @returns {PhotoPost} - post
         */
        get(id) {
            let index = this._getIndexById(id);
            if (index) {
                return this._photoPosts[index];
            }
            else {
                return null;
            }
        }

        //callback function checks if an item is a string
        static _isNotString = (item, i, arr) => typeof (item) !== "string";
        //callback function checks if an item has length more than 20
        static _isBiggerThan20 = (item, i, arr) => item.length > 20;

        /**
         * 
         * @param {any} photoPost
         */
        static validate(photoPost) {
            

            if (!photoPost.id || !photoPost.author || !photoPost.description || !photoPost.createdAt || !photoPost.tags || !photoPost.likes) {
                return false;
            }

            if (typeof (photoPost.id) !== "string" || typeof (photoPost.author) !== "string" || typeof (photoPost.description) !== "string" || !(photoPost.createdAt instanceof Date) || !Array.isArray(photoPost.tags) || !Array.isArray(photoPost.likes)) {
                return false;
            }

            if (photoPost.description.length >= 200) {
                return false;
            }

            if (photoPost.tags.some(PostList._isNotString)) {
                return false;
            }
            if (photoPost.likes.some(PostList._isNotString)) {
                return false;
            }

            if (photoPost.tags.some(PostList._isBiggerThan20)) {
                return false;
            }

            return true;
        }

        /**
         * Adds a post to the collection after validation checking
         * Returns true when the post is added
         * @param {PhotoPost} photoPost - adding post
         * @returns {Boolean}
         */
        add(photoPost) {
            if (PostList.validate(photoPost)) {
                this._photoPosts.push(photoPost);
                return true;//post added
            }
            else {
                return false;//validation error
            }
        }

        /**
         * Finds a post in the collection by its identifier and changes some fields
         * Returns true if the post is editted
         * @param {String} id - identifier
         * @param {Object} photoPost - new fields, supports:
         *  description: string - new description
         *  tags: string[] - new list of tags
         *  likes: string[] - new list of users liked the post
         *  photoLink: string - new location of the photo
         * @returns {Boolean}
         */
        edit(id, photoPost) {
            let index = this._getIndexById(id);
            let temppost = this.get(id);
            if (!temppost) {
                return false;//post not found
            }

            if (photoPost.author || photoPost.createdAt || photoPost.id) {
                return false;
            }
            if (photoPost.description) {
                temppost.description = photoPost.description;
            }
            if (photoPost.tags) {
                temppost.tags = photoPost.tags;
            }
            if (photoPost.likes) {
                temppost.likes = photoPost.likes;
            }
            if (photoPost.photoLink) {
                temppost.photoLink = photoPost.photoLink;
            }

            if (PostList.validate(temppost)) {
                this._photoPosts[index] = temppost;
                return true;//post edited
            }
            else {
                return false;//validation error
            }
        }

        /**
         * Finds a post in the collection by its identifier and removes it fron the collection
         * Returns true if the post is removed
         * @param {String} id - identifier
         * @returns {Boolean}
         */
        remove(id) {
            let index = this._getIndexById(id);
            if (!index) {
                return false;//post not found
            }
            this._photoPosts.splice(index, 1);
            return true;//post deleted
        }

    }
    (function () {
        var result;
        var psts = new PostList(photoPsts);
        //var outputpsts = psts.getPage();//screenshot 1
        //outputpsts = psts.getPage(3, 5, {});//screenshot 2
        //result = psts.edit("19", { author: "newauthor" });//screenshot3
        //result = psts.edit("19", { description: "new descript" });//screenshot 4
        /*var output = psts.addAll(testposts);//screenshot 5
        var outputpsts = psts.getPage(0, 3, {});*/
        /*psts.add(testingpost1);//screenshot 6
        psts.add(testingpost2);
        var outputpsts = psts.getPage(0, 3, {});*/
        //psts.remove("19");//screenshot 7
        //psts.clear();//screenshot 8
        //var outputpsts = psts.getPage(0, 10, {tags:['work']});//screenshot 9
        outputpsts.forEach(function (item, i, arr) {
            console.log(PhotoPost.toString(item));
        });
    }());
}());
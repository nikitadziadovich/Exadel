; (function () {
    var photoPosts =
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

    testingpost1 = {
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
    }

    testingpost2 = {
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
    }

    intersection = function (posttags, filtertags) {
        return posttags.filter(function (tag) {
            return filtertags.indexOf(tag) != -1;
        });
    };

    getPhotoPosts = function (skip, top, filter) {

        if (!skip) {
            skip = 0;
        };
        if (!top) {
            top = 10;
        };

        var filteredPosts = photoPosts;
        if (filter) {
  
            if (!filter.firstDate) {
                filter.firstDate = new Date('1970-01-01T00:00:00');
            };
            if (!filter.lastDate) {
                filter.lastDate = new Date();
            };

            if (!filter.author && !filter.tags)
                var filteredPosts = filteredPosts.filter(function (item) {
                    return (item.createdAt > filter.firstDate && item.createdAt < filter.lastDate)
                });
            else if (!filter.author)
                var filteredPosts = filteredPosts.filter(function (item) {
                    return (item.createdAt > filter.firstDate && item.createdAt < filter.lastDate && intersection(item.tags, filter.tags).length != 0)
                });
            else if (!filter.tags)
                var filteredPosts = filteredPosts.filter(function (item) {
                    return (item.createdAt > filter.firstDate && item.createdAt < filter.lastDate && item.author == filter.author)
                });
            else
                var filteredPosts = filteredPosts.filter(function (item) {
                    return (item.createdAt > filter.firstDate && item.createdAt < filter.lastDate && item.author == filter.author && intersection(item.tags, filter.tags).length != 0)
                });
        }

        return filteredPosts.sort(function compareDates(a, b) {
            return b.createdAt - a.createdAt;
        }).slice(skip, top + skip);
    };

    getPhotoPost = function (id) {
        var post = [];

        for (i = 0; i < photoPosts.length; i++) {
            if (photoPosts[i].id == id) {
                post.push(photoPosts[i]);
                return post;
            }
        }

        return post;
    };

    IsNotString = function (item, i, arr) {
        return typeof (item) != "string";
    }

    IsBiggerThan20 = function (item, i, arr) {
        return item.length > 20;
    }

    validatePhotoPost = function (post) {
        if (!post.id || !post.author || !post.description || !post.createdAt || !post.tags || !post.likes) {
            return false;
        };

        if (typeof (post.id) != "string" || typeof (post.author) != "string" || typeof (post.description) != "string" || !(post.createdAt instanceof Date) || !Array.isArray(post.tags) || !Array.isArray(post.likes)) {
            return false;
        };

        if (post.description.length >= 200) {
            return false;
        };

        if (post.tags.some(IsNotString)) {
            return false;
        };
        if (post.likes.some(IsNotString)) {
            return false;
        };

        if (post.tags.some(IsBiggerThan20)) {
            return false;
        };

        return true;
    };

    addPhotoPost = function (post) {
        if (validatePhotoPost(post)) {

            photoPosts.push(post);
            console.log("successfully added");
        }
        else {
            console.log("error");
        }
    };

    editPhotoPost = function (id, post) {
        var index = photoPosts.findIndex(function (item, i, arr) { return item.id == id; });

        if (index == -1) {
            console.log("post with id " + id + " not found");
            return;
        };

        if (post.id || post.author || post.createdAt) {
            console.log("you are not able to change id, author or creation time");
            return;
        };

        var temppost = photoPosts[index];

        if (post.description) {
            temppost.description = post.description;
        }
        if (post.tags) {
            temppost.tags = post.tags;
        };
        if (post.likes) {
            temppost.likes = post.likes;
        };
        if (post.photoLink) {
            temppost.photoLink = post.photoLink;
        };

        if (validatePhotoPost(temppost)) {
            photoPosts[index] = temppost;
            console.log("successfully changed");
        }
        else {
            console.log("validation error");
        };

    };

    deletePhotoPost = function (id) {
        index = photoPosts.findIndex(function (item, i, arr) { return item.id == id; });

        if (index == -1) {
            console.log("post with id " + id + " not found");
            return;
        };

        delete photoPosts[index];
        console.log("successfully deleted");
    }

    OutputPosts = function (posts) {
        if (!posts || posts.length == 0) {
            console.log("nothing found");
        }
        else {
            posts.forEach(function (item, i, arr) {
                console.log("id: " + item.id + ", descr: " + item.description + ", creation: " + item.createdAt.toString() + ", author:" + item.author + ", tags:");
                item.tags.forEach(function (item, i, arr) {
                    console.log(item);
                });
                console.log(", likes: ");
                item.likes.forEach(function (item, i, arr) {
                    console.log(item);
                });
            });
        }

    };

    (function () {
        //var tempPosts = getPhotoPosts(0, 5); //screenshot_1
        //var tempPosts = getPhotoPosts(5, 5); //screenshot_2
        //var tempPosts = getPhotoPosts(); //screenshot_3
        //var tempPosts = getPhotoPosts(0, 5, { firstDate: new Date('2019-02-16T00:00:00') }); //screenshot_4
        //var tempPosts = getPhotoPosts(0, 5, { firstDate: new Date('2019-02-16T00:00:00'), lastDate: new Date('2019-02-28T00:00:00') }); //screenshot_5
        //var tempPosts = getPhotoPosts(0, 5, { author: "user5" }); //screenshot_6
        //var tempPosts = getPhotoPosts(0, 10, { tags: ["work"] }); //screenshot_7
        //var tempPosts = getPhotoPosts(0, 10, { firstDate: new Date('2019-01-10T00:00:00'), author: "user1", tags: ["love", "friends", "winter"] }); //screenshot_8
        //var tempPosts = getPhotoPost("1"); //screenshot_9
        //var tempPosts = getPhotoPost("21"); //screenshot_10
        //console.log(validatePhotoPost(photoPosts[1])); //screenshot_11
        //addPhotoPost(testingpost1); //screenshot_12
        //addPhotoPost(testingpost2); //screenshot_13
        /*tempPosts = getPhotoPost("1"); //screenshot_14
        OutputPosts(tempPosts); 
        editPhotoPost("1", { description: "one" }); 
        tempPosts = getPhotoPost("1"); 
        OutputPosts(tempPosts);*/ 
        //editPhotoPost("21", { description: "one" }); //screenshot_15
        //editPhotoPost("1", { author: "one" }); //screenshot_16
        /*tempPosts = getPhotoPosts(0, 2); //screenshot_17
        OutputPosts(tempPosts);
        deletePhotoPost("19");
        tempPosts = getPhotoPosts(0, 2);
        OutputPosts(tempPosts);*/
    }());
}());


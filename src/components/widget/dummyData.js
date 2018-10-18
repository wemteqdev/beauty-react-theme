import assets from './../assets';

const item1 = {
    imgurl:assets.cardpicture,
    category:"business",
    kind:'spa',
    subkind:'sauna',
    verified:true,
    rating:3,
    id:1,
    title:"Elite Spa In Your Own Home And Beyond With Olafic",
    location:{
        city:"Toronto",
        street:"Ontario",
        distance:"24 KM",
        lat: 45.01,
        lng: -73.01,
        hint:false
    },
    price:[50,100],
    customers:3856,
    friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
    following:true
}
const item2 = {
    imgurl:assets.cardpicture,
    category:"deal",
    kind:'spa',
    subkind:'sauna',
    verified:true,
    rating:3,
    id:1,
    title:"Elite Spa In Your Own Home And Beyond With Olafic",
    location:{
        city:"Toronto",
        street:"Ontario",
        distance:"24 KM",
        lat: 45.02,
        lng: -73.02,
        hint:false
    },
    price:{
        off: 35,
        before:450,
        current:300,
        expireDay:2
    },
    customers:3856,
    friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
    following:true
}
const item3 = {
    imgurl:assets.cardpicture,
    category:"professional",
    kind:'spa',
    subkind:'sauna',
    verified:true,
    rating:3,
    id:1,
    title:"Elite Spa In Your Own Home And Beyond With Olafic",
    location:{
        city:"Toronto",
        street:"Ontario",
        distance:"24 KM",
        lat: 45.03,
        lng: -73.03,
        hint:false
        
    },
    price:[50,100],
    customers:3856,
    friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
    following:true
}
const item4 = {
    imgurl:assets.cardpicture,
    category:"marketplace",
    kind:'spa',
    subkind:'sauna',
    verified:true,
    rating:3,
    id:1,
    title:"Elite Spa In Your Own Home And Beyond With Olafic",
    location:{
        city:"Toronto",
        street:"Ontario",
        distance:"24 KM",
        lat: 45.04,
        lng: -73.04,
        hint:false
    },
    price:[50,100],
    customers:3856,
    friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
    following:true
}

export const filteredData = [item1,item2,item3,item4];

export const categories = [
    {
        name:'Fitness & Spa',
        items:[
            {
                name:'Get Alternative',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Fit',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Alternative',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Fit',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            }
        ]
    },
    {
        name:'Fitness & Spa',
        items:[
            {
                name:'Get Alternative',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Fit',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Alternative',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Fit',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            }
        ]
    },
    {
        name:'Fitness & Spa',
        items:[
            {
                name:'Get Alternative',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Fit',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            }
        ]
    },
    {
        name:'Fitness & Spa',
        items:[
            {
                name:'Get Alternative',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            },
            {
                name:'Get Fit',
                items:['Acupuncture','Acupuncture','Acupuncture','Acupuncture']
            }
        ]
    }
]


export const activeAdvertise = [
    {
        asset:assets.yourTI1,
        title:'featured listing',
        description:'With Premium level package, you can get your message out and to the right people. You will have access to our page featured advertising. Featuring your page will benefit your business by increasing visibility and creating brand recognition with those who use the site. Premium clients will be able to add advertising banners to our business page. This will give you the flexibility to promote you business across our different web pages.'
    },
    {
        asset:assets.yourTI1,
        title:'featured deals',
        description:'With our Premium subscription, you will gain access to our deal featured service. These services will allow you to not only post a deal but to also increase its visibility among site users by having your deal featured in our “Deals” page. Featuring your deal will increase your sales by being more visible and available with those who purchase deals on daily basis and can be recommended to friends.'
    },
    {
        asset:assets.yourTI1,
        title:'featured events',
        description:'With Premium level package, you can get your message out and to the right people. You will have access to our page featured advertising. Featuring your page will benefit your business by increasing visibility and creating brand recognition with those who use the site. Premium clients will be able to add advertising banners to our business page. This will give you the flexibility to promote you business across our different web pages.'
    },
    {
        asset:assets.yourTI1,
        title:'featured jobs',
        description:'With our Premium subscription, you will gain access to our deal featured service. These services will allow you to not only post a deal but to also increase its visibility among site users by having your deal featured in our “Deals” page. Featuring your deal will increase your sales by being more visible and available with those who purchase deals on daily basis and can be recommended to friends.'
    }
]
export const startableList = [
    {
        asset:assets.yourTI2,
        title:"Free Signup",
        description:"It is 100% FREE to signup and always will be. Research your competition and understand their strategy and listings.",
    },
    {
        asset:assets.yourTI0,
        title:"Submit Business",
        description:"Update your business info and images. Submit your business catalogue or restaurant menu.",
    },
    {
        asset:assets.yourTI1,
        title:"Increase Visibility",
        description:"Choose proper categories and keywords for your business. With our excellent onpage SEO, watch your business grow.",
    }

]

export const comunitygrowth = {
    main:{
        asset:assets.yourTI2,
        description:"Grow your business locally and be found when your customers are looking for you. Be found by local users and market your brand.",
    },
    sub:
    [
        {
            asset:assets.yourTI2,
            title:"Business Page",
            description:"Dedicated business page with all your business information, and much more...",
        },
        {
            asset:assets.yourTI0,
            title:"Blogs",
            description:"Write blogs about your business or promotions your business is having...",
        },
        {
            asset:assets.yourTI1,
            title:"Find Employees",
            description:"Write blogs about your business or promotions your business is having...",
        },
        {
            asset:assets.yourTI1,
            title:"Unfair Review",
            description:"Dedicated business page with all your business information, and much more...",
        },
        {
            asset:assets.yourTI1,
            title:"Increase Followers",
            description:"Write blogs about your business or promotions your business is having...",
        },
        {
            asset:assets.yourTI1,
            title:"Authority Seal",
            description:"Write blogs about your business or promotions your business is having....",
        }
    ]
    }

export const businessCateogrys = [
    {
        asset:assets.yourTI3,
        title:"Free Business Listing",
        description:"You can submit your business for FREE. It is always FREE and always will be.",
    },
    {
        asset:assets.yourTI3,
        title:"Great Tools",
        description:"Get the latest in technology and tools to succeed in your business.",
    },
    {
        asset:assets.yourTI3,
        title:"Increase Sales",
        description:"We have a 4 way rating of your product or service, so you know your weakness and strength.",
    }

]

export const businessBenifit = [
    {
        asset:assets.yourTI2,
        title:"Connect with customers",
        description:"Find out what users in your area looking for? What your competition is upto and what sales do they have going?",
    },
    {
        asset:assets.yourTI3,
        title:"Social Trends",
        description:"See what is trending and what works for your competition? Attract new customers by being part of the trend.",
    },
    {
        asset:assets.yourTI3,
        title:"Invite Followers",
        description:"Get followers for your business and invite them for sales, events and deals. Grow your business presence with your followers.",
    }

]

export const s_post1 = {
    title:"Local Business Credibility",
    asset:assets.testbanner,
    description:"Olafic was built on the idea that local businesses deserve more attention and support than they traditionally receive. We know that you are busy and can’t always afford to set aside time to create print advertisements or get the word out about an event you’re hosting. At Olafic, we make these missions easier and more effective through digital communication. As a member of our user-friendly community, you will be able to transform your company’s online presence, advertising your qualities with the click of a button, and gaining visibility from your existing customers and new people in your target audience. We’ll help you succeed by allowing you to implement deal promotions, couponing, online photo galleries, event listings, job postings, reviews, and more into your strategic marketing plans."
}

export const s_post2 = {
    title:"The World Around Your Business!",
    asset:assets.testbanner,
    description:"All our services are developed around your business needs. We are here to listen to you, and make sure you recieve and excellent City Tipz experience. We expect the same from you to offer your cunsumers the same. Our technology allows to list your business, sell deals, post jobs, create events and open an online store all for FREE. Take advantage of all these and grow your business."
}

export const s_post3 = {
    title:"Your Business Safety",
    asset:assets.testbanner,
    description:"We audit all the reviews and our system know where the reviews are coming from. If there is review that raises RED FLAG, you can simply challenge it and will not be visible, until the issue is resolved. We have been there and understand what a fake review will do for businesses.",
    linkurl:"/"
}

export const availabeCategories = [
    "test1","test2","test3","test4","test5","test6","test7","test8"
]


export const bookinginfo = {
    imgurl:assets.cardpicture,
    ordered:true,
    id:1,
    title:"Elite Spa In Your Own Home And Beyond With Olafic",
    location:{
        city:"Toronto",
        street:"Ontario",
        distance:"24 KM",
        lat: 45.01,
        lng: -73.01,
        hint:false
    },
    services:[
        '5x Spa & Massage',
        '4x Hot Stone',
        '2x Hair Styling',
        '1x Eye Lashes',
        '...'
    ],
    price:100,
    customers:3856,
    date:"15 May 2018",
    friends:[assets.testperson,assets.testperson, assets.testperson, assets.testperson, assets.testperson],
    following:true
}

export const notifyinfo = {
    title:"Florin was your professional",
    description:"Pros can help with booking questions",
    asset:assets.storyL_1
}

export const  helpTopicCategoryItems = [
    {
        title:'Accounts and Payments',
        items:["I Forgot My Password","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'A Guide to Olafic',
        items:["How To Request A Service","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'Signing Up',
        items:["How Does OlaFic Work?","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'Prices and Fees',
        items:["What Are OlaFic Service Fees?","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'Accounts and Payments',
        items:["I Forgot My Password","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'A Guide to Olafic',
        items:["How To Request A Service","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'Signing Up',
        items:["How Does OlaFic Work?","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    },
    {
        title:'Prices and Fees',
        items:["What Are OlaFic Service Fees?","My Password Reset Link Isn't Working","hyperlink button","hyperlink button"]
    }
]

export const termsMenu = [
    {
      name: 'menu1',
      collapsed: true,
      items: [
        {
            name: 'menu1-1',
            collapsed: true,
            items: ["menu1-1-1","menu1-1-2", "menu1-1-3", "menu1-1-4"]
        },
        {
            name: 'menu1-2',
            collapsed: true,
            items: ["menu1-1-1","menu1-1-2", "menu1-1-3", "menu1-1-4"]
        },
        {
            name: 'menu1-3',
            collapsed: true,
            items: ["menu1-1-1","menu1-1-2", "menu1-1-3", "menu1-1-4"]
        },
      ],
    },
    {
        name: 'menu2',
        collapsed: true,
        items: [
          {
              name: 'menu2-1',
              collapsed: true,
              items: ["menu2-1-1","menu2-1-2", "menu2-1-3", "menu2-1-4"]
          },
          {
              name: 'menu2-2',
              collapsed: true,
              items: ["menu2-1-1","menu2-1-2", "menu2-1-3", "menu2-1-4"]
          },
          {
              name: 'menu2-3',
              collapsed: true,
              items: ["menu2-1-1","menu2-1-2", "menu2-1-3", "menu2-1-4"]
          },
        ],
      },
      {
        name: 'menu3',
        collapsed: true,
        items: [
          {
              name: 'menu3-1',
              collapsed: true,
              items: ["menu3-1-1","menu3-1-2", "menu3-1-3", "menu3-1-4"]
          },
          {
              name: 'menu3-2',
              collapsed: true,
              items: ["menu3-1-1","menu3-1-2", "menu3-1-3", "menu3-1-4"]
          },
          {
              name: 'menu3-3',
              collapsed: true,
              items: ["menu3-1-1","menu3-1-2", "menu3-1-3", "menu3-1-4"]
          },
        ],
      }
];



export const topicmenu = [
      {
        name: 'Terms of Service',
        collapsed: true,
        items: [
          "level 1 peer item",
          {
              name: 'level 1 node',
              collapsed: true,
              items: [
                  "level 2 peer item",
                  {
                    name: 'level 2 node',
                    collapsed: true,
                    items: [
                        "level 2 peer item 1", "level 2 peer item 2", "level 2 peer item 3"
                      ]
                    },
                ]
          },
        ],
      },
      "Nondiscrimination Policy",
      "Terms of Service",
      "Nondiscrimination Policy",
      "Terms of Service"
];

export const news = [
    {
        asset:assets.storyP_4,
        kind:'spa',
        subkind:'sauna',
        title:"Elite Spa In Your Own Home And Beyond With Olafic",
        description:"John is a part time worker involved in many charitable actions across the entire world. This should make an impact…",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    },
    {
        asset:assets.storyP_4,
        kind:'spa',
        subkind:'sauna',
        title:"Elite Spa In Your Own Home And Beyond With Olafic",
        description:"John is a part time worker involved in many charitable actions across the entire world. This should make an impact…",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    },
    {
        asset:assets.storyP_4,
        kind:'spa',
        subkind:'sauna',
        title:"Elite Spa In Your Own Home And Beyond With Olafic",
        description:"John is a part time worker involved in many charitable actions across the entire world. This should make an impact…",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    },
    {
        asset:assets.storyP_4,
        kind:'spa',
        subkind:'sauna',
        title:"Elite Spa In Your Own Home And Beyond With Olafic",
        description:"John is a part time worker involved in many charitable actions across the entire world. This should make an impact…",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    }
]

export const reviews = [
    {
        asset:assets.storyP_1,
        title: "Double line list item",
        rating: 1,
        customers: 3856,
        categories: ['Top Reviewer', 'Helpful Reviewer'],
        content:"John is a part time worker involved in many charitable. part time worker involved. John is a part time worker involved in many charitable. part time worker involved.",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    },
    {
        asset:assets.storyP_2,
        title: "Double line list item",
        rating: 1,
        customers: 3856,
        categories: ['Top Reviewer', 'Helpful Reviewer'],
        content:"John is a part time worker involved in many charitable. part time worker involved. John is a part time worker involved in many charitable. part time worker involved.",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    }
]

export const features = [
    {
        asset:assets.storyP_4,
        kind:'spa',
        subkind:'sauna',
        title:"We just launched the new Olafic Marketplace to sell your goods",
        description:"John is a part time worker involved in many charitable actions across the entire world. This should make an impact…",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    },
    {
        asset:assets.storyP_4,
        kind:'spa',
        subkind:'sauna',
        title:"Elite Spa In Your Own Home And Beyond With Olafic",
        description:"John is a part time worker involved in many charitable actions across the entire world. This should make an impact…",
        pics:[assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3,assets.storyP_4,assets.storyP_1, assets.storyP_2, assets.storyP_3],
        comment:5,
        likes:5,
        date:"15 may 2018",
    },
]

export const media_assets = [
    {
        asset:assets.storyP_1,
        link:'Logos',
        logo: 'Chinese white horizontal lockup for responsive web',
    },
    {
        asset:assets.storyP_2,
        link:'Photos',
        logo: 'Chinese white horizontal lockup for responsive web',
    },
    {
        asset:assets.storyP_3,
        link:'Media',
        logo: 'Chinese white horizontal lockup for responsive web',
    },
    {
        asset:assets.storyP_4,
        link:'Media',
        logo: 'Chinese white horizontal lockup for responsive web',
    },
]

export const contacts = [
    {
        country: 'Asia',
        contents: [
            {
                detail: 'General Asia media inquiries',
                link: 'press-asia@olafic.com',
            },
            {
                detail: 'General Asia media inquiries',
                link: 'press-asia@olafic.com',
            },
        ]
    },
]

export const team_members = [
    {
        photo: assets.storyP_1,
        name: 'Amin Sultani',
        role: 'Co-Founder & CEO',
        content: 'Amin is the CEO at xDefine Corporation. He drives the company’s vision, strategy, and growth as it provides interesting and unique ways for people to get services, as well as representing the interests of the businesses, pros around the world. Amin Sultani has 15 years of experience in management and entrepreneurship, including 7 years of hands-on experience at Pearson Airport. He co-founded ASTR in 2013 with $5,000 personal investment and grew exponentially, making over $500,000 in 2014 and doubling its growth in 2015. Their clients included Fortune 500 companies like McDonald’s, Cargill and Korean Airlines. In 2016 Amin resigned to start xDefine Corporation.',
    },
    {
        photo: assets.storyP_2,
        name: 'Vlad T. Mafteiu-Scai',
        role: 'Co-Founder & CDO',
        content: 'Amin is the CEO at xDefine Corporation. He drives the company’s vision, strategy, and growth as it provides interesting and unique ways for people to get services, as well as representing the interests of the businesses, pros around the world. Amin Sultani has 15 years of experience in management and entrepreneurship, including 7 years of hands-on experience at Pearson Airport. He co-founded ASTR in 2013 with $5,000 personal investment and grew exponentially, making over $500,000 in 2014 and doubling its growth in 2015. Their clients included Fortune 500 companies like McDonald’s, Cargill and Korean Airlines. In 2016 Amin resigned to start xDefine Corporation.',
    },
    {
        photo: assets.storyP_3,
        name: 'Mindagaus ',
        role: 'Co-Founder & CDO',
        content: 'Amin is the CEO at xDefine Corporation. He drives the company’s vision, strategy, and growth as it provides interesting and unique ways for people to get services, as well as representing the interests of the businesses, pros around the world. Amin Sultani has 15 years of experience in management and entrepreneurship, including 7 years of hands-on experience at Pearson Airport. He co-founded ASTR in 2013 with $5,000 personal investment and grew exponentially, making over $500,000 in 2014 and doubling its growth in 2015. Their clients included Fortune 500 companies like McDonald’s, Cargill and Korean Airlines. In 2016 Amin resigned to start xDefine Corporation.',
    },
]

export const stories = [
    {
        title: 'The lates news title here',
        content: 'orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
    },
]

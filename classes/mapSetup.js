// #0: Visited
// #1: Collision
// #2: NPC
    // #0: NPC Objects
    // #1: NPC Textures
// #3: ITEM
    // #0: ITEM Objects
    // #1: ITEM Textures
// #4: Throwable
    // #0: Throwable Objects
    // #1: Throwable Textures
// #5: Destroyable
    // #0: Destroyable Objects
    // #1: Destroyable Textures
// #6: MapDisplay
// #7: Sub-Area
var TempNpcInfo = new Array(16);
for(let i = 0; i<TempNpcInfo.length; i++){
  TempNpcInfo[i] = new Array(4);
}
//console.log('TempNpcInfo');
//console.log(TempNpcInfo);

let overWorldZ = [
    [
        [        [false],[
            //map
            ],[
                [
                    new Crab(10,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
                    new Crab(11,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
                ],[
                    'testcrabsz','testcrabsz'
                ],[
                    'testcrabsz','testcrabsz'
                ]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [
                    new Crab(10,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
                    new Crab(11,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
                    new Crab(12,'','normal',0,"",1,1,16,16,195,200,16,16,195,200,15,16,6,1,[],0,crabSmall,100,1),
                    new Crab(13,'','normal',0,"",1,1,16,16,200,236,16,16,200,236,15,16,6,1,[],0,crabSmall,100,1),
                    new Crab(14,'','normal',0,"",1,1,16,16,208,208,16,16,208,208,15,16,6,1,[],0,crabSmall,100,1),
                    new Crab(15,'','normal',0,"",1,1,16,16,160,250,16,16,160,250,15,16,6,1,[],0,crabSmall,100,1),
                ],['testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz'],['testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz']
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [        [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]],
        [
            [false],[
                //map
            ],[[
                //new Crab(8,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(9,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(10,'','normal',0,"",1,1,16,16,195,200,16,16,195,200,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(11,'','normal',0,"",1,1,16,16,200,236,16,16,200,236,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(12,'','normal',0,"",1,1,16,16,208,208,16,16,208,208,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(13,'','normal',0,"",1,1,16,16,160,250,16,16,160,250,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(14,'','normal',0,"",1,1,16,16,160,240,16,16,160,240,15,16,6,1,[],0,crabSmall,100,1),
                //new Crab(15,'','normal',0,"",1,1,16,16,140,248,16,16,140,248,15,16,6,1,[],0,crabSmall,100,1),
               // new Crab(16,'','normal',0,"",1,1,16,16,160,266,16,16,160,266,15,16,6,1,[],0,crabSmall,100,1),
               new Crab(10,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
               new Crab(11,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
            ],[
                'testcrabsz','testcrabsz'
               // ,'testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz'
            ],[
                'testcrabsz','testcrabsz'
               // ,'testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz','testcrabsz'
            ]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
    
            ]
        ],
        [       
            [false],[
                //map
                ],[
                    [
                        new Crab(10,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
                        new Crab(11,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
                        new Crab(12,'','normal',0,"",1,1,16,16,195,200,16,16,195,200,15,16,6,1,[],0,crabSmall,100,1),
                        new Crab(13,'','normal',0,"",1,1,16,16,200,236,16,16,200,236,15,16,6,1,[],0,crabSmall,100,1),
                    ],[
                       'testcrabsz','testcrabsz','testcrabsz','testcrabsz'
                    ],[
                        'testcrabsz','testcrabsz','testcrabsz','testcrabsz'
                     ]
                ],[
                    [],[],[]
                ],[
                    [],[],[]
                ],[
                    [],[],[]
                ],[
                    
                ],[
                    
                ]
        ],
        [   
            [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]
        ],
        [   
            [false],[
            //map
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                [],[],[]
            ],[
                
            ],[
                
            ]
        ],
    ],[            
        [        
            [false],
            [
            //map
            ],[
                new Crab(8,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
                new Crab(9,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
            ],[
    
            ],[
    
            ],[
    
            ],[
                
            ],[
                
            ]
        ],
        [        
            [false],
            [
            //map
            ],[
                new Crab(8,'','normal',0,"",1,1,16,16,240,156,16,16,240,156,15,16,6,1,[],0,crabSmall,100,1),
                new Crab(9,'','normal',0,"",1,1,16,16,240,180,16,16,240,180,15,16,6,1,[],0,crabSmall,100,1),
            ],[
    
            ],[
    
            ],[
    
            ],[
                
            ],[
                
            ]
        ],[
    
        ],[
    
        ],[
    
        ],[
    
        ],[
    
        ],[
            
        ],[
        
        ],[
    
        ],[
            
        ],[
        
        ],[
    
        ],[
    
        ],[
    
        ],[
    
        ],[
    
        ],[
            
        ],[
        
        ],[
    
        ],[
            
        ],[
        
        ],[
    
        ],[
    
        ],[
    
        ],[
    
        ],[
    
        ],[
            
        ],[
        
        ],[
    
        ],[
            
        ],[
        
        ]
    ]
];

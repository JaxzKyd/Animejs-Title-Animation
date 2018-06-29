anime({
  targets:'.name2',
  translateX:[
    {value:70, duration:1000},
    {value:0, duration:1000, delay:200, easing:'easeOutExpo'}
  ],
  rotate:{
    value:'1turn',
    delay:150,
    easing:'easeInOutSine'
  },
  color:[
    {value:'#4B0082', easing:'easeInOutSine'},
    {value:'rgb(0,144,133)', easing:'easeInOutSine'}
  ],
  loop:true
});


anime({
  targets:'.name1',
  translateX:[
    {value:-70, duration:1000},
    {value:0, duration:1000, delay:200, easing:'easeOutExpo'}
  ],
  rotate:{
    value:'2turn',
    delay:150,
    easing:'easeInOutSine',
  },
  color:[
    {value:'rgb(150,0,136)', easing:'easeInOutSine'},
    {value:'rgb(0,58,101)', easing:'easeInOutSine'}
  ],
  loop:true
})




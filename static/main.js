var windowWidth = $(window).width();
layer.config({
  extend: 'kzhomepage/style.css', //加载扩展样式
  skin: 'layer-ext-kzhomepage'
});

// Nav buttons
$('.kz-nav-btn').on('click', function() {
  let btn = $(this);
  let type = btn.data('window') // pop current newtab
  let content = btn.data('href')
  switch (type) {
    case 'pop':
      let title = btn.data('title')
      let shadeClose = btn.data('shade') === 'true' ? false : true
      let anim = btn.data('anim') ? btn.data('anim')*1 : 4
      let area_w = btn.data('area-w') ? btn.data('area-w') : '80%'
      let area_h = btn.data('area-h') ? btn.data('area-h') : '90%'
      layer.open({
          type: 2,
          title: title,
          shadeClose: shadeClose,
          anim:anim,
          closeBtn: 2,
          isOutAnim: false,
          area: [area_w, area_h],
          content: content
      });
      break;
    case 'current':
      window.location = content
      break;
    case 'newtab':
      window.open('_blank').location = content
      break;
  }
});

console.log(
    "\n" +
      " %c KZHomePage v1.2.0 by kaygb " +
      " %c https://blog.170601.xyz/archives/25.html " +
      "\n" +
      "\n",
    "color: #fff; background: #fd79a8; padding:5px 0;",
    "background: #FFF; padding:5px 0;"
  );
// 兼容旧版
if(meting_music_api===""){
    meting_api = "https://api.mizore.cn/meting/api.php";
}
var meting_api =
  "https://api.mizore.cn/meting/api.php?server=:server&type=:type&id=:id";

$.ajax({
//   url: "https://api.mizore.cn/meting/api.php?server=netease&type=playlist&id=20173709",
  url: meting_music_api,
  data:{
    server: music_server,
    type: music_type,
    id: music_id
  },
  dataType: "json",
  success: function (audio) {
    const ap = new APlayer({
        container: music_fixed === false ? document.getElementById('aplayer-inner') : document.getElementById('aplayer-fixed') ,
        audio: audio,
        fixed: music_fixed === false ? false : true,
        autoplay: music_autoplay,
        order: music_order,
        listFolded :true,
        volum: music_volume,
        mini: music_fixed === true ? true:music_mini,
        lrcType: 3,
        preload:"auto",
        loop: music_loop

        
    });
  },
});

fetch('https://v1.hitokoto.cn')
    .then(response => response.json())
    .then(data => {
      const hitokoto = document.getElementById('hitokoto_text')
      hitokoto.href = 'https://hitokoto.cn/?uuid=' + data.uuid
      hitokoto.innerText = data.hitokoto
    })
    .catch(console.error)
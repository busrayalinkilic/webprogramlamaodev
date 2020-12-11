function outputLogo(timeStr) {
  const base64Data = 'W1siIl0sWyIgICBNTU1NTU1NTU1NTU1NTU1NTW0gICAgIElJSUkiXSxbIiAgIE1NTU1NTU1NTU1NTU1NTU1NTU1tICAgSUlJSSJdLFsiICAgTU1NTSAgICAgICAgICAgbU1NTU0gICBJSUlJIl0sWyIgICBNTU1NICAgIE1NTU0gICAgTU1NTSAgIElJSUkiXSxbIiAgIE1NTU0gICAgTU1NTSAgICBNTU1NICAgSUlJSSJdLFsiICAgTU1NTSAgICBNTU1NICAgIE1NTU0gICBJSUlJIl0sWyIgICBNTU1NICAgIE1NTU0gICAgTU1NTSAgIElJSUkiXSxbIiAgIE1NTU0gICAgTU1NTSAgICBNTU1NICAgSUlJSSJdLFsiICAgTU1NTSAgICBNTU1NICAgIE1NTU0gICBJSUlJIl0sWyIgIl1d'
  const miLogoContent = JSON.parse(window.atob(base64Data) || '[]')
  const miLogoVersion = `v0.0.0@${timeStr}#${transformTime(timeStr)}`
  const miLogoStyle = [
    'color:#ff6700',
  ]
  console.log('%c%s', miLogoStyle.join(';'), miLogoContent.concat(miLogoVersion).join('\n'))
}

function transformTime(timestamp) {
  if (timestamp) {
    var time = new Date(timestamp);
    var y = time.getFullYear();
    var M = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    return y + addZero(M) + addZero(d) + '_' + addZero(h) + addZero(m) + addZero(s);
  } else {
    return '';
  }
}

function addZero(m) {
  return m < 10 ? '0' + m : m;
}

function getVersion(url, param) {
  var reg = new RegExp("(^|&)"+ param +"=([^&]*)(&|$)");
  var r = url.substr(url.indexOf("\?")+1).match(reg);
  if (r){
    return unescape(r[2]);
  }
}

window.onload = function() {
  var jsArr = document.getElementsByTagName("script");
  var timeArr = []
  for(i = 0; i < jsArr.length; i++) {
    const url = jsArr[i].src;
    if (url && url.includes('/js/version')) {
      const v = getVersion(url, 'v') || +new Date()
      timeArr.push(parseInt(v))
    }
  }
  // 输出最新时间
  outputLogo(Math.max(...timeArr))
}

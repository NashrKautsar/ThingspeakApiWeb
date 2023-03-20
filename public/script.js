// api url
const api_url = "https://api.thingspeak.com/channels/2057851/feeds.json?api_key=3UQ12XLQH62441F3&results=2";
// masukan url sesuai dengan format <ChannelID>, <ReadAPIKeys> yang ada di Thingspeak, tanpa menggunakan < >

setInterval(() => {
  fetch(api_url)
    .then((hasil) => hasil.json())
    .then((res) => {
      var field = JSON.stringify(res.feeds[0]);
      var obj = JSON.parse(field);
      document.getElementById("Temperature").innerHTML = obj.field1;
      document.getElementById("Kelembaban").innerHTML = obj.field2;
      document.getElementById("Kecerahan").innerHTML = obj.field3;
    });
}, 1000);

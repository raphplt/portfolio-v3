export default function Wave() {
  if (typeof window !== "undefined") {
    var container = document.body;
    var width = container.offsetWidth;
    var height = 200;
    var wave: any = document.getElementById("wave");
    var wave2: any = document.getElementById("wave2");
    var wave3: any = document.getElementById("wave3");
    var wave4: any = document.getElementById("wave4");
    var wave5: any = document.getElementById("wave5");
    var wave6: any = document.getElementById("wave6");
    var wave7: any = document.getElementById("wave7");
    var wave8: any = document.getElementById("wave8");

    var waveWidth = container.offsetWidth; // Wave SVG width (usually container width)
    var waveHeight = 60; // Position from the top of container
    var waveDelta = 20; // Wave amplitude
    var speed = 0.4; // Wave animation speed
    var wavePoints = 6; // How many point will be used to compute our wave
  }
  var points = [];

  function calculateWavePoints(factor: number) {
    var points = [];

    for (var i = 0; i <= wavePoints; i++) {
      var x = (i / wavePoints) * waveWidth;
      var sinSeed = (factor + (i + (i % wavePoints))) * speed * 100;
      var sinHeight = Math.sin(sinSeed / 100) * waveDelta;
      var yPos = Math.sin(sinSeed / 100) * sinHeight + waveHeight;
      points.push({ x: x, y: yPos });
    }

    return points;
  }

  function buildPath(points: string | any[]) {
    var SVGString = "M " + points[0].x + " " + points[0].y;

    var cp0 = {
      x: (points[1].x - points[0].x) / 2,
      y: points[1].y - points[0].y + points[0].y + (points[1].y - points[0].y),
    };

    SVGString +=
      " C " +
      cp0.x +
      " " +
      cp0.y +
      " " +
      cp0.x +
      " " +
      cp0.y +
      " " +
      points[1].x +
      " " +
      points[1].y;

    var prevCp = cp0;
    var inverted = -1;

    for (var i = 1; i < points.length - 1; i++) {
      var cpLength = Math.sqrt(prevCp.x * prevCp.x + prevCp.y * prevCp.y);
      var cp1 = {
        x: points[i].x - prevCp.x + points[i].x,
        y: points[i].y - prevCp.y + points[i].y,
      };

      SVGString +=
        " C " +
        cp1.x +
        " " +
        cp1.y +
        " " +
        cp1.x +
        " " +
        cp1.y +
        " " +
        points[i + 1].x +
        " " +
        points[i + 1].y;
      prevCp = cp1;
      inverted = -inverted;
    }

    SVGString += " L " + width + " " + height;
    SVGString += " L 0 " + height + " Z";
    return SVGString;
  }

  var lastUpdate: number;
  var totalTime = 0;

  function tick() {
    if (typeof window !== "undefined") {
      var now = window.Date.now();
      if (lastUpdate) {
        var elapsed = (now - lastUpdate) / 1000;
        lastUpdate = now;

        totalTime += elapsed;

        var factor = totalTime * Math.PI;
        var _d = buildPath(calculateWavePoints(factor));
        wave.setAttribute("d", _d);
        wave2.setAttribute("d", _d);
        wave3.setAttribute("d", _d);
        wave4.setAttribute("d", _d);
        wave5.setAttribute("d", _d);
        wave6.setAttribute("d", _d);
        wave7.setAttribute("d", _d);
        wave8.setAttribute("d", _d);
      } else {
        lastUpdate = now;
      }

      window.requestAnimationFrame(tick);
    }
  }
  tick();

  return (
    <svg
      width="100%"
      height="200"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      id="wave"
    >
      <path id="wave" d="" stroke="#67E8F9" fill="#67E8F9" />
      <path
        id="wave2"
        d=""
        stroke="#81D4FA"
        fill="#81D4FA"
        className="translate-y-[5%]"
      />
      <path
        id="wave3"
        d=""
        stroke="#4FC3F7"
        fill="#4FC3F7"
        className="translate-y-[10%]"
      />
      <path
        id="wave4"
        d=""
        stroke="#29B6F6"
        fill="#29B6F6"
        className="translate-y-[15%]"
      />
      <path
        id="wave5"
        d=""
        stroke="#03A9F4"
        fill="#03A9F4"
        className="translate-y-[20%]"
      />
      <path
        id="wave6"
        d=""
        stroke="#039BE5"
        fill="#039BE5"
        className="translate-y-[25%]"
      />
      <path
        id="wave7"
        d=""
        stroke="#0288D1"
        fill="#0288D1"
        className="translate-y-[30%]"
      />
      <path
        id="wave8"
        d=""
        stroke="#0277BD"
        fill="#0277BD"
        className="translate-y-[35%]"
      />
    </svg>
  );
}

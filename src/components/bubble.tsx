export default function Bubble(props: any) {
  const delay = Math.random() * 10;
  return (
    <div
      className="h-4 w-4 bg-white rounded-full opacity-0"
      style={{
        animation: `circleAnimation 2s`,
        left: `${props.x}px`,
        top: `${props.y}px`,
        position: "absolute",
        animationDelay: `${delay}s`,
        background:
          "radial-gradient(30px 30px at right, transparent 50%, #065BDB 52%) 0% 10px/35px 30px, radial-gradient(30px 30px at left, transparent 50%, #065BDB 52%) 100% 10px/35px 30px, linear-gradient(to bottom, rgba(87, 144, 231, 1), rgba(87, 144, 231, 0)) 0 10px/100% 30px, #065BDB",
        backgroundRepeat: "no-repeat",
        boxSizing: "border-box",
      }}
    >
      <style>{styles}</style>
    </div>
  );
}

const styles = `
@keyframes circleAnimation {
  0% {
    transform: scale(1);
    opacity: .4;
  }
  95% {
    transform: scale(10);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
`;

const styles2 = `
.bg {

`;

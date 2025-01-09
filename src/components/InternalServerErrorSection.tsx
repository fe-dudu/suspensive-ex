export default function InternalServerErrorSection() {
  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>500</p>
      <button onClick={() => window.location.reload()}>refresh</button>
    </div>
  );
}

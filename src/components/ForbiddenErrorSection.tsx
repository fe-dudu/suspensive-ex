export default function ForbiddenErrorSection() {
  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>403</p>
      <button onClick={() => window.location.reload()}>refresh</button>
    </div>
  );
}

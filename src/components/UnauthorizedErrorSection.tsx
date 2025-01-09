export default function UnauthorizedErrorSection() {
  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>401</p>
      <button onClick={() => window.location.reload()}>refresh</button>
    </div>
  );
}

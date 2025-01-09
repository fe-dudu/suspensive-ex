export default function NotFoundErrorSection() {
  return (
    <div style={{ width: '100dvw', height: '100dvh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <p>404</p>
      <button onClick={() => window.location.reload()}>refresh</button>
    </div>
  );
}

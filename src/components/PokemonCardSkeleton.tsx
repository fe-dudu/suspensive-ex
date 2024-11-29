
export default function PokemonCardSkeleton() {
  return (
    <div
      style={{
        width: 'calc(33.3% - 16px)',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          border: '1px solid #eee',
          borderRadius: 4,
          padding: 16,
          alignItems: 'center',
        }}
      >
        <div style={{ width: '96px', height: '96px', borderRadius: "50%", background: '#eee' }} />
        <span>?</span>
      </div>
    </div>
  );
}

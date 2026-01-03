export default function Home() {
  return (
    <main style={{ padding: 16, fontFamily: "system-ui" }}>
      <h1>競馬収支アプリ</h1>

      <div style={{ display: "grid", gap: 10, marginTop: 16 }}>
        <a href="/login">ログイン</a>
        <a href="/calendar">カレンダー</a>
        <a href="/list">一覧</a>
        <a href="/new">新規入力</a>
        <a href="/month">月別収支</a>
      </div>
    </main>
  );
}

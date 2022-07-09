export function MainContent() {
  return (
    <div>
      <h3>Customize Hawkeye with React </h3>
      <small>
        <ol>
          <li>use Reactor as Template and clone git repo to local </li>
          <li> Customize onInit.tsx and onRender.ts files .</li>
          <li> PS: functional components work with jsx includes .</li>
          <li> run cmd : npm run fix </li>
          <li> run cmd : npm run dev </li>
          <li> run cmd : npm run build </li>
          <li>
            Copy content of dist/panel-options.json into Grafana plugin Panel
            import/export section
          </li>
        </ol>
      </small>
    </div>
  );
}

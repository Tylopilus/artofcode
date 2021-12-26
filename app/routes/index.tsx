import { Filter } from '~/molecules/Filter';

export default function Index() {
  return (
    <div>
      <Filter />
      {/* { display: block;
  columns: 16rem;
  gap: 1rem;
}
[value="multicolumn"]:checked ~ main figure {
  margin-bottom: 1rem;
  break-inside: avoid;
}} */}
      <main className="columns-3xs mt-8">
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587383378486-83d683d9d02d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1588395856595-235a6a1ccca8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo-1587825027984-c4476461c8f9.jpg" />
        </figure>
        <figure className="mb-4">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo-1588503391289-5f7b28258022.jpg" />
        </figure>
        <figure className="mb-4">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo-1586603234056-2158d916b705.jpg" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587462829651-7fd0208d766e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1585652505968-6266ecf26133?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586450463118-8d0cddab713f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587993988198-a3d05e119eb0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587750059642-d55dfc265acd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586692283466-6e08f395f627?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586796105950-b885786d8597?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587169544748-d21bd810f57e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586943101559-4cdcf86a6f87?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586767451503-204b55047cb2?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586754102101-36b67e4c5bcf?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1585791022456-be89ddf09c75?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587063749684-d4926a4fc233?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586695940356-4b1c61eabbc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587151711096-23c51f92c920?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587068786187-db37681155f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1585841960320-f70aa9b7da69?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1586968099622-45379e907f32?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1588046883141-44883b3c0f15?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
        <figure className="mb-4">
          <img src="https://images.unsplash.com/photo-1587061966530-a50125ba8512?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" />
        </figure>
      </main>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}

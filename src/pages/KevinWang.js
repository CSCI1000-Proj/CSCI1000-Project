export default function examplePage() {
  return (
    <div className='container'>
      <title>Website</title>
      <link rel='icon' href='/favicon.ico' />

      <main>
        <div className='underline'>
          <h1 className='title'>Suppose that you were sitting down at this table. </h1>
        </div>
        <img
          className='pic'
          src='https://i.pinimg.com/originals/9a/03/c0/9a03c04731c64aa72feb258091548c93.png'
          alt='funny valentine, 23rd president of the united states'
        />

        <p className='description'>
        The napkins are in front of you, which napkin would you take? The one on your ‘left’? 
        Or the one on your ‘right’? The one on your left side? Or the one on your right side? 
        Usually you would take the one on your left side. That is ‘correct’ too. But in a larger 
        sense on society, that is wrong. Perhaps I could even substitute ‘society’ with the ‘Universe’. 
        The correct answer is that ‘It is determined by the one who takes his or her own napkin 
        first.’ …Yes? If the first one takes the napkin to their right, then there’s no choice 
        but for others to also take the ‘right’ napkin. The same goes for the left. Everyone else
        will take the napkin to their left, because they have no other option. This is ‘society’… 
        Who are the ones that determine the price of land first? There must have been someone who
        determined the value of money, first. The size of the rails on a train track? The magnitude
        of electricity? Laws and Regulations? Who was the first to determine these things? Did we
        all do it, because this is a Republic? Or was it Arbitrary? NO! The one who took the napkin
        first determined all of these things! The rules of this world are determined by that same
        principle of ‘right or left?’! In a Society like this table, a state of equilibrium, once
        one makes the first move, everyone must follow! In every era, this World has been operating
        by this napkin principle. And the one who ‘takes the napkin first’ must be someone who is
        respected by all. It’s not that anyone can fulfill this role… Those that are despotic or
        unworthy will be scorned. And those are the ‘losers’. In the case of this table, the ‘eldest’
        or the ‘Master of the party’ will take the napkin first… Because everyone ‘respects’ those
        individuals. 
        </p>

        <a className='button' href='/'>
          <p> Back to Home Page</p>
        </a>
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          max-width: 60rem;
          margin: auto;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .underline {
          /* border-bottom: solid black; */
          margin-bottom: 1.5rem;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        .pic {
          height: 450px;
          width: 450px;
        }

        .button {
          /* margin: .5rem; */
          flex-basis: 45%;
          padding: 0.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .button:hover,
        .button:focus,
        .button:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .button p {
          font-size: 1rem;
          font-weight: 600;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
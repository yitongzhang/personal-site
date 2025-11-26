export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">About Yitong</h1>
      <div className="prose prose-gray max-w-none">
        <p className="text-lg mb-4">
          Hi! I'm Yitong, a designer in San Francisco. I grew up in Montreal,
          Canada – a very cold place my family moved to when I was young.
          Immigration is a big part of my story. You can listen to me talk about
          it on{" "}
          <a
            href="https://designdetails.fm/episodes/1xROYMXj"
            className="text-blue-600 hover:underline"
          >
            Design Details
          </a>
          . I currently work on{" "}
          <a
            href="https://nounsagora.com/"
            className="text-blue-600 hover:underline"
          >
            Agora, a public protocol governance app
          </a>{" "}
          and{" "}
          <a
            href="https://vectordao.com/"
            className="text-blue-600 hover:underline"
          >
            Vector, coop-style agency
          </a>
          . Before that, I spent almost four years at Coinbase as a product
          designer.
        </p>
        <p className="mb-4">
          In my spare time, I work on a bunch of side projects like{" "}
          <a
            href="https://www.flowchart.design/"
            className="text-blue-600 hover:underline"
          >
            Autoflow
          </a>
          , a marketing page pattern library called{" "}
          <a
            href="http://goodweb.design/"
            className="text-blue-600 hover:underline"
          >
            Goodweb.design
          </a>
          , a collection of{" "}
          <a
            href="https://www.buildgpt3.com/"
            className="text-blue-600 hover:underline"
          >
            GPT3 prompts
          </a>
          , and this vegetable seasonality{" "}
          <a
            href="http://howfresh.co/"
            className="text-blue-600 hover:underline"
          >
            website
          </a>
          . Most of these could really use a bit of maintenance. Oh and I also
          tend to a beautiful{" "}
          <a
            href="https://twitter.com/zhayitong/status/1238957144604467201"
            className="text-blue-600 hover:underline"
          >
            vegetable garden
          </a>
          .
        </p>
      </div>
    </div>
  );
}
